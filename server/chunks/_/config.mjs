import { u as useLogger } from './logger.mjs';
import { u as useStorage, n as defu } from '../nitro/nitro.mjs';
import nodeCrypto from 'node:crypto';
import yaml from 'yaml';
import { z, ZodError } from 'zod';

const statusSchema = z.object({
  enabled: z.boolean().optional(),
  interval: z.number().optional(),
  animation: z.boolean().optional()
});
const iconSchema = z.object({
  url: z.string().optional(),
  name: z.string().optional(),
  wrap: z.boolean().optional(),
  background: z.string().optional(),
  color: z.string().optional()
});
const tagSchema = z.object({
  name: z.string(),
  color: z.string()
});
const serviceSchema = z.object({
  title: z.string().nullish().optional(),
  description: z.string().nullish().optional(),
  link: z.string().nullish().optional(),
  target: z.string().optional(),
  icon: iconSchema.optional(),
  status: statusSchema.optional(),
  type: z.string().optional(),
  options: z.record(z.any()).optional(),
  secrets: z.record(z.any()).optional()
});

const configSchema = z.object({
  title: z.string().optional(),
  lang: z.string().optional(),
  theme: z.string().optional(),
  checkUpdates: z.boolean().optional(),
  tags: z.array(tagSchema).optional(),
  services: z.union([
    z.array(serviceSchema),
    z.record(z.array(serviceSchema))
  ])
});

const logger = useLogger("config");
function determineService(items, tags) {
  return items.map((item) => ({
    ...item,
    id: nodeCrypto.randomUUID(),
    tags: (item.tags || []).map((tag) => {
      if (typeof tag === "string") {
        return tags.get(tag) || {
          name: tag,
          color: "blue"
        };
      }
      return tag;
    })
  }));
}
const configFileName = "config.yml";
function getDefaultConfig() {
  return {
    title: "Mafl Home Page",
    lang: "en",
    theme: "system",
    checkUpdates: true,
    layout: {
      grid: {
        small: 2,
        medium: 2,
        large: 3,
        xlarge: 4
      }
    },
    behaviour: {
      target: "_blank"
    },
    tags: [],
    services: []
  };
}
function createTagMap(tags) {
  return tags.reduce((acc, tag) => {
    acc.set(tag.name, tag);
    return acc;
  }, /* @__PURE__ */ new Map());
}
async function loadConfig() {
  const defaultConfig = getDefaultConfig();
  const storage = useStorage("data");
  try {
    if (!await storage.hasItem(configFileName)) {
      throw new Error("Config not found");
    }
    const raw = await storage.getItem(configFileName);
    const config = yaml.parse(raw || "") || {};
    const services = [];
    const tags = createTagMap(config.tags || []);
    configSchema.parse(config);
    if (Array.isArray(config.services)) {
      services.push({
        items: determineService(config.services, tags)
      });
    } else {
      const entries = Object.entries(config.services || []);
      for (const [title, items] of entries) {
        services.push({
          title,
          items: determineService(items, tags)
        });
      }
    }
    return defu({ ...config, services }, defaultConfig);
  } catch (e) {
    logger.error(e);
    if (e instanceof Error) {
      defaultConfig.error = e.message;
    }
    if (e instanceof ZodError) {
      defaultConfig.error = JSON.stringify(
        e.format(),
        (key, val) => key === "_errors" && !val.length ? void 0 : val,
        " "
      );
    }
  }
  return defaultConfig;
}
async function setConfig(config) {
  const storage = useStorage("main");
  await storage.setItem("config", config);
  await storage.setItem("services", extractServicesFromConfig(config));
  logger.success('Set "main" config');
}
async function getConfig() {
  const storage = useStorage("main");
  await storage.getKeys();
  return storage.getItem("config");
}
function extractSafelyConfig(config) {
  return JSON.parse(JSON.stringify(
    config,
    (key, val) => key === "secrets" ? void 0 : val
  ));
}
function extractServicesFromConfig(config) {
  return config.services.reduce((acc, group) => {
    for (const item of group.items) {
      acc[item.id] = item;
    }
    return acc;
  }, {});
}

export { configFileName as c, extractSafelyConfig as e, getConfig as g, loadConfig as l, setConfig as s };
//# sourceMappingURL=config.mjs.map
