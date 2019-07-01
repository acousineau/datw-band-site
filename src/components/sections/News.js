import React from 'react'

import Background from '../../images/bg-news.jpg'

import './News.scss'

const News = props => {
  return (
    <section id="news">
      <div
        className="container"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="news-container">
          <article className="news-item">
            <div className="date">
              <p>Jul 6, 2019</p>
            </div>
            <div className="story">
              <h1>New Album Release</h1>
              <p>
                New music has finally arrived! Dan &amp; the Wildfire will be
                releasing "The River's Gonna Rise," this year. This latest
                offering will be a full length album released in four separate
                pieces. Check out{' '}
                <a href="spotify:artist:3a5h90HoFJJTe6FwnF4zIx">
                  Check out album on Spotify
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default News
