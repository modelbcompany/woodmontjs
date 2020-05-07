/**
 * @file @link FloorplansSearchForm @link Dropdown properties
 * @module config/FloorplansSearchFormDropdownProps
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
 * @link Item properties for the @link FloorplansSearchForm @link Dropdown
 * @link List.
 *
 * @readonly
 * @namespace FloorplansSearchFormDropdownItems
 */
export const FloorplansSearchFormDropdownItems = Object.freeze({
  Bathrooms: [
    {
      children: '1'
    },
    {
      children: '1.5'
    },
    {
      children: '2'
    },
    {
      children: '2.5'
    },
    {
      children: '3'
    }
  ].map(item => ({
    ...mergeDropdownItemStyles(item),
    'data-name': 'numberOfBaths',
    'data-value': item['data-value'] || item.children
  })),

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
  ].map(item => ({
    ...mergeDropdownItemStyles(item),
    'data-name': 'numberOfBeds'
  })),

  MaxPrice: [
    {
      children: 'Clear',
      'data-value': ''
    },
    {
      children: '<$2k',
      'data-value': '0-2000'
    },
    {
      children: '$2k - $2.5k',
      'data-value': '2001-2500'
    },
    {
      children: '$2.5k - $3k',
      'data-value': '2501-3000'
    },
    {
      children: '$3k - $3.5k',
      'data-value': '3001-3500'
    },
    {
      children: '>$3.5k',
      'data-value': '3501'
    }
  ].map(item => ({
    ...mergeDropdownItemStyles(item),
    'data-name': 'rentRange'
  })),

  MoveInDate: [
    {
      children: 'Clear',
      'data-value': ''
    },
    {
      children: 'Janaury',
      'data-value': '01'
    },
    {
      children: 'February',
      'data-value': '02'
    },
    {
      children: 'March',
      'data-value': '03'
    },
    {
      children: 'April',
      'data-value': '04'
    },
    {
      children: 'May',
      'data-value': '05'
    },
    {
      children: 'June',
      'data-value': '06'
    },
    {
      children: 'July',
      'data-value': '07'
    },
    {
      children: 'August',
      'data-value': '08'
    },
    {
      children: 'September',
      'data-value': '09'
    },
    {
      children: 'October',
      'data-value': '10'
    },
    {
      children: 'November',
      'data-value': '11'
    },
    {
      children: 'December',
      'data-value': '12'
    }
  ].map(item => ({
    ...mergeDropdownItemStyles(item),
    'data-name': 'availableDate',
    'data-value': `${item['data-value']}/${new Date().getFullYear()}`
  }))
})

/**
 * @link Dropdown properties for the @link FloorplansSearchForm component,
 * representing search filters.
 *
 * @readonly
 * @enum {DropdownProps}
 */
export const FloorplansSearchFormDropdownProps = Object.freeze({
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
        id: 'filters-bathrooms-list',
        items: FloorplansSearchFormDropdownItems.Bathrooms
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
        id: 'filters-bedrooms-list',
        items: FloorplansSearchFormDropdownItems.Bedrooms
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
        id: 'filter-max-price-list',
        items: FloorplansSearchFormDropdownItems.MaxPrice
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
        id: 'filter-move-in-date-list',
        items: FloorplansSearchFormDropdownItems.MoveInDate
      }
    },
    container: {
      id: 'filter-move-in-date'
    }
  })
})

export default FloorplansSearchFormDropdownProps
