import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import '../styles/video.css'

class Tutorial extends Component {
  constructor (props) {
    super(props)
    this.state = {
      topCoord: null
    }
  }
  componentDidMount () {
    const thisElement = ReactDOM.findDOMNode(this)
    const top = thisElement.getBoundingClientRect().top
    this.setState({ topCoord: top })
  }

  render () {
    return (
      <div className='container'>
        <Helmet>
          <title>Tutorial | Resource Center</title>
        </Helmet>
        <div className='row' style={{ marginBottom: 0 }}>
          {/* Guess 64px the first render, then immediately adjust
              to a proper calculated value.
              This prevents the layout from breaking should the AppBar
              ever change to anything other than 64px. */}
          <div
            className='col s12 valign-wrapper'
            style={{
              minHeight: `calc(100vh - ${this.state.topCoord || '64'}px)`
            }}
          >
            <div style={{ width: '100%' }}>
              <div className='video-container z-depth-1'>
                <iframe
                  src='https://www.youtube.com/embed/WQt0GDsL8ZU?rel=0'
                  width='853'
                  height='480'
                  frameBorder='0'
                  allowFullScreen='allowfullscreen'
                  title='tutorial-video'
                />
              </div>
              <p style={{ marginTop: '20px' }}>
                If you have any problems using the MarCom Resource Center,
                please contact Jesse Weigel at{' '}
                <a href='mailto:jweigel@franciscan.edu'>
                  jweigel@franciscan.edu
                </a>{' '}
                or <a href='tel:17402845305'> 740-284-5305</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tutorial
