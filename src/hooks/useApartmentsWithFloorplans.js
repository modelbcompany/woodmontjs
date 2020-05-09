// Packages
import { useEffect } from 'react'

// Config
import Logger from '../logger'

// Hooks
import useApartments from './useApartments'
import useArray from './useArray'
import useFloorplans from './useFloorplans'

/**
 * @file Use Apartment and Floorplan data
 * @module hooks/useApartmentsWithFloorplans
 *
 * @todo Update documentation
 */

/**
 * Merges Apartment and Floorplan data.
 *
 * @param {object} search
 * @returns {object}
 */
export const useApartmentsWithFloorplans = (search, auth) => {
  const {
    apartments,
    apartmentsError,
    setApartmentsQuery: setAptQuery
  } = useApartments(search, auth)

  const { floorplans } = useFloorplans({}, auth)

  const { array: aptsWithPlans, setArray: setAptsWithPlans } = useArray()

  useEffect(() => {
    const aptsWithPlans = []

    apartments.forEach(apt => aptsWithPlans.push({
      ...(floorplans.find(floorplan => (
        floorplan.FloorplanId === apt.FloorplanId
      )) || {}),
      ...apt
    }))

    Logger.debug({ useApartmentsWithFloorplans: aptsWithPlans })
    setAptsWithPlans(aptsWithPlans)
  }, [apartments])

  return {
    apartments,
    aptsWithPlans,
    aptsWithPlansError: apartmentsError,
    floorplans,
    setAptQuery
  }
}

export default useApartmentsWithFloorplans
