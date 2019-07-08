import React from 'react'
import styled from 'styled-components'

import Background from '../../images/bg-home.jpg'
import MobileBackground from '../../images/bg-home-mobile.jpg'

import './Home.scss'

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-size: cover;
  background-image: url(${Background});
  background-position-x: 65%;

  @media (max-aspect-ratio: 5/4) {
    background-image: url(${MobileBackground});
  }
`

const Home = props => {
  return (
    <section id="home">
      <Container>
        <div className="album-container">
          <h2 style={{ marginBottom: '0' }}>The New Album</h2>
          <h1 style={{ marginBottom: '5px' }}>The River's Gonna Rise</h1>
          <a
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://open.spotify.com/album/5oIxiaiyJC1J5rqfCVQAbR?si=BjLAk0yRRNqA0HPiaG15OQ"
          >
            Stream on Spotify
          </a>
        </div>
      </Container>
    </section>
  )
}

export default Home
