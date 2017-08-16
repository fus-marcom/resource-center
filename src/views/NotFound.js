import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class NotFound extends Component {
  state = {}
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
