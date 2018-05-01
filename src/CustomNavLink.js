import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
const CustomNavLink = ({
  to,
  exact,
  strict,
  location,
  activeClassName,
  className,
  activeStyle,
  style,
  label,
  isActive: getIsActive,
  ...rest
}) => (
  <Route
    path={typeof to === 'object' ? to.pathname : to}
    exact={exact}
    strict={strict}
    location={location}
    children={({ location, match }) => {
      const isActive = !!(getIsActive ? getIsActive(match, location) : match)

      return (
        <li 
            className={isActive ? [ className, activeClassName ].filter(i => i).join(' ') : className}
            style={isActive ? { ...style, ...activeStyle } : style}
            {...rest}>
          <Link
            to={to}>{label}</Link>
        </li>
      )
    }}
  />
)

CustomNavLink.propTypes = {
  //to: Link.propTypes.to,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  location: PropTypes.object,
  activeClassName: PropTypes.string,
  className: PropTypes.string,
  activeStyle: PropTypes.object,
  style: PropTypes.object,
  isActive: PropTypes.func
}

CustomNavLink.defaultProps = {
  activeClassName: 'active'
}

export default CustomNavLink