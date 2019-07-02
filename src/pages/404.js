import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './404.scss'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section id="four-oh-four">
      <div className="container">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
