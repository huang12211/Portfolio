// import path from 'node:path';

import { PGlite } from '@electric-sql/pglite';
import { PHASE_PRODUCTION_BUILD } from 'next/dist/shared/lib/constants';
import { Client } from 'pg';

import { Env } from './Env';

let client;

if (process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD && Env.DATABASE_URL) {
  client = new Client({
    connectionString: Env.DATABASE_URL,
  });
  await client.connect();
} else {
  const global = globalThis as unknown as { client: PGlite };

  if (!global.client) {
    global.client = new PGlite();
    await global.client.waitReady;
  }
}
