import { Link } from 'gatsby'
import React from 'react'

import './MobileNav.scss'

const Item = ({ menuOpen, toggleMenu, link, text }) => {
  return (
    <li className="t-subhead-large">
      <Link
        onClick={() => {
          toggleMenu(!menuOpen)
        }}
        to={link}
      >
        {text}
      </Link>
    </li>
  )
}

const MobileNav = ({ menuOpen, toggleMenu }) => {
  return (
    <nav className={`mobile ${menuOpen ? 'show' : ''}`}>
      <ul>
        {['home', 'live', 'news', 'band', 'contact'].map((t, i) => {
          return (
            <Item
              key={i}
              menuOpen={menuOpen}
              toggleMenu={toggleMenu}
              link={`/#${t}`}
              text={t}
            />
          )
        })}
      </ul>
    </nav>
  )
}

export default MobileNav
