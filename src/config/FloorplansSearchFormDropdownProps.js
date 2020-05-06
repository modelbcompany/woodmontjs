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
  ].map(item => ({ ...mergeDropdownItemStyles(item), name: 'numberOfBeds' })),

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
  ].map(item => ({ ...mergeDropdownItemStyles(item), name: 'numberOfBaths' })),

  MaxPrice: [
    {
      children: '<$2k',
      value: '0-2000'
    },
    {
      children: '$2k - $2.5k',
      value: '2001-2500'
    },
    {
      children: '$2.5k - $3k',
      value: '2501-3000'
    },
    {
      children: '$3k - $3.5k',
      value: '3001-3500'
    },
    {
      children: '>$3.5k',
      value: '3501'
    }
  ].map(item => ({ ...mergeDropdownItemStyles(item), name: 'rentRange' })),

  MoveInDate: [
    {
      children: 'Janaury',
      value: '01'
    },
    {
      children: 'February',
      value: '02'
    },
    {
      children: 'March',
      value: '03'
    },
    {
      children: 'April',
      value: '04'
    },
    {
      children: 'May',
      value: '05'
    },
    {
      children: 'June',
      value: '06'
    },
    {
      children: 'July',
      value: '07'
    },
    {
      children: 'August',
      value: '08'
    },
    {
      children: 'September',
      value: '09'
    },
    {
      children: 'October',
      value: '10'
    },
    {
      children: 'November',
      value: '11'
    },
    {
      children: 'December',
      value: '12'
    }
  ].map(item => ({
    ...mergeDropdownItemStyles(item),
    name: 'availableDate',
    value: `${item.value}/${new Date().getFullYear()}`
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
