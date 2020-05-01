/**
 * @file @link FloorPlanSearchForm @link Select properties
 * @module config/constants/FloorPlanSearchFormSelectProps
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/select}
 */

/**
 * @link Select properties for the @link FloorPlanSearchForm component,
 * representing search filters.
 *
 * @readonly
 * @enum {SelectProps}
 */
export const FloorPlanSearchFormSelectProps = Object.freeze({
  Bathrooms: {
    'aria-label': 'Filter floor plans by number of bathrooms',
    'data-options': [
      {
        children: 'Bathrooms',
        value: -1
      },
      {
        children: '1',
        value: 1
      },
      {
        children: '1.5',
        value: 1.5
      },
      {
        children: '2',
        value: 2
      },
      {
        children: '2.5',
        value: 2.5
      },
      {
        children: '3',
        value: 3
      }
    ],
    name: 'filter/bathrooms'
  },

  Bedrooms: {
    'aria-label': 'Filter floor plans by number of bathrooms',
    'data-options': [
      {
        children: 'Bedrooms',
        value: -1
      },
      {
        children: 'Studio',
        value: 0
      },
      {
        children: '1 BR',
        value: 1
      },
      {
        children: '2 BR',
        value: 2
      },
      {
        children: '3 BR',
        value: 3
      }
    ],
    name: 'filter/bedrooms'
  },

  MaxPrice: {
    'aria-label': 'Filter floor plans by max price',
    'data-options': [
      {
        children: 'Max Price',
        value: null
      },
      {
        children: '<$2k',
        value: {
          min: 0,
          max: 2000
        }
      },
      {
        children: '$2k - $2.5k',
        value: {
          min: 2001,
          max: 2500
        }
      },
      {
        children: '$2.5k - $3k',
        value: {
          min: 2501,
          max: 3000
        }
      },
      {
        children: '$3k - $3.5k',
        value: {
          min: 3001,
          max: 3500
        }
      },
      {
        children: '>$3.5k',
        value: {
          min: 3501,
          max: Number.MAX_SAFE_INTEGER
        }
      }
    ],
    name: 'filter/max-price'
  },

  MoveInDate: {
    'aria-label': 'Filter floor plans by move-in date',
    'data-options': [
      {
        children: 'Move In Date',
        value: null
      },
      {
        children: 'Janaury',
        value: 'january'
      },
      {
        children: 'February',
        value: 'february'
      },
      {
        children: 'March',
        value: 'march'
      },
      {
        children: 'April',
        value: 'april'
      },
      {
        children: 'May',
        value: 'may'
      },
      {
        children: 'June',
        value: 'june'
      },
      {
        children: 'July',
        value: 'july'
      },
      {
        children: 'August',
        value: 'august'
      },
      {
        children: 'September',
        value: 'september'
      },
      {
        children: 'October',
        value: 'october'
      },
      {
        children: 'November',
        value: 'november'
      },
      {
        children: 'December',
        value: 'december'
      }
    ],
    name: 'filter/move-in-date'
  }
})

export default FloorPlanSearchFormSelectProps
