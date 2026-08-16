import { defineConfig } from "@prisma/config";

export default defineConfig({
  datasource: {
    provider: "postgresql",
    url: process.env.DATABASE_URL || "postgresql://neondb_owner:npg_1hjqg6SsFidO@ep-lucky-grass-ay99wkdm-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=verify-full",
  },
});
