import { d as defineEventHandler, a as defineCachedFunction } from '../../../nitro/nitro.mjs';
import { g as getConfig } from '../../../_/config.mjs';
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
import 'yaml';
import 'zod';
import '@network-utils/tcp-ping';

const cachedIpApiData = defineCachedFunction(async (lang = "en") => {
  const response = await $fetch(`http://ip-api.com/json/?lang=${lang}`);
  return {
    ip: response.query,
    place: `${response.city}, ${response.regionName}`,
    country: response.countryCode.toLowerCase()
  };
}, { maxAge: 60 * 24, getKey: ({ ip }) => ip });
const ipApi = defineEventHandler(async (event) => {
  const service = await getServiceWithDefaultData(event);
  const config = await getConfig();
  const ip = await cachedIpApiData(config == null ? void 0 : config.lang);
  return returnServiceWithData(service, ip);
});

export { ipApi as default };
//# sourceMappingURL=ip-api.mjs.map
