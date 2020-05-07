// Packages
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect'

/**
 * @file Jest Global Setup Configuration
 * @see {@link https://github.com/testing-library/jest-dom}
 */

// Set timeout
jest.setTimeout(10000)

// Configure Enzyme
configure({ adapter: new Adapter() })
