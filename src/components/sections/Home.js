import React from 'react'

import Background from '../../images/bg-home.jpg'

import './Home.scss'

const Home = props => {
  return (
    <section id="home">
      <div
        className="container"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="album-container">
          <h2 style={{ marginBottom: '0' }}>The New Album</h2>
          <h1 style={{ marginBottom: '5px' }}>The River's Gonna Rise</h1>
          <a className="button" href="spotify:artist:3a5h90HoFJJTe6FwnF4zIx">
            Stream on Spotify
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
