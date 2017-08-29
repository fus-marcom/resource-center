import map from 'lodash/map'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { GenericCard } from './../components/GenericCard'
import posterData from '../data/posterData'

class Posters extends Component {
  state = { topCoord: null }

  componentDidMount () {
    this.setState({
      topCoord: this.refs.pageContainer.offsetTop
    })
  }

  render () {
    return (
      <div
        ref='pageContainer'
        className='container valign-wrapper'
        style={{
          marginBottom: 0,
          minHeight: `calc(100vh - ${this.state.topCoord || '64'}px)`
        }}
      >
        <Helmet>
          <title>Posters | Resource Center</title>
        </Helmet>
        <div
          className='row flow-text'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <div className='col s12'>
            <h2 style={{ flex: '1 100%' }}>Poster Resources</h2>
          </div>

          {map(
            posterData,
            ({ hoverable, link, cardTitle, description, contactInfo }, key) => {
              return (
                <div key={key} className='col s12 m6 flex-div'>
                  <GenericCard
                    link={link}
                    cardTitle={cardTitle}
                    className={hoverable ? 'hoverable' : ''}
                  >
                    {description}
                    {contactInfo !== undefined
                      ? <div style={{ marginBottom: '0' }}>
                        <br />
                        {map(contactInfo, ({ link, linkText }, key) => {
                          return (
                            <p
                              style={{
                                margin: '0 10px'
                              }}
                              key={key}
                              >
                              <Link to={link}>
                                {linkText}
                              </Link>
                            </p>
                          )
                        })}
                      </div>
                      : null}
                  </GenericCard>
                </div>
              )
            }
          )}
        </div>
      </div>
    )
  }
}

export default Posters
