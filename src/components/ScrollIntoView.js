import React, { Component } from 'react'
import { withRouter } from 'react-router'

class ScrollIntoView extends Component {
  componentDidUpdate (prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return (
      <span>
        {this.props.children}
      </span>
    )
  }
}

export default withRouter(ScrollIntoView)
