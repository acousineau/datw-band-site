import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSpotify,
  faItunes,
  faDropbox,
} from '@fortawesome/free-brands-svg-icons'

import Layout from '../components/layout'
import Background from '../images/bg-music.png'

import './Music.scss'

const Music = () => (
  <Layout>
    <section className="Music">
      <div
        className="container"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="music-container">
          <h1>Stream or Download Below:</h1>
          <div className="links-container">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://open.spotify.com/album/5oIxiaiyJC1J5rqfCVQAbR?si=BjLAk0yRRNqA0HPiaG15OQ"
            >
              <FontAwesomeIcon icon={faSpotify} /> Spotify
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://music.apple.com/us/album/the-rivers-gonna-rise/1471828153"
            >
              <FontAwesomeIcon icon={faItunes} /> Apple Music
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.dropbox.com/sh/sgrywldzukxnm3n/AAD-ygRHwlGBGFU6LQACtRk3a?dl=0"
              style={{ marginBottom: '0' }}
            >
              <FontAwesomeIcon icon={faDropbox} /> Download
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Music
