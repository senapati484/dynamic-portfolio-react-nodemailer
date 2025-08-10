import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SITE_URL: z.string().url().optional(),
  },
  runtimeEnv: {
    SITE_URL: process.env.SITE_URL,
  },
});
