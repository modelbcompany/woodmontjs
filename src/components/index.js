// Component Modules
import * as Atoms from './atoms'
import * as Molecules from './molecules'
import * as Organisms from './organisms'
import * as Templates from './templates'

/**
 * @file UI Components
 * @module components
 * @see {@link http://atomicdesign.bradfrost.com/chapter-2/}
 */

/**
 * Component library.
 *
 * @namespace Components
 */
export const Components = {
  ...Atoms, ...Molecules, ...Organisms, ...Templates
}

export * from './atoms'
export * from './molecules'
export * from './organisms'
export * from './templates'

export default Components
