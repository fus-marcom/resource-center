import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { logPageView } from '../utils/analytics'

class Services extends Component {
  componentDidMount = () => {
    logPageView()
  }
  render () {
    return (
      <div>
        <Helmet>
          <title>Services | Resource Center</title>
        </Helmet>
        <h1>Services View</h1>
      </div>
    )
  }
}

export default Services
