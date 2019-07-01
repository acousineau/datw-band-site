import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import DATWLogo from '../images/DATW-logo-f0f2ec.png'

import './Header.scss'

const Header = ({ siteTitle, toggleMenu, menuOpen }) => {
  return (
    <header className="Header">
      <nav className="desktop">
        <ul>
          <li className="t-subhead-large">
            <a href="#live">Live</a>
          </li>
          <li className="t-subhead-large">
            <a href="#news">News</a>
          </li>
          {/* <li className="t-subhead-large">
          <a href="#media">Media</a>
        </li> */}
        </ul>
      </nav>
      <h1 className="logo">
        <Link
          to="/"
          title="Dan and the Wildfire"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img
            style={{
              width: '200px',
            }}
            src={DATWLogo}
            alt="Dan and the Wildfire Logo"
          />
        </Link>
      </h1>
      <nav className="desktop">
        <ul>
          <li className="t-subhead-large">
            <a href="#band">Band</a>
          </li>
          {/* <li className="t-subhead-large">
          <a href="#store">Store</a>
        </li> */}
          <li className="t-subhead-large">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="menu-hamburger"
        onClick={() => {
          toggleMenu(!menuOpen)
        }}
      >
        <h1>
          Menu <FontAwesomeIcon icon={faBars} style={{ marginLeft: '5px' }} />
        </h1>
      </button>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
