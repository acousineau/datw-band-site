import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { format, isBefore, subDays } from 'date-fns'

import Layout from '../components/layout'
// import Background from '../images/bg-live.jpg'

import './PastDates.scss'

const PastDates = () => {
  const data = useStaticQuery(graphql`
    query ShowsPast {
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
    a.date < b.date ? 1 : -1
  )

  return (
    <Layout>
      <section id="past-dates">
        <div
          className="container"
          style={{
            // backgroundImage: `url(${Background})`,
            paddingBottom: '20px',
          }}
        >
          <h1 className="title">Live Show Dates</h1>
          <div className="shows-table">
            <div className="shows-inner-container">
              {dates
                .filter(show => {
                  const now = subDays(Date.now(), 1)
                  return isBefore(show.date, now)
                })
                .map((show, i, a) => (
                  <article
                    key={i}
                    className={`show-row ${
                      i === a.length - 1 ? 'last-child' : ''
                    }`}
                  >
                    <div className="show-date">
                      {format(show.date, 'MMM D')}
                    </div>
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
        </div>
      </section>
    </Layout>
  )
}

export default PastDates
