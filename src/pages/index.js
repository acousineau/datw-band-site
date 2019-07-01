import React from 'react'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

import Home from '../components/sections/Home'
import Live from '../components/sections/Live'
import News from '../components/sections/News'
// import Media from '../components/sections/Media'
import Band from '../components/sections/Band'
import Band2 from '../components/sections/Band2'
import Contact from '../components/sections/Contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home url="#home" />
    <Live url="#live" />
    <News url="#news" />
    {/* <Media url="#media"></Media> */}
    <Band url="#band" />
    <Band2 />
    <Contact url="#contact"></Contact>
  </Layout>
)

export default IndexPage
