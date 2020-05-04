// Packages
import React from 'react'

// Component
import Form from '..'

// Metadata
import { FormStoryParams } from '../metadata/Form.meta'

/**
 * @file Stories - Form
 * @module components/molecules/Form/stories/Form
 */

export default {
  title: 'Components/Molecules/Form',
  component: Form,
  parameters: FormStoryParams
}

/**
 * Default @link Form story.
 *
 * @returns {Form}
 */
export const Default = () => <Form />
