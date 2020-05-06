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
})

describe('Service: Floorplans', () => {
  const Floorplans = WoodmontAPI.service('floorplans')
  const FloorplanMock = {
    id: '3215320',
    image: {
      alt: 'Floorplan A01',
      src: 'https://cdn.rentcafe.com/dmslivecafe/3/1131409/901W_Floorplan_PNG_800x800_A01[1].png',
      title: '901W_Floorplan_PNG_800x800_A01[1].png'
    },
    name: 'A01'
  }

  it('Is defined', async () => {
    expect(Floorplans).toBeDefined()
  })

  it('[find] Returns floor plan data', async () => {
    expect(await Floorplans.find()).toEqual(
      expect.arrayContaining(FindFloorplansMock.map(floorplan => {
        return Floorplans.parseFloorplanData(floorplan)
      }))
    )
  })

  it('[find] Queries floor plans by id', async () => {
    expect(await Floorplans.find({ query: { id: '3215320' } })).toEqual(
      FloorplanMock
    )
  })

  it('[find] Queries floor plans by name', async () => {
    expect(await Floorplans.find({ query: { name: 'A01' } })).toEqual(
      FloorplanMock
    )
  })

  it('[find] Returns null for bad queries', async () => {
    const empty = {}

    expect(await Floorplans.find({ query: { id: '-1' } })).toEqual(empty)

    expect(await Floorplans.find({ query: { name: 'floorplan' } })).toEqual(
      empty
    )
  })
})
