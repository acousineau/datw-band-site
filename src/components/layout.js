/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './Header'
import MobileNav from './MobileNav'
import '../styles/_app-base.scss'

import './Layout.scss'

const Layout = ({ children }) => {
  const [menuOpen, toggleMenu] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ overflow: 'hidden' }}>
      <MobileNav menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className={`Layout ${menuOpen ? 'shift' : ''}`}>
        <Header
          siteTitle={data.site.siteMetadata.title}
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
        />
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
