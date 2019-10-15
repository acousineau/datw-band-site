import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { format, isAfter, subDays } from 'date-fns'

import Background from '../../images/bg-live.jpg'

import './Shows.scss'

const Shows = () => {
  const data = useStaticQuery(graphql`
    query Shows {
      allShowsJson {
        nodes {
          date
          venue
          tickets
          rsvp
          location
        }
      }
    }
  `)

  const dates = data.allShowsJson.nodes.sort((a, b) =>
    a.date < b.date ? -1 : 1
  )

  return (
    <section id="shows">
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
            {dates
              .filter(show => {
                const now = subDays(Date.now(), 1)
                // const now = Date.now()
                return isAfter(show.date, now)
              })
              .map((show, i) => (
                <article key={i} className="show-row">
                  <div className="show-date">{format(show.date, 'MMM D')}</div>
                  <div className="show-day">{format(show.date, 'ddd')}</div>
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
        <div className="pagination">
          <Link to="/past-dates">Past Dates</Link>
        </div>
      </div>
    </section>
  )
}

export default Shows
