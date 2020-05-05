// Service
import Floorplans from './Floorplans'

// Mock Data
import FindFloorplansMock from './__mocks__/FindFloorplans.mock'

/**
 * @file Tests - Service - Floorplans
 * @module services/Floorplans/spec
 */

describe('Service: Floorplans', () => {
  it('Is defined', () => {
    expect(Floorplans).toBeDefined()
  })

  it('[find] Returns floor plan data', async () => {
    expect(await Floorplans.find({ query: {} })).toEqual(
      expect.arrayContaining(FindFloorplansMock)
    )
  })

  it('[find] Queries floor plans by id', async () => {
    expect(await Floorplans.find({ query: { id: '3215320' } })).toEqual(
      expect.objectContaining(FindFloorplansMock[0])
    )
  })

  it('[find] Queries floor plans by name', async () => {
    expect(await Floorplans.find({ query: { name: 'A01' } })).toEqual(
      expect.objectContaining(FindFloorplansMock[0])
    )
  })

  it('[find] Returns null for bad queries', async () => {
    expect(await Floorplans.find({ query: { id: '-1' } })).toBe(null)
    expect(await Floorplans.find({ query: { name: 'floorplan' } })).toBe(null)
  })
})
