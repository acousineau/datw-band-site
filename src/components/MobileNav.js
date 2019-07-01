import React from 'react'

import './MobileNav.scss'

const Item = ({ menuOpen, toggleMenu, link, text }) => {
  return (
    <li className="t-subhead-large">
      <a
        onClick={() => {
          toggleMenu(!menuOpen)
        }}
        href={link}
      >
        {text}
      </a>
    </li>
  )
}

const MobileNav = ({ menuOpen, toggleMenu }) => {
  return (
    <nav className={`mobile ${menuOpen ? 'show' : ''}`}>
      <ul>
        {['home', 'live', 'news', 'band', 'contact'].map(t => {
          return (
            <Item
              menuOpen={menuOpen}
              toggleMenu={toggleMenu}
              link={`#${t}`}
              text={t}
            />
          )
        })}
      </ul>
    </nav>
  )
}

export default MobileNav
