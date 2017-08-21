import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { GenericCard } from './../components/GenericCard'
import { Helmet } from 'react-helmet'
import { genericCardData } from '../data/genericCardData'
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
          {genericCardData.map((card, key) => {
            return (
              <div key={key} className='col s12 m4 flex-div'>
                <GenericCard cardTitle={card.title}>
                  {card.description}
                </GenericCard>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Home
