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

const cachedOWMData = defineCachedFunction(async ({ lon, lat, units, apiKey, lang }) => {
  const response = await $fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=${lang}`);
  return {
    temp: response.main.temp,
    place: response.name,
    iconId: response.weather[0].id,
    description: response.weather[0].description
  };
}, { maxAge: 60 * 24, getKey: ({ lon, lat }) => `${lon}-${lat}` });
const openweathermap = defineEventHandler(async (event) => {
  const service = await getServiceWithDefaultData(event);
  const config = await getConfig();
  const { options, secrets } = service.config;
  const owm = await cachedOWMData({
    lon: options.lon,
    lat: options.lat,
    units: options.units || "metric",
    apiKey: secrets.apiKey,
    lang: (config == null ? void 0 : config.lang) || "en"
  });
  return returnServiceWithData(service, owm);
});

export { openweathermap as default };
//# sourceMappingURL=openweathermap.mjs.map
