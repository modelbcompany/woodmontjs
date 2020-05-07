// Packages
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

// Components
import { Heading, Image, Link, Paragraph, Span } from '../../atoms'
import Column from '../Column'
import Container from '../Container'

// Hooks
import { useAttributes, useObject } from '../../../hooks'

// Utility Functions
import { isObject } from '../../../utils'

// Stylesheets
import './article.sass'

/**
 * @file Component representing <article> elements
 * @module components/molecules/Article
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/article}
 */

/**
 * Renders an `<article>` element with the class `adm-article`.
 *
 * @class Article
 * @param {ArticleProps} props - Component data
 * @returns {HTMLElement}
 */
export const Article = ({
  children,
  'data-container': container,
  ...props
}) => {
  const attributes = useAttributes(props, 'adm-article')

  if (!container) return <article {...attributes}>{children}</article>

  return (
    <article {...attributes}>
      <Container className='article-container'>{children}</Container>
    </article>
  )
}

/**
 * Renders an @link Article component with the class `floorplan`.
 *
 * @class Floorplan
 * @param {FloorplanProps} props - Component data
 * @returns {Article}
 */
export const Floorplan = ({ aptWithPlan, ...rest }) => {
  const attributes = useAttributes(rest, 'floorplan')
  const { empty, object: floorplan, setObject: setFloorplan } = useObject({
    ...(isObject(aptWithPlan) || {}),
    Baths: JSON.parse(aptWithPlan?.Baths || ''),
    Beds: JSON.parse(aptWithPlan?.Beds || '')
  })

  useEffect(() => {
    const getMoneyString = value => {
      if (value.length < 4) return `$${value}`

      return `$${value.slice(0, 1)},${value.slice(1, value.length)}`
    }

    setFloorplan(state => ({
      ...state,
      ApartmentName: ApartmentName.substring(2, ApartmentName.length),
      MinimumRent: getMoneyString(aptWithPlan.MinimumRent)
    }))
  }, [aptWithPlan.MinimumRent, setFloorplan])

  if (empty) return <Article {...attributes} />

  const {
    ApartmentName,
    ApplyOnlineURL,
    AvailabilityURL,
    Baths,
    Beds,
    FloorplanId,
    FloorplanImageAltText,
    FloorplanImageName,
    FloorplanImageURL,
    FloorplanName,
    MinimumRent,
    SQFT
  } = floorplan

  return (
    <Article {...attributes} title={`Floorplan ${FloorplanId}`}>
      <Column className='floorplan-column'>
        <Column className='image-column'>
          <Image
            alt={FloorplanImageAltText}
            className='floorplan-img'
            src={FloorplanImageURL}
            title={FloorplanImageName}
          />
        </Column>

        <Column className='text-column'>
          <Heading className='floorplan-heading' data-size={3}>
            {`#${ApartmentName || FloorplanId}`}
          </Heading>
          <Paragraph className='floorplan-details'>
            <Span className='floorplan-name'>
              {FloorplanName}&nbsp;
            </Span>
            <Span className='floorplan-beds'>
              {`| ${Beds} Bedroom${Beds === 1 ? '' : 's'}`}&nbsp;
            </Span>
            <Span className='floorplan-baths'>
              {`| ${Baths} Bathroom${Baths === 1 ? '' : 's'}`}
            </Span>
          </Paragraph>
          <Paragraph className='floorplan-sqft'>
            {`${SQFT} SQ. FT.`}
          </Paragraph>
          <Paragraph className='floorplan-rent'>
            {MinimumRent}
          </Paragraph>
        </Column>

        <Column className='link-column'>
          <Link
            className='floorplan-link'
            href={ApplyOnlineURL || AvailabilityURL}
            target='_blank'
            title={ApplyOnlineURL ? `Apply for ${ApartmentName}` : `Check floorplan availability for ${FloorplanId}`}
          >
            Apply Now
          </Link>

          <Link
            className='floorplan-link'
            href={FloorplanImageURL}
            download
            target='_blank'
            title={FloorplanImageName}
          >
            Download Floorplan
          </Link>
        </Column>
      </Column>
    </Article>
  )
}

/**
 * @link Article component properties.
 *
 * @typedef {ArticleProps}
 */
