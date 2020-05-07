// Packages
import dotenv from 'dotenv'

// API
import WoodmontAPI from './api'

// Config
import FeathersAppConfiguration from './config/FeathersAppConfiguration'

// Mock Data
import FindApartmentsMock from
  './services/Apartments/__mocks__/FindApartments.mock'
import FindFloorplansMock from
  './services/Floorplans/__mocks__/FindFloorplans.mock'

/**
 * @file Tests - WoodmontAPI
 * @module tests/api
 */

// Configure environment variables
dotenv.config()

const compareArrayProperties = (array, key, value) => {
  array.forEach(item => expect(item[key]).toBe(value))
}

describe('API', () => {
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

  it('Is defined', async () => {
    expect(Floorplans).toBeDefined()
  })

  it('[find] Returns floor plan data', async () => {
    const floorplans = await Floorplans.find()

    expect(floorplans).toBeInstanceOf(Array)
    floorplans.map(floorplan => expect(floorplan.FloorplanId).toBeDefined())
  })

  it('[find] params.query.id', async () => {
    const floorplan = FindFloorplansMock[3]

    expect((await Floorplans.find({
      query: { id: floorplan.FloorplanId }
    })).length >= 1).toBeTruthy()
  })

  it('[find] params.query.name', async () => {
    const floorplan = FindFloorplansMock[3]

    expect((await Floorplans.find({
      query: { name: floorplan.FloorplanName }
    })).length >= 1).toBeTruthy()
  })

  it('[find] Returns an empty array for bad queries', async () => {
    const floorplan = await Floorplans.find({ query: { id: '-1' } })
    const floorplan2 = await Floorplans.find({ query: { name: 'floorplan' } })

    expect(floorplan).toEqual([])
    expect(floorplan2).toEqual(floorplan)
  })
})

describe('Service: Apartments', () => {
  const Apartments = WoodmontAPI.service('apartments')

  it('Is defined', async () => {
    expect(Apartments).toBeDefined()
  })

  it('[find] Returns apartment data', async () => {
    const apartments = await Apartments.find()

    expect(apartments).toBeInstanceOf(Array)
    compareArrayProperties(apartments, 'PropertyId', process.env.propertyId)
  })

  it('[find] params.query.floorPlanId', async () => {
    const floorplan = FindFloorplansMock[FindFloorplansMock.length - 13]

    compareArrayProperties(await Apartments.find({
      query: { floorPlanId: floorplan.FloorplanId }
    }), 'FloorplanId', floorplan.FloorplanId)
  })

  it('[find] params.query.numberOfBeds', async () => {
    const apt = FindApartmentsMock[Math.ceil(FindApartmentsMock.length / 2)]

    compareArrayProperties(await Apartments.find({
      query: { numberOfBeds: apt.Beds }
    }), 'Beds', apt.Beds)
  })

  it('[find] params.query.numberOfBaths', async () => {
    const apt = FindApartmentsMock[FindApartmentsMock.length - 3]

    compareArrayProperties(await Apartments.find({
      query: { numberOfBaths: apt.Baths }
    }), 'Baths', apt.Baths)
  })

  it('[find] params.query.availableDate', async () => {
    const apartments = await Apartments.find({
      query: { availableDate: FindApartmentsMock[13].AvailableDate }
    })

    expect(apartments.length >= 1).toBeTruthy()
  })
})
