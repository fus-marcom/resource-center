import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { GenericCard } from './../components/GenericCard'
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
        <div className='row' style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div className='col s12 m4'>
            <GenericCard cardTitle='Brand Manual'>
              Visual Brand Identity Manual
            </GenericCard>
          </div>
          <div className='col s12 m4'>
            <GenericCard cardTitle='Logos and Posters'>
              Official Franciscan University Logos and Poster Resources
            </GenericCard>
          </div>
          <div className='col s12 m4'>
            <GenericCard cardTitle='Letterhead'>
              Franciscan University approved letterhead and letter writing
              guidelines
            </GenericCard>
          </div>
          <div className='col s12 m4'>
            <GenericCard cardTitle='Suggest a Story'>
              Help us share your news.
            </GenericCard>
          </div>
          <div className='col s12 m4'>
            <GenericCard cardTitle='Service Request Form'>
              Let us know what you need, and we will get started on it as soon
              as we can.
            </GenericCard>
          </div>
          <div className='col s12 m4'>
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
