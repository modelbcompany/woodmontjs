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
export const useApartmentsWithFloorplans = search => {
  const { apartments, setApartmentsQuery: setAptQuery } = useApartments(search)
  const { floorplans } = useFloorplans({})

  const { array: aptsWithPlans, setArray: setAptsWithPlans } = useArray()

  useEffect(() => {
    (() => {
      const aptsWithPlans = []

      apartments.forEach(apt => aptsWithPlans.push({
        ...(floorplans.find(floorplan => (
          floorplan.FloorplanId === apt.FloorplanId
        )) || {}),
        ...apt
      }))

      Logger.debug({ hook: true, useApartmentsWithFloorplans: aptsWithPlans })
      setAptsWithPlans(aptsWithPlans)
    })()
  }, [apartments])

  return { floorplans, apartments, aptsWithPlans, setAptQuery }
}

export default useApartmentsWithFloorplans
