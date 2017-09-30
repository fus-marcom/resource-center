import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { initGA, logPageView } from '../utils/analytics'

class ScrollIntoView extends Component {
  componentWillMount () {
    if (!window.GA_INTIALIZED) {
      initGA()
      window.GA_INTIALIZED = true
      logPageView()
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.component.scrollIntoView()
      logPageView()
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
