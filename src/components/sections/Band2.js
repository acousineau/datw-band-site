import React from 'react'

import DanImage from '../../images/band-dan.jpg'
import SamImage from '../../images/band-sam.jpg'
import AndyImage from '../../images/band-andy.jpg'
import ThomImage from '../../images/band-thom.jpg'
import MattImage from '../../images/band-matt.jpg'

import './Band2.scss'

const Band = props => {
  return (
    <section className="Band2">
      <div className="container">
        <div className="band-container">
          <div className="top-row">
            <article className="player dan">
              <img src={DanImage} alt="Dan" />
              <h2>Dan HL</h2>
              <h3>Vocals, Guitar</h3>
            </article>
            <article className="player thom">
              <img src={ThomImage} alt="Thom" />
              <h2>Thom Brennan</h2>
              <h3>Trumpet, Vocals</h3>
            </article>
            <article className="player matt">
              <img src={MattImage} alt="Matt" />
              <h2>Matt Hines</h2>
              <h3>Keyboard, Vocals</h3>
            </article>
          </div>
          <article className="player sam">
            <img src={SamImage} alt="Sam" />
            <h2>Sam Katz</h2>
            <h3>Bass, Vocals</h3>
          </article>
          <article className="player andy">
            <img src={AndyImage} alt="Andy" />
            <h2>Andy Cousineau</h2>
            <h3>Drums</h3>
          </article>
        </div>
        <div className="spacer"></div>
      </div>
    </section>
  )
}

export default Band
