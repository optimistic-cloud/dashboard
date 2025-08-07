import { m as defineTask } from '../nitro/nitro.mjs';
import { l as loadConfig, s as setConfig } from '../_/config.mjs';
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
import '../_/logger.mjs';
import 'consola/core';
import 'yaml';
import 'zod';

const update = defineTask({
  meta: {
    name: "config:update"
  },
  async run() {
    const config = await loadConfig();
    await setConfig(config);
    return {
      result: {}
    };
  }
});

export { update as default };
//# sourceMappingURL=update.mjs.map
