import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Background from '../../images/bg-live.jpg'

import './Live.scss'

const Live = () => {
  const data = useStaticQuery(graphql`
    query Shows {
      allShowsJson {
        nodes {
          date
          day
          venue
          tickets
          rsvp
          location
        }
      }
    }
  `)

  return (
    <section id="live">
      <div
        className="container"
        style={{
          backgroundImage: `url(${Background})`,
          paddingBottom: '20px',
        }}
      >
        <h1 className="title">Live Show Dates</h1>
        <div className="shows-table">
          <div className="shows-inner-container">
            {data.allShowsJson.nodes.map((show, i, a) => (
              <article
                key={i}
                className={`show-row ${i === a.length - 1 ? 'last-child' : ''}`}
              >
                <div className="show-date">{show.date}</div>
                <div className="show-day">{show.day}</div>
                <div className="show-venue">{show.venue}</div>
                <div className="show-location">{show.location}</div>
                <div className="show-actions">
                  {show.tickets && (
                    <a
                      className="button small tickets"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={show.tickets}
                    >
                      Tickets
                    </a>
                  )}
                  {show.rsvp && (
                    <a
                      className="button small rsvp"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={show.rsvp}
                    >
                      RSVP
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Live
