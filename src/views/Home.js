import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { GenericCard } from './../components/GenericCard'
import { Helmet } from 'react-helmet'
import '../styles/home.css'

class Home extends Component {
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
      <div
        className='container valign-wrapper'
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
          <h2 style={{ flex: '1 100%' }}>Hello! How can MarCom help you?</h2>
          <div className='col s12 m4 flex-div'>
            <GenericCard cardTitle='Brand Manual'>
              Visual Brand Identity Manual
            </GenericCard>
          </div>
          <div className='col s12 m4 flex-div'>
            <GenericCard cardTitle='Logos and Posters'>
              Official Franciscan University Logos and Poster Resources
            </GenericCard>
          </div>
          <div className='col s12 m4 flex-div'>
            <GenericCard cardTitle='Letterhead'>
              Franciscan University approved letterhead and letter writing
              guidelines
            </GenericCard>
          </div>
          <div className='col s12 m4 flex-div'>
            <GenericCard cardTitle='Suggest a Story'>
              Help us share your news.
            </GenericCard>
          </div>
          <div className='col s12 m4 flex-div'>
            <GenericCard cardTitle='Service Request Form'>
              Let us know what you need, and we will get started on it as soon
              as we can.
            </GenericCard>
          </div>
          <div className='col s12 m4 flex-div'>
            <GenericCard cardTitle='Powerpoint'>
              Official Franciscan University Powerpoint temlate
            </GenericCard>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
