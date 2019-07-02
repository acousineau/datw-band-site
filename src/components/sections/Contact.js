import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import Background from '../../images/bg-contact.jpg'

import './Contact.scss'

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      cityState: '',
    }
  }

  render() {
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
              method="post"
              action="/success"
              name="mailing-list"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/datwildfire/"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/datwildfire"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/danandthewildfire/"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
