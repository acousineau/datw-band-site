import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Background from '../../images/bg-news.jpg'

import './News.scss'

const News = () => {
  const data = useStaticQuery(graphql`
    query News {
      allNewsJson {
        nodes {
          action {
            link
            text
          }
          date
          description
          title
        }
      }
    }
  `)

  return (
    <section id="news">
      <div
        className="container"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="news-container">
          {data.allNewsJson.nodes.map((item, i) => (
            <article className="news-item" key={i}>
              <div className="date">
                <p>{item.date}</p>
              </div>
              <div className="story">
                <h1>{item.title}</h1>
                <p>
                  {item.description}{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.action.link}
                  >
                    {item.action.text}
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
