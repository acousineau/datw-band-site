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
              href="https://open.spotify.com/artist/3a5h90HoFJJTe6FwnF4zIx?si=0tPa5KrOTVOUEv0rZZWOaw"
            >
              <FontAwesomeIcon icon={faSpotify} /> Spotify
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://music.apple.com/us/artist/dan-and-the-wildfire/566347721"
            >
              <FontAwesomeIcon icon={faItunes} /> Apple Music
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.dropbox.com/sh/nifgr56qr93pngm/AAB1nnJf54yart8yWOy73Sc2a?dl=0&fbclid=IwAR0Uqd_OaNf_kLnVQoaYrraC4hf0gRwFNkhGIj524nR36GvG8e3xnthYNGI"
              style={{ marginBottom: '0' }}
            >
              <FontAwesomeIcon icon={faDropbox} /> Dropbox
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Music
