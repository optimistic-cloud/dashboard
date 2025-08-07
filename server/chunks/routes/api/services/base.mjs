import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
import { g as getServiceWithDefaultData, r as returnServiceWithData } from '../../../_/services.mjs';
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
import '../../../_/logger.mjs';
import 'consola/core';
import '@network-utils/tcp-ping';

const base = defineEventHandler(async (event) => {
  const service = await getServiceWithDefaultData(event);
  return returnServiceWithData(service, {});
});

export { base as default };
//# sourceMappingURL=base.mjs.map
