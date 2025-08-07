import { d as defineEventHandler, u as useStorage, o as ofetch } from '../../nitro/nitro.mjs';
import { u as useLogger } from '../../_/logger.mjs';
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
import 'consola/core';

const CURRENT_VERSION = "0.15.4";
const CACHE_DURATION = 24 * 60 * 60 * 1e3;
const update = defineEventHandler(async () => {
  const storage = useStorage("updates");
  const logger = useLogger("updates");
  const now = Date.now();
  const cachedResponse = await storage.getItem("latest");
  if (cachedResponse && now - cachedResponse.timestamp < CACHE_DURATION) {
    logger.debug("Returning cached response:", cachedResponse.data);
    return cachedResponse.data;
  } else {
    logger.debug("Fetching latest release:", cachedResponse ? "cached expired" : "not cached");
  }
  try {
    logger.info("Fetching latest release from GitHub");
    const latestReleases = await ofetch("https://api.github.com/repos/hywax/mafl/releases/latest");
    const latestVersion = latestReleases.tag_name.replace("v", "");
    const parseVersion = (version) => Number.parseInt(version.replace(/\./g, ""), 10);
    const difference = parseVersion(latestVersion) - parseVersion(CURRENT_VERSION);
    const response = {
      available: difference > 0,
      version: latestVersion
    };
    await storage.setItem("latest", {
      data: response,
      timestamp: now
    });
    return response;
  } catch (error) {
    logger.error("Failed to fetch the latest release from GitHub API:", error);
    if (cachedResponse) {
      return cachedResponse.data;
    }
    return {
      available: false,
      version: CURRENT_VERSION
    };
  }
});

export { update as default };
//# sourceMappingURL=update.mjs.map
