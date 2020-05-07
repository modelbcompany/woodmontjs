// Packages
import { useEffect } from 'react'

// Hooks
import useArray from './useArray'
import useObject from './useObject'

// API
import WoodmontAPI from '../api'

/**
 * @file Search floor plan data
 * @module hooks/useApartments
 *
 * @todo Update documentation
 * @todo DRY Refactor - This logic is duplicated in useFloorplans
 */

/**
 * Pulls Apartment data from the RENTCafé Web API.
 *
 * @param {Object} search - Search parameters
 * @returns {Apartment[]}
 */
export const useApartments = search => {
  const { array: apartments, setArray: setApartments } = useArray()
  const { object: query, setObject: setQuery } = useObject(search)
  const { object: error, setObject: setError, empty } = useObject()

  const Apartments = WoodmontAPI.service('apartments')

  useEffect(() => {
    (async () => {
      let apartments = null

      try {
        apartments = await Apartments.find({ query })
      } catch (err) {
        setError(err)
        setApartments([])

        throw err
      }

      setApartments(apartments)
    })()
  }, [query])

  return {
    apartments,
    apartmetntsError: empty ? null : error,
    apartmetntsQuery: query,
    setApartmentsError: setError,
    setApartments,
    setApartmentsQuery: setQuery
  }
}

export default useApartments
