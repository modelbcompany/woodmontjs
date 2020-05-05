// Packages
import { addons } from '@storybook/addons'

/**
 * @file Storybook UI Configuration
 * @see {@link https://storybook.js.org/docs/configurations/options-parameter/}
 * @see
 * {@link https://woodmontjs.modelb.now.sh/docs/storybook-config}
 */

addons.setConfig({
  /**
   * Addon panel ID.
   * The HTML panel will be selected by default.
   *
   * @see {@link https://github.com/whitespace-se/storybook-addon-html}
   *
   * @type {String}
   */
  selectedPanel: 'markup/panel'
})
