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
 */

/**
 * Pulls Floor Plan data from the RENTCafé Web API.
 *
 * @param {Object} search - Search parameters
 * @param {string} search.id - Floorplan ID, "1131409"
 * @param {string} search.name - Floorplan name, "A01"
 * @returns {Floorplan[]}
 */
export const useFloorplans = search => {
  const { array: floorplans, setArray: setFloorplans } = useArray()
  const { object: query, setObject: setQuery } = useObject(search)
  const { object: error, setObject: setError, empty } = useObject()

  const Floorplans = WoodmontAPI.service('floorplans')

  useEffect(() => {
    (async () => {
      let plans = null

      try {
        plans = await Floorplans.find({ query })
      } catch (err) {
        setError(err)
        setFloorplans([])

        throw err
      }

      setFloorplans(plans)
    })()
  }, [query])

  return {
    floorplans,
    floorplansError: empty ? null : error,
    floorplansQuery: query,
    setFloorplansError: setError,
    setFloorplans,
    setFloorplansQuery: setQuery
  }
}
