/**
 * @file @link FloorPlanSearchForm @link Dropdown properties
 * @module config/constants/FloorPlanSearchFormDropdownItemProps
 * @todo Update documentation
 */

const COMMON_PROPS = {
  dropdown: {
    className: 'floor-plan-search-form-dropdown'
  },
  button: {
    className: 'floor-plan-search-form-btn',
    name: 'dropdown'
  },
  item: {
    className: 'dropdown-item floor-plan-search-form-dropdown-item',
    role: 'button'
  },
  list: {
    className: 'dropdown-list floor-plan-search-form-dropdown-list'
  }
}

const mergeDropdownStyles = ({ 'data-button': button = {}, ...dropdown }) => ({
  ...dropdown,
  ...COMMON_PROPS.dropdown,
  'data-button': {
    ...button,
    ...COMMON_PROPS.button
  }
})

const mergeDropdownItemStyles = item => ({ ...item, ...COMMON_PROPS.item })

/**
 * @link Item properties for the @link FloorPlanSearchForm @link Dropdown
 * @link List.
 *
 * @readonly
 * @namespace FloorPlanSearchFormDropdownItems
 */
export const FloorPlanSearchFormDropdownItems = Object.freeze({
  Bathrooms: [
    {
      children: '1',
      'data-value': 1
    },
    {
      children: '1.5',
      'data-value': 1.5
    },
    {
      children: '2',
      'data-value': 2
    },
    {
      children: '2.5',
      'data-value': 2.5
    },
    {
      children: '3',
      'data-value': 3
    }
  ].map(item => mergeDropdownItemStyles(item)),

  Bedrooms: [
    {
      children: 'Studio',
      'data-value': 0
    },
    {
      children: '1 BR',
      'data-value': 1
    },
    {
      children: '2 BR',
      'data-value': 2
    },
    {
      children: '3 BR',
      'data-value': 3
    }
  ].map(item => mergeDropdownItemStyles(item)),

  MaxPrice: [
    {
      children: '<$2k',
      'data-value': {
        min: 0,
        max: 2000
      }
    },
    {
      children: '$2k - $2.5k',
      'data-value': {
        min: 2001,
        max: 2500
      }
    },
    {
      children: '$2.5k - $3k',
      'data-value': {
        min: 2501,
        max: 3000
      }
    },
    {
      children: '$3k - $3.5k',
      'data-value': {
        min: 3001,
        max: 3500
      }
    },
    {
      children: '>$3.5k',
      'data-value': {
        min: 3501,
        max: Number.MAX_SAFE_INTEGER
      }
    }
  ].map(item => mergeDropdownItemStyles(item)),

  MoveInDate: [
    {
      children: 'Janaury',
      'data-value': 'january'
    },
    {
      children: 'February',
      'data-value': 'february'
    },
    {
      children: 'March',
      'data-value': 'march'
    },
    {
      children: 'April',
      'data-value': 'april'
    },
    {
      children: 'May',
      'data-value': 'may'
    },
    {
      children: 'June',
      'data-value': 'june'
    },
    {
      children: 'July',
      'data-value': 'july'
    },
    {
      children: 'August',
      'data-value': 'august'
    },
    {
      children: 'September',
      'data-value': 'september'
    },
    {
      children: 'October',
      'data-value': 'october'
    },
    {
      children: 'November',
      'data-value': 'november'
    },
    {
      children: 'December',
      'data-value': 'december'
    }
  ].map(item => mergeDropdownItemStyles(item))
})

/**
 * @link Dropdown properties for the @link FloorPlanSearchForm component,
 * representing search filters.
 *
 * @readonly
 * @enum {DropdownProps}
 */
export const FloorPlanSearchFormDropdownProps = Object.freeze({
  Bathrooms: mergeDropdownStyles({
    'aria-label': 'Filter floor plans by number of bathrooms',
    children: {
      type: 'List',
      props: {
        ...COMMON_PROPS.list,
        'data-items': FloorPlanSearchFormDropdownItems.Bathrooms
      }
    },
    'data-button': {
      children: 'Bathrooms',
      name: 'filter/bathrooms',
      'data-value': -1
    }
  }),

  Bedrooms: mergeDropdownStyles({
    'aria-label': 'Filter floor plans by number of bathrooms',
    children: {
      type: 'List',
      props: {
        ...COMMON_PROPS.list,
        'data-items': FloorPlanSearchFormDropdownItems.Bedrooms
      }
    },
    'data-button': {
      children: 'Bedrooms',
      name: 'filter/bedrooms',
      'data-value': -1
    }
  }),

  MaxPrice: mergeDropdownStyles({
    'aria-label': 'Filter floor plans by max price',
    children: {
      type: 'List',
      props: {
        ...COMMON_PROPS.list,
        'data-items': FloorPlanSearchFormDropdownItems.MaxPrice
      }
    },
    'data-button': {
      children: 'Max Price',
      name: 'filter/max-price',
      'data-value': null
    }
  }),

  MoveInDate: mergeDropdownStyles({
    'aria-label': 'Filter floor plans by move-in date',
    children: {
      type: 'List',
      props: {
        ...COMMON_PROPS.list,
        'data-items': FloorPlanSearchFormDropdownItems.MoveInDate
      }
    },
    'data-button': {
      children: 'Move In Date',
      name: 'filter/move-in-date',
      'data-value': null
    }
  })
})

export default FloorPlanSearchFormDropdownProps
