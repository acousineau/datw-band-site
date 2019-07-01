import React from 'react'

import Background from '../../images/bg-band.jpg'
import MobileBackground from '../../images/bg-band-mobile.jpg'

import './Band.scss'

const Band = props => {
  return (
    <section id="band">
      <div
        className="container"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div
          className="mobile-image"
          style={{
            backgroundImage: `url(${MobileBackground})`,
          }}
        />
        <div className="band-container">
          <h1>About the Band</h1>
          <p>
            Dan and the Wildfire is a particularly potent cocktail comprised of
            1 part old time mountain folk, 1 part classic rock and roll, and 3
            parts bottom shelf bourbon. Mix it up and what you get is a musical
            experience that burns it's way into your bones and lights up your
            soul with a crisp, rootsy sound that'll leave you reeling for
            another taste of that Wildfire. This Boston based band was started
            by guitarist and singer-songwriter Dan HL in 2011 with trumpet
            player Thom Brennan and keyboardist Matt Hines under the auspices of
            forging a softer, folk sound. Their sound grew beyond the folk
            boundary when bassist Sam Katz joined the band. To date, Dan and the
            Wildfire have played all over New England, Washington D.C., out to
            Chicago and burned down every place in between. Their fourth full
            length album, "The River's Gonna Rise", released in July of 2019, is
            their latest project and debut for their new drummer, Andy
            Cousineau. This is following multiple EP releases showcasing some of
            the newer tunes for the better part of 2017 to now.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Band
