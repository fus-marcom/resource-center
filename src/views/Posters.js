import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { GenericCard } from './../components/GenericCard'
import { Helmet } from 'react-helmet'

class Posters extends Component {
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
        <Helmet>
          <title>Posters | Resource Center</title>
        </Helmet>
        <div
          className='row flow-text'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <h2 style={{ flex: '1 100%' }}>Poster Resources</h2>
          <div className='col s12 m6 flex-div'>
            <GenericCard
              hoverable
              link='https://www.canva.com/'
              cardTitle='Create Your Own'
            >
              Canva.com is a free graphic design tool with an easy to use
              drag-and-drop interface and access to over a million photographs,
              graphics, and fonts. It is used by non-designers as well as
              professionals.
            </GenericCard>
          </div>
          <div className='col s12 m6 flex-div'>
            <GenericCard
              link='/poster-videos'
              cardTitle='Video Tutorials'
              hoverable
            >
              Learn how to create posters in Powerpoint, Publisher, Photoshop,
              and InDesign.
            </GenericCard>
          </div>
          <div className='col s12 m6 flex-div'>
            <GenericCard cardTitle='Student Design'>
              Starting fall 2017 semester, students with graphic design
              experience will be available to create your flyer or poster.
              Contact Vicki Bell, Print Services Manager at Ext. 6354, for
              pricing and more information.
            </GenericCard>
          </div>
          <div className='col s12 m6 flex-div'>
            <GenericCard cardTitle='Professional Design'>
              Marie Highfield ’91 ( <a href='tel:17402664926'>740-266-4926</a> /{' '}
              <a href='mailto:mariehighfield@sbcglobal.net'>
                mariehighfield@sbcglobal.net
              </a>{' '}
              ) is a freelance graphic designer who lives in Steubenville and
              does many design projects for the University.
            </GenericCard>
          </div>
          <div className='col s12 m6 flex-div'>
            <GenericCard cardTitle='Printing'>
              Franciscan University Mail and Print Services prices are well
              below those of area printers. They print in a variety of formats
              including table tents, flyers, and posters in sizes from 8-1/2x11”
              to 24x36” or bigger. Contact Mail and Print Services for a pricing
              sheet and format guidelines. The manager is Vicki Bell (<a href='tel:17402836354'>740-283-6354</a>{' '}
              /{' '}
              <a href='mailto:mailservices@franciscan.edu'>
                mailservices@franciscan.edu
              </a>).
            </GenericCard>
          </div>
          <div className='col s12 m6 flex-div'>
            <GenericCard cardTitle='University Logo' hoverable link='/logos'>
              For all projects, please include the official Franciscan
              University logo, either in full color or one color of your choice.
            </GenericCard>
          </div>
        </div>
      </div>
    )
  }
}

export default Posters
