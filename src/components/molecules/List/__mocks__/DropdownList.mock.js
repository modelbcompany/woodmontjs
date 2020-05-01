/**
 * @file Mock Dropdown List Data
 * @module components/molecules/List/mocks/DropdownList
 */

const DropdownListMock = [
  {
    children: 'Dropdown list item 1'
  },
  {
    children: 'Dropdown list item 2'
  },
  {
    children: 'Dropdown list item 3'
  },
  {
    children: 'Dropdown list item 4'
  },
  {
    children: 'Dropdown list item 5'
  }
].map(item => ({
  ...item,
  className: 'dropdown-item'
}))

export default DropdownListMock
