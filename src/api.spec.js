// API
import WoodmontAPI from './api'

// Config
import FeathersAppConfiguration from './config/FeathersAppConfiguration'

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
    const floorplans = await Floorplans.find()

    expect(floorplans).toBeInstanceOf(Array)
    floorplans.map(floorplan => expect(floorplan.id).toBeDefined())
  })

  it('[find] Queries floor plans by id', async () => {
    const floorplan = await Floorplans.find({ query: { id: '3215320' } })
    expect(floorplan).toEqual(FloorplanMock)
  })

  it('[find] Queries floor plans by name', async () => {
    const floorplan = await Floorplans.find({ query: { name: 'A01' } })
    expect(floorplan).toEqual(FloorplanMock)
  })

  it('[find] Returns null for bad queries', async () => {
    const floorplan = await Floorplans.find({ query: { id: '-1' } })
    const floorplan2 = await Floorplans.find({ query: { name: 'floorplan' } })

    expect(floorplan).toBe(null)
    expect(floorplan2).toEqual(floorplan)
  })
})
