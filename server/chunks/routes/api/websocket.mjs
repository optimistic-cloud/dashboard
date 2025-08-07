import { u as useLogger } from '../../_/logger.mjs';
import { b as defineWebSocketHandler, u as useStorage, r as runTask } from '../../nitro/nitro.mjs';
import { c as configFileName } from '../../_/config.mjs';
import 'consola/core';
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
import 'yaml';
import 'zod';

const logger = useLogger("websocket");
const websocket = defineWebSocketHandler({
  async open(peer) {
    logger.info("Peer connected", peer);
    const storage = useStorage("data");
    await storage.watch(async (_, key) => {
      if (key !== `data:${configFileName}`) {
        return;
      }
      await runTask("config:update");
      peer.send({ event: "config:update" });
    });
  },
  async message(peer, message) {
    const { event } = JSON.parse(message);
    if (event === "ping") {
      peer.send({ event: "pong" });
    }
  },
  async close(peer) {
    logger.info("Peer disconnected", peer);
  }
});

export { websocket as default };
//# sourceMappingURL=websocket.mjs.map
