// API
import WoodmontAPI from './api'

// Config
import FeathersAppConfiguration from './config/FeathersAppConfiguration'

/**
 * @file Tests - WoodmontAPI
 * @module tests/api
 */

describe('WoodmontAPI', () => {
  it('Is defined.', () => {
    expect(WoodmontAPI).toBeDefined()
  })

  it('Is intialized.', () => {
    expect(Object.keys(WoodmontAPI.services)).toEqual(
      expect.arrayContaining(Object.values(FeathersAppConfiguration.services))
    )
  })
})
