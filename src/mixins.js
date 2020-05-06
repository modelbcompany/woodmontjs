// Utility Functions
import { isObject } from './utils'

/**
 * @file Service Mixins
 * @module mixins
 */

// Export utilities as mixins
export * from './utils/error.utils'
export * from './utils/objects.utils'
export * from './utils/strings.utils'
export * from './utils/validation.utils'

/**
 * Pulls the relevant properties from the incoming floorplan data.
 *
 * @todo Update documentation
 *
 * @param {Floorplan} data - Incoming Floorplan data
 * @returns {object}
 */
export const parseFloorplanData = data => {
  if (!isObject(data)) return {}

  const {
    FloorplanId: id,
    FloorplanImageAltText: alt,
    FloorplanImageName: title,
    FloorplanImageURL: src,
    FloorplanName: name
  } = data

  return {
    id,
    name,
    image: {
      alt: alt.length ? alt : `Floorplan ${name}`,
      src,
      title
    }
  }
}
