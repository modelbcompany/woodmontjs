// Packages
import { useEffect } from 'react'

// Hooks
import useArray from './useArray'
import useObject from './useObject'

// API
import WoodmontAPI from '../api'

/**
 * @file Search floor plan data
 * @module hooks/useFloorplans
 *
 * @todo Review documentation
 * @todo DRY Refactor - This logic is duplicated in useApartments
 */

/**
 * Pulls Floorplan data from the RENTCafé Web API.
 *
 * @param {Object} search - Search parameters
 * @param {string} search.id - Floorplan ID, "1131409"
 * @param {string} search.name - Floorplan name, "A01"
 * @param {Object} authentication - RENTCafé API credentials
 * @returns {Floorplan[]}
 */
export const useFloorplans = (search, authentication = {}) => {
  const { array: floorplans, setArray: setFloorplans } = useArray()
  const { object: query, setObject: setQuery } = useObject(search)
  const { object: error, setObject: setError, empty } = useObject()

  const Floorplans = WoodmontAPI.service('floorplans')

  useEffect(() => {
    (async () => {
      let plans = null

      try {
        plans = await Floorplans.find({ authentication, query })
      } catch (err) {
        setFloorplans([])
        setError(err)
      }

      setFloorplans(plans)
    })()
  }, [
    query.id,
    query.name
  ])

  return {
    floorplans,
    floorplansError: empty ? null : error,
    floorplansQuery: query,
    setFloorplansError: setError,
    setFloorplans,
    setFloorplansQuery: setQuery
  }
}

export default useFloorplans
