import React from 'react'

import Background from '../../images/bg-live.jpg'

import './Live.scss'

const Live = props => {
  return (
    <section id="live">
      <div
        className="container"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <h1 className="title">Live Show Dates</h1>
        <div className="shows-table">
          <div className="shows-inner-container">
            <article className="show-row last-child">
              <div className="show-date">Jul 6</div>
              <div className="show-day">Sat</div>
              <div className="show-venue">City Winery</div>
              <div className="show-location">Boston, MA, United States</div>
              <div className="show-actions">
                <a
                  className="button small tickets"
                  href="https://citywinery.com/boston/danandthewildfire070619.html"
                >
                  Tickets
                </a>
                <a
                  className="button small rsvp"
                  href="https://www.facebook.com/events/269027110699980/"
                >
                  RSVP
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Live
