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
 * @param {object} param0
 * @param {object} param0.fpQuery - Floorplans service query
 * @param {object} param0.aptQuery - Apartments service query
 * @returns {object}
 */
export const useApartmentsWithFloorplans = ({ fpQuery, aptQuery }) => {
  const { floorplans } = useFloorplans(fpQuery)
  const { apartments } = useApartments(aptQuery)

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
  }, [apartments, floorplans])

  return { floorplans, apartments, aptsWithPlans }
}

export default useApartmentsWithFloorplans
