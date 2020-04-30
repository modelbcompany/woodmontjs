// Packages
import React from 'react'

// Component
import Article from '..'

// Metadata
import { ArticleStoryParams } from '../metadata/Article.meta'

/**
 * @file Stories - Article
 * @module components/molecules/Article/stories/Article
 */

export default {
  title: 'Components/Molecules/Article',
  component: Article,
  parameters: ArticleStoryParams
}

/**
 * Default @link Article story.
 *
 * @returns {Article}
 */
export const Default = () => <Article />
