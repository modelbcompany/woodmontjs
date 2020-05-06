/**
 * @file Hooks - Floorplans
 * @module services/Floorplans/hooks
 *
 * @todo Update documentation
 */

export default {
  after: {
    find: [
      ({ result, ...rest }) => ({
        ...rest,
        result: result.map(floorplan => {
          return rest.app.service('floorplans').parseFloorplanData(floorplan)
        })
      }),

      ({ params, result, ...rest }) => ({
        ...rest,
        params,
        result: params?.query?.id || params?.query?.name ? result[0] : result
      })
    ]
  }
}
