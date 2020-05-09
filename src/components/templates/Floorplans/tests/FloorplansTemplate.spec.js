// Packages
import React from 'react'
import { shallow } from 'enzyme'

// Test component
import FloorplansTemplate from '..'

/**
 * @file Component Tests
 * @see {@link https://github.com/testing-library/jest-dom}
 *
 * @todo Test render when props.auth is invalid
 */

describe('<FloorplansTemplate />', () => {
  it('Renders without crashing', () => {
    shallow(<FloorplansTemplate />)
  })
})
