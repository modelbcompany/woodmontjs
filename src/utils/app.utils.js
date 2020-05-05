// Utility Functions
import { sortObjectByKey } from './objects.utils'

/**
 * @file Utilities - Feathers & Storybook apps
 * @module utils/app
 */

/**
 * Retreives the components from a component module.
 *
 * @param mod will have @param mod.default renamed to @param mod.default.name .
 *
 * @param {Object} mod - Module to retreive components from
 * @returns {Object} Object containing components
 */
export const getComponentsForPropTable = mod => {
  // If no module, return empty object
  if (!mod) return {}

  // Get name of default component
  const { name } = mod.default

  // Get components and rename default export
  const components = Object.assign({}, { ...mod, default: undefined })
  components[`${name}`] = mod.default

  // Return components
  return sortObjectByKey(components)
}

/**
 * Registers a Feathers service.
 *
 * @param {Object} app - Feathers application
 * @param {object} param1 - Service config
 * @param {string} param1.id - Service key from @namespace API_CONFIG
 * @param {object} param1.service - Service object
 * @param {object} param1.hooks - Service hooks
 * @returns {undefined}
 */
export const registerService = (app, { name, object, hooks }) => {
  const path = app.get('services')[name]

  app.use(path, object)

  if (hooks) app.service(path).hooks(hooks)
}
