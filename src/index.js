// Feathers application
import WoodmontAPI from './api'

// UI components
import * as WoodmontComponents from './components'

// Component Libary config
import * as WoodmontConfig from './config'

// Utility functions
import * as WoodmontUtils from './utils'

/**
 * @file Package Entry Point
 * @author Lexus Drumgold <lexus.drumgold@modelb.com>
 */

/**
 * @namespace WoodmontJS
 */
export const WoodmontJS = {
  api: WoodmontAPI,
  components: WoodmontComponents,
  config: WoodmontConfig,
  utils: WoodmontUtils
}

export {
  WoodmontJS as default,
  WoodmontAPI,
  WoodmontComponents,
  WoodmontConfig,
  WoodmontUtils
}
