import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { GenericCard } from './../components/GenericCard'
import { posterData } from '../data/posterData'

class Posters extends Component {
  constructor (props) {
    super(props)
    this.state = {
      topCoord: null
    }
  }

  componentDidMount () {
    this.setState({
      topCoord: document.getElementsByClassName('container')[0].offsetTop
    })
  }

  render () {
    return (
      <div
        className='container valign-wrapper'
        style={{
          marginBottom: 0,
          minHeight: `calc(100vh - ${this.state.topCoord || '64'}px)`,
          width: '100%'
        }}
      >
        <Helmet>
          <title>Posters | Resource Center</title>
        </Helmet>
        <div
          className='row flow-text'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <h2 style={{ flex: '1 100%' }}>Poster Resources</h2>
          {posterData.map((poster, key) => {
            return (
              <div key={key} className='col s12 m6 flex-div'>
                <GenericCard
                  hoverable={poster.hoverable}
                  link={poster.link}
                  cardTitle={poster.cardTitle}
                >
                  {poster.description}
                  {poster.contactInfo !== undefined
                    ? <div style={{ marginBottom: '0' }}>
                      <br />
                      {poster.contactInfo.map((contact, key) => {
                        return (
                          <p
                            style={{ margin: '0 10px', textAlign: 'center' }}
                            key={key}
                            >
                            <Link to={contact.link}>
                              {contact.linkText}
                            </Link>
                          </p>
                        )
                      })}
                    </div>
                    : null}
                </GenericCard>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Posters
