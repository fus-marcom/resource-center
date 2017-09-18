import map from 'lodash/map'
import React, { Component } from 'react'
import { GenericCard } from '../components/GenericCard'
import { Helmet } from 'react-helmet'
import genericCardData from '../data/genericCardData'
import '../styles/home.css'
import { logPageView } from '../utils/analytics'

class Home extends Component {
  state = { topCoord: null }

  componentDidMount () {
    this.setState({
      topCoord: this.refs.homepageContainer.offsetTop
    })
    logPageView()
  }

  render () {
    return (
      <div
        ref='homepageContainer'
        className='container'
        style={{
          marginBottom: 0,
          minHeight: `calc(100vh - ${this.state.topCoord || '64'}px)`
        }}
      >
        <div
          className='row flow-text'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <Helmet>
            <title>Home | Resource Center</title>
          </Helmet>
          <div className='col s12'>
            <h2 style={{ flex: '1 100%' }}>Hello! How can MarCom help you?</h2>
          </div>

          {map(
            genericCardData,
            ({ hoverable, link, title, description }, key) => {
              return (
                <div
                  key={key}
                  className='col s12 m4 flex-div home-card-container'
                >
                  <GenericCard
                    cardTitle={title}
                    link={link}
                    className={hoverable ? 'hoverable' : ''}
                  >
                    {description}
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

export default Home
