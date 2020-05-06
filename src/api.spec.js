// API
import WoodmontAPI from './api'

// Config
import FeathersAppConfiguration from './config/FeathersAppConfiguration'

// Mocks
import FindFloorplansMock from
  './services/Floorplans/__mocks__/FindFloorplans.mock'

/**
 * @file Tests - WoodmontAPI
 * @module tests/api
 */

describe('WoodmontAPI', () => {
  it('Is defined', () => {
    expect(WoodmontAPI).toBeDefined()
  })

  it('Is initialized', () => {
    expect(Object.keys(WoodmontAPI.services)).toEqual(
      expect.arrayContaining(Object.values(FeathersAppConfiguration.services))
    )
  })

  it('[service(\'floorplans\').find] Returns floor plan data', async () => {
    expect(await WoodmontAPI.service('floorplans').find()).toEqual(
      expect.arrayContaining(FindFloorplansMock)
    )
  })
})
