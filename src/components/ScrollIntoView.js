import React, { Component } from 'react'
import { withRouter } from 'react-router'

class ScrollIntoView extends Component {
  componentDidUpdate (prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.component.scrollIntoView()
    }
  }

  render () {
    return (
      <span ref={component => (this.component = component)}>
        {this.props.children}
      </span>
    )
  }
}

export default withRouter(ScrollIntoView)
