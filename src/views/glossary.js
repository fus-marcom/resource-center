import map from 'lodash/map'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import glossaryData from '../data/glossaryData'
import { logPageView } from '../utils/analytics'

class Glossary extends Component {
  componentDidMount = () => {
    logPageView()
  }
  render () {
    return (
      <div>
        <Helmet>
          <title>Glossary | Resource Center</title>
        </Helmet>
        <div className='container'>
          <div className='row flow-text'>
            <div className='col s12'>
              <h2 style={{ marginBottom: 0 }}>Common MarCom Terms</h2>
            </div>
            <div className='col s12'>
              {map(glossaryData, ({ title, description }, key) => {
                return (
                  <dl key={key}>
                    <dt>{title}</dt>
                    <dd>{description}</dd>
                  </dl>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Glossary
