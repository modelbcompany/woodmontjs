// Documentation
import mdx from '../Article.mdx'

/**
 * @file Story Metadata - Article
 * @module components/molecules/Article/metadata/Article
 */

/**
 * Storybook parameters for all @link Article stories.
 *
 * @namespace ArticleStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 * @property {object} knobs - Storybook Knobs config
 */
export const ArticleStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx },
  knobs: {
    disabled: true
  }
}
