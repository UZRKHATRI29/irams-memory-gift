import pg from "pg";

const connectionString =
  process.env['DATABASE_URL'] ||
  (import.meta as any).env?.VITE_DATABASE_URL ||
  (import.meta as any).env?.DATABASE_URL ||
  "postgresql://neondb_owner:npg_1hjqg6SsFidO@ep-lucky-grass-ay99wkdm-pooler.c-5.us-east-2.aws.neon.tech:5432/neondb?sslmode=require&channel_binding=require";

type DbGlobals = {
  pool?: pg.Pool;
};

const globalForDb = globalThis as unknown as DbGlobals;

function createPool() {
  const nextPool = new pg.Pool({
    connectionString,
    port: Number(new URL(connectionString).port || 5432),
    ssl: { rejectUnauthorized: false },
    max: 3,
    idleTimeoutMillis: 10_000,
    connectionTimeoutMillis: 10_000,
    allowExitOnIdle: true,
  });

  nextPool.on("error", (error) => {
    console.warn("Postgres pool connection error:", error.message);
  });

  return nextPool;
}

export let pool = globalForDb.pool ?? createPool();

if (process.env['NODE_ENV'] !== "production") {
  globalForDb.pool = pool;
}

export function isConnectionClosedError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;

  const record = error as Record<string, unknown>;
  if (record['code'] === "P1017") return true;

  const message = typeof record['message'] === "string" ? (record["message"] as string) : "";
  if (/server has closed the connection|connectionclosed|connection closed/i.test(message)) {
    return true;
  }

  const meta = record['meta'] as Record<string, unknown> | undefined;
  const cause = record['cause'] ?? meta?.['driverAdapterError'];
  return cause ? isConnectionClosedError(cause) : false;
}

export async function resetDatabaseConnection() {
  const previousPool = pool;
  pool = createPool();

  if (process.env['NODE_ENV'] !== "production") {
    globalForDb.pool = pool;
  }

  await Promise.allSettled([previousPool.end()]);
}

export async function rawQuery<T = any>(text: string, params?: any[]): Promise<T[]> {
  try {
    const res = await pool.query(text, params);
    return res.rows as T[];
  } catch (error) {
    if (!isConnectionClosedError(error)) throw error;
    await resetDatabaseConnection();
    const res = await pool.query(text, params);
    return res.rows as T[];
  }
}

