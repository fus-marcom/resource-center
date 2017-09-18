import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { logPageView } from '../utils/analytics'

class NotFound extends Component {
  componentDidMount = () => {
    logPageView()
  }
  render () {
    return (
      <div>
        <Helmet>
          <title>Page Not Found | Resource Center</title>
        </Helmet>
        <h1>Page not found</h1>
      </div>
    )
  }
}

export default NotFound
