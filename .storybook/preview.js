// Packages
import { addDecorator, addParameters } from '@storybook/react'
import { DocsContainer } from '@storybook/addon-docs/blocks'
import { withA11y } from '@storybook/addon-a11y'
import { withConsole } from '@storybook/addon-console'
import { withHTML } from '@whitespace/storybook-addon-html/react'
import { withKnobs } from '@storybook/addon-knobs'

// Components
import Preview from './components/Preview'
import Components from '../src'

// Custom Viewports
import { viewports } from './viewports'

/**
 * @file Storybook Configuration
 * @see
 * {@link https://woodmontjs.modelb.now.sh/ref/storybook-config}
 */

// Customize Storybook UI
addParameters({
  docs: {
    components: { ...Components, Preview: Preview },
    container: DocsContainer
  },
  options: { showRoots: true },
  viewport: { viewports }
})

// Display compiled HTML for each story
addDecorator(withHTML({
  prettier: {
    parser: 'json'
  }
}))

// Add accessibility testing
addDecorator(withA11y)

// Stress test components
addDecorator(withKnobs({
  escapeHTML: false
}))

// Receive console outputs as a console, warn and error in the actions panel
addDecorator((storyFn, context) => withConsole()(storyFn)(context))