Article.propTypes = {
  /**
   * `Article` content.
   */
  children: PropTypes.node,

  /**
   * A space-separated list of the classes of the element.
   *
   * Classes allows CSS and JavaScript to select and access specific elements
   * via the class selectors or functions like the method
   * `Document.getElementsByClassName()`.
   */
  className: PropTypes.string,

  /**
   * Custom data attribute.
   *
   * https://developer.mozilla.org/docs/Web/HTML/Global_attributes/data-*
   */
  'data-*': PropTypes.any,

  /**
   * If true, render `children` inside of a `Container` component.
   *
   * The container will have the base class `article-container`.
   */
  'data-container': PropTypes.bool,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string
}

/**
 * @link Floorplan component properties.
 *
 * @todo Update documentation
 *
 * @typedef {FloorplanProps}
 */
Floorplan.propTypes = {
  aptWithPlan: PropTypes.shape({
    Amenities: PropTypes.string,
    ApartmentId: PropTypes.string,
    ApartmentName: PropTypes.string,
    ApplyOnlineURL: PropTypes.string,
    AvailabilityURL: PropTypes.string,
    AvailableDate: PropTypes.string,
    AvailableUnitsCount: PropTypes.string,
    Baths: PropTypes.string,
    Beds: PropTypes.string,
    Deposit: PropTypes.string,
    FloorplanHasSpecials: PropTypes.string,
    FloorplanId: PropTypes.string,
    FloorplanImageAltText: '',
    FloorplanImageName: PropTypes.string,
    FloorplanImageURL: PropTypes.string,
    FloorplanName: PropTypes.string,
    MaximumDeposit: PropTypes.string,
    MaximumRent: PropTypes.string,
    MaximumSQFT: PropTypes.string,
    MinimumDeposit: PropTypes.string,
    MinimumRent: PropTypes.string,
    MinimumSQFT: PropTypes.string,
    PropertyId: PropTypes.string,
    PropertyShowsSpecials: PropTypes.string,
    SQFT: PropTypes.string,
    Specials: PropTypes.string,
    UnitImageAltText: PropTypes.string,
    UnitImageURLs: PropTypes.arrayOf(PropTypes.string),
    UnitStatus: PropTypes.string,
    UnitTypeMapping: PropTypes.string,
    VoyagerPropertyCode: PropTypes.string,
    VoyagerPropertyId: PropTypes.string
  })
}

Article.defaultProps = {
  'data-container': false
}

Floorplan.defaultProps = {
  aptWithPlan: {
    Amenities: '',
    ApartmentId: '18168076',
    ApartmentName: '9W0316',
    ApplyOnlineURL: 'https://901wdc.securecafe.com/onlineleasing/901-w-street-nw-washington-dc-20001/oleapplication.aspx?stepname=RentalOptions&myOlePropertyId=1131409&FloorPlanID=3215320&UnitID=18168076&header=1',
    AvailabilityURL: 'https://901wdc.securecafe.com/onlineleasing/901-w-street-nw-washington-dc-20001/oleapplication.aspx?stepname=Apartments&myOlePropertyId=1131409&floorPlans=3215320',
    AvailableDate: '4/17/2020',
    AvailableUnitsCount: '1',
    Baths: '1.00',
    Beds: '1',
    Deposit: '0',
    FloorplanHasSpecials: '0',
    FloorplanId: '3215320',
    FloorplanImageAltText: '',
    FloorplanImageName: '901W_Floorplan_PNG_800x800_A01[1].png',
    FloorplanImageURL: 'https://cdn.rentcafe.com/dmslivecafe/3/1131409/901W_Floorplan_PNG_800x800_A01[1].png',
    FloorplanName: 'A01',
    MaximumDeposit: '0',
    MaximumRent: '2670.00',
    MaximumSQFT: '613',
    MinimumDeposit: '0',
    MinimumRent: '2670.00',
    MinimumSQFT: '613',
    PropertyId: '1131409',
    PropertyShowsSpecials: '0',
    SQFT: '613',
    Specials: '',
    UnitImageAltText: '',
    UnitImageURLs: [''],
    UnitStatus: 'Vacant Unrented Not Ready',
    UnitTypeMapping: '9w-a01',
    VoyagerPropertyCode: '248203',
    VoyagerPropertyId: '4382'
  }
}

export default Article
