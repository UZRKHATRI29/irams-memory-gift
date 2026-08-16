import type { VercelRequest, VercelResponse } from "@vercel/node";
import pg from "pg";

const connectionString =
  process.env['DATABASE_URL'] ||
  process.env['VITE_DATABASE_URL'] ||
  "postgresql://neondb_owner:npg_1hjqg6SsFidO@ep-lucky-grass-ay99wkdm-pooler.c-5.us-east-2.aws.neon.tech:5432/neondb?sslmode=require&channel_binding=require";

let pool: pg.Pool | undefined;

function getPool(): pg.Pool {
  if (!pool) {
    pool = new pg.Pool({
      connectionString,
      port: Number(new URL(connectionString).port || 5432),
      ssl: { rejectUnauthorized: false },
      max: 3,
      idleTimeoutMillis: 10_000,
      connectionTimeoutMillis: 10_000,
    });
  }
  return pool;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  try {
    const { text, params } = req.body || {};
    if (!text || typeof text !== "string") {
      res.status(400).json({ error: "Missing SQL query text" });
      return;
    }

    const clientPool = getPool();
    const result = await clientPool.query(text, params || []);
    res.status(200).json({ success: true, rows: result.rows });
  } catch (error: any) {
    console.error("Vercel API DB Error:", error);
    res.status(500).json({ success: false, error: error?.message || "Database Query Failed" });
  }
}
