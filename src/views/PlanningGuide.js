// eslint-disable-next-line
/* global trackScroll handleScroll */
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import throttle from 'lodash/throttle'
import '../styles/planning-guide.css'
import {
  headerTitles,
  planningGuideData,
  servicesData,
  styles
} from '../data/planningGuideServicesData'

const spliceHeaders = headers => {
  let headerPositions = []
  headers.forEach(elem => {
    headerPositions.push(elem.offsetTop)
  })
  return headerPositions
}

class PlanningGuide extends Component {
  constructor (props) {
    super(props)
    this.state = {
      headerPositions: [],
      scrollY: 0,
      activeSection: 0
    }
    this.scrollSpy = throttle(this.handleScroll, 200)
  }

  componentDidMount () {
    this.setState({
      headerPositions: spliceHeaders([...document.getElementsByTagName('h3')])
    })
    window.addEventListener('scroll', this.scrollSpy)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollSpy)
  }

  handleScroll = () => {
    this.setState({ scrollY: window.scrollY }, () => {
      switch (true) {
        case this.state.scrollY < this.state.headerPositions[1] - 1:
          this.setState({ activeSection: 0 })
          break
        case this.state.scrollY < this.state.headerPositions[2] - 1:
          this.setState({ activeSection: 1 })
          break
        case this.state.scrollY < this.state.headerPositions[3] - 1:
          this.setState({ activeSection: 2 })
          break
        default:
          this.setState({ activeSection: 3 })
          break
      }
    })
  }

  handleNext = () => {
    const { stepIndex } = this.state
    if (stepIndex < 2) {
      this.setState({ stepIndex: stepIndex + 1 })
    }
  }

  handlePrev = () => {
    const { stepIndex } = this.state
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 })
    }
  }

  render () {
    return (
      <div>
        <Helmet>
          <title>Planning Guide | Resource Center</title>
        </Helmet>

        <div style={styles.root}>
          <ul>
            {headerTitles.map((head, key) => {
              return (
                <li
                  key={key}
                  className={this.state.activeSection === key && 'active'}
                  onClick={() =>
                    (document.body.scrollTop = this.state.headerPositions[key])}
                >
                  {head.title}
                </li>
              )
            })}
          </ul>
        </div>

        <div className='container'>
          <div className='row flow-text'>
            <h2 style={{ marginBottom: 0 }}>
              Please follow these guidelines before final approval.
            </h2>
            <div className='col s12'>
              {planningGuideData.map((item, key) => {
                return (
                  <span key={key}>
                    <h3 id={item.id}>
                      {item.title}
                    </h3>
                    {item.description.split('\n').map((paragraph, key) => {
                      return (
                        <p key={key}>
                          {paragraph}
                        </p>
                      )
                    })}
                  </span>
                )
              })}
              <p>
                See <Link to='glossary'>Common MarCom Terms</Link> for more
                information.
              </p>
              <h3 id='services'>Services</h3>
              <p>
                MarCom provides many services to help you complete your
                marketing and communication projects.
              </p>
              {servicesData.map((service, key) => {
                return (
                  <dl key={key}>
                    <dt>
                      {service.title}
                    </dt>
                    <dd>
                      {service.description}
                    </dd>
                  </dl>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlanningGuide
