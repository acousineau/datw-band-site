import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import Background from '../../images/bg-contact.jpg'

import './Contact.scss'

const Contact = props => {
  return (
    <section id="contact">
      <div
        className="container"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="contact-container">
          <h1>Join Our Mailing List</h1>
          <form
            className="contact-form"
            name="mailing-list"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div className="input-row">
              <label htmlFor="firstName" className="firstName--label">
                First Name*{' '}
                <input type="text" id="firstName" name="firstName" required />
              </label>
              <label htmlFor="lastName" className="lastName--label">
                Last Name*
                <input type="text" id="lastName" name="lastName" required />
              </label>
            </div>
            <div className="input-row">
              <label htmlFor="email">
                Email*
                <input type="email" id="email" name="email" required />
              </label>
            </div>
            <div className="input-row">
              <label htmlFor="cityState">
                City / State{' '}
                <span className="not-required">(Not required)</span>
                <input type="text" id="cityState" name="cityState" />
              </label>
            </div>
            <input type="hidden" name="bot-field" />
            <div className="input-row submit">
              <button type="submit">Join Mailing List</button>
            </div>
          </form>
          <h1>Booking and Press Inquiries</h1>
          <a href="mailto:booking@danandthewildfire.com" className="booking">
            Email booking@danandthewildfire.com
          </a>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/datwildfire/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/datwildfire">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.facebook.com/danandthewildfire/">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
