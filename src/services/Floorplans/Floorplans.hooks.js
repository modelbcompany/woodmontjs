/**
 * @file Hooks - Floorplans
 * @module services/Floorplans/hooks
 *
 * @todo Update documentation
 */

export default {
  after: {
    find: [

      /**
       * Checks if @param result is a RENTCafé error.
       *
       * The RentCafé APIs only returns 200 responses.
       * An error from the Web Service API will define the property `Error`.
       *
       * If @param context.result.Error is defined and a valid RENTCafé error
       * code, the value of @param context.error will be updated.
       *
       * @todo Handle Marketing API response format
       *
       * @param {object} param0 - Service call information
       * @param {object} param0.result - Data from successful method call
       * @returns {object} @param param0
       */
      ({ result, ...rest }) => {
        if (result?.[0]?.Error) {
          throw rest.app.service('floorplans').handleRentCafeError(result[0])
        }

        return { result, ...rest }
      },

      ({ result, ...rest }) => ({
        ...rest,
        result: result.map(floorplan => {
          return rest.app.service('floorplans').parseFloorplanData(floorplan)
        })
      }),

      ({ params: { query, ...params }, result, ...rest }) => ({
        ...rest,
        params: { ...params, query },
        result: query?.id || query?.name ? (result[0] || null) : result
      })
    ]
  }
}
