// Packages
import React from 'react'
import { shallow } from 'enzyme'

// Test component
import Button from '..'

/**
 * @file App component tests
 * @see {@link https://github.com/testing-library/jest-dom}
 */

describe('<Button />', () => {
  it('Renders without crashing', () => {
    shallow(<Button />)
  })
})
