import React, { Component } from 'react'
import { withRouter } from 'react-router'

class ScrollIntoView extends Component {
  componentDidUpdate (prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.node.scrollIntoView()
    }
  }

  render () {
    return (
      <span ref={node => (this.node = node)}>
        {this.props.children}
      </span>
    )
  }
}

export default withRouter(ScrollIntoView)
