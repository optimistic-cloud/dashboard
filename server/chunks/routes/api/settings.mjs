import { d as defineEventHandler, u as useStorage, c as createError } from '../../nitro/nitro.mjs';
import { e as extractSafelyConfig } from '../../_/config.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'events';
import 'https';
import 'http';
import 'net';
import 'tls';
import 'crypto';
import 'stream';
import 'url';
import 'zlib';
import 'buffer';
import 'node:fs';
import 'node:path';
import 'chokidar';
import 'anymatch';
import 'node:url';
import '../../_/logger.mjs';
import 'consola/core';
import 'yaml';
import 'zod';

const settings = defineEventHandler(async () => {
  const storage = useStorage("main");
  const config = await storage.getItem("config");
  if (!config) {
    throw createError({
      statusCode: 500,
      statusMessage: "Bad loading config"
    });
  }
  return extractSafelyConfig(config);
});

export { settings as default };
//# sourceMappingURL=settings.mjs.map
