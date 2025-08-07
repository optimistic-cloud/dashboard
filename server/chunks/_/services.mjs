import { l as logger } from './logger.mjs';
import { g as getQuery, c as createError, u as useStorage } from '../nitro/nitro.mjs';
import { ping } from '@network-utils/tcp-ping';

async function pingService(endpoint) {
  try {
    const url = new URL(endpoint);
    const probe = await ping({
      address: url.hostname,
      port: Number.parseInt(url.port || "80"),
      attempts: 1
    });
    return {
      status: probe.errors.length === 0,
      time: Math.floor(probe.averageLatency)
    };
  } catch (e) {
    logger.error(e);
  }
  return {
    status: false,
    time: 0
  };
}
async function getService(event) {
  const { id } = getQuery(event);
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID can not be null"
    });
  }
  const storage = useStorage("main");
  const services = await storage.getItem("services");
  if (!services || !Object.hasOwn(services, id)) {
    throw createError({
      statusCode: 404,
      statusMessage: `Service with ID "${id}" does not exist`
    });
  }
  return services[id];
}
async function getServiceWithDefaultData(event) {
  var _a;
  const config = await getService(event);
  const defaultData = {
    ping: ((_a = config == null ? void 0 : config.status) == null ? void 0 : _a.enabled) ? await pingService(config.link || "") : void 0
  };
  return { config, defaultData };
}
function returnServiceWithData(service, data) {
  return {
    ...service.defaultData,
    data
  };
}

export { getServiceWithDefaultData as g, returnServiceWithData as r };
//# sourceMappingURL=services.mjs.map
