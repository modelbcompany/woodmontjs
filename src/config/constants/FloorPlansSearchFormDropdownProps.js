/**
 * @file @link FloorPlansSearchForm @link Dropdown properties
 * @module config/constants/FloorPlansSearchFormDropdownProps
 * @todo Update documentation
 */

const COMMON_PROPS = {
  dropdown: {
    className: 'floorplan-search-form-dropdown'
  },
  button: {
    className: 'floorplan-search-form-btn',
    name: 'dropdown'
  },
  item: {
    className: 'dropdown-item floorplan-search-form-dropdown-item',
    role: 'button'
  },
  list: {
    className: 'dropdown-list floorplan-search-form-dropdown-list'
  }
}

const mergeDropdownStyles = ({ button = {}, ...dropdown }) => ({
  ...dropdown,
  ...COMMON_PROPS.dropdown,
  button: {
    ...button,
    ...COMMON_PROPS.button
  }
})

const mergeDropdownItemStyles = item => ({ ...item, ...COMMON_PROPS.item })

/**
 * @link Item properties for the @link FloorPlansSearchForm @link Dropdown
 * @link List.
 *
 * @readonly
 * @namespace FloorPlansSearchFormDropdownItems
 */
export const FloorPlansSearchFormDropdownItems = Object.freeze({
  Bathrooms: [
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
  ].map(item => ({ ...mergeDropdownItemStyles(item), name: 'bathrooms' })),

  Bedrooms: [
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
  ].map(item => ({ ...mergeDropdownItemStyles(item), name: 'bedrooms' })),

  MaxPrice: [
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
  ].map(item => ({ ...mergeDropdownItemStyles(item), name: 'max-price' })),

  MoveInDate: [
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
  ].map(item => ({ ...mergeDropdownItemStyles(item), name: 'move-in-date' }))
})

/**
 * @link Dropdown properties for the @link FloorPlansSearchForm component,
 * representing search filters.
 *
 * @readonly
 * @enum {DropdownProps}
 */
export const FloorPlansSearchFormDropdownProps = Object.freeze({
  Bathrooms: mergeDropdownStyles({
    'aria-label': 'Filter floor plans by number of bathrooms',
    button: {
      children: 'Bathrooms',
      name: 'filter/bathrooms'
    },
    children: {
      type: 'List',
      props: {
        ...COMMON_PROPS.list,
        'data-items': FloorPlansSearchFormDropdownItems.Bathrooms,
        id: 'filters-bathrooms-list'
      }
    },
    container: {
      id: 'filters-bathrooms'
    }
  }),

  Bedrooms: mergeDropdownStyles({
    'aria-label': 'Filter floor plans by number of bathrooms',
    button: {
      children: 'Bedrooms',
      name: 'filter/bedrooms'
    },
    children: {
      type: 'List',
      props: {
        ...COMMON_PROPS.list,
        'data-items': FloorPlansSearchFormDropdownItems.Bedrooms,
        id: 'filters-bedrooms-list'
      }
    },
    container: {
      id: 'filters-bedrooms'
    }
  }),

  MaxPrice: mergeDropdownStyles({
    'aria-label': 'Filter floor plans by max price',
    button: {
      children: 'Max Price',
      name: 'filter/max-price'
    },
    children: {
      type: 'List',
      props: {
        ...COMMON_PROPS.list,
        'data-items': FloorPlansSearchFormDropdownItems.MaxPrice,
        id: 'filter-max-price-list'
      }
    },
    container: {
      id: 'filter-max-price'
    }
  }),

  MoveInDate: mergeDropdownStyles({
    'aria-label': 'Filter floor plans by move-in date',
    button: {
      children: 'Move In Date',
      name: 'filter/move-in-date'
    },
    children: {
      type: 'List',
      props: {
        ...COMMON_PROPS.list,
        'data-items': FloorPlansSearchFormDropdownItems.MoveInDate,
        id: 'filter-move-in-date-list'
      }
    },
    container: {
      id: 'filter-move-in-date'
    }
  })
})

export default FloorPlansSearchFormDropdownProps
