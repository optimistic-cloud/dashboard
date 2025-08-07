import { createConsola as createConsola$1 } from 'consola/core';

const basicReporter = {
  log(logObj) {
    (console[logObj.type] || console.log)(...logObj.args);
  }
};
function createConsola(options = {}) {
  return createConsola$1({
    reporters: [basicReporter],
    ...options
  });
}
const consola = createConsola();
consola.consola = consola;

const logger = consola;
function useLogger(tag, options = {}) {
  return tag ? createConsola(options).withTag(tag) : logger;
}

export { logger as l, useLogger as u };
//# sourceMappingURL=logger.mjs.map
