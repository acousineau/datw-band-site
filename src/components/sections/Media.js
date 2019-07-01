import React from 'react'

import Background from '../../images/bg-.jpg'

import './Media.scss'

const Media = props => {
  return (
    <section id="media">
      <div
        className="container"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <h1 className="title">Instagram Feed</h1>
        <h2 className="follow">Follow @datwildfire</h2>
      </div>
    </section>
  )
}

export default Media
