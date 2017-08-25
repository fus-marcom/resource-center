// eslint-disable-next-line
/* global trackScroll handleScroll setHeaders */
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import throttle from 'lodash/throttle'
import PlanningGuidelines from '../components/PlanningGuidelines'
import '../styles/planning-guide.css'

class PlanningGuide extends Component {
  constructor (props) {
    super(props)
    this.state = {
      headerPositions: [],
      scrollY: 0,
      activeSection: 0
    }
    this.handleScroll = throttle(this.handleScroll, 200)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  setHeaders = headerPositions => {
    this.setState({ headerPositions: headerPositions })
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
        <PlanningGuidelines
          setHeaders={this.setHeaders}
          activeSection={this.state.activeSection}
          headerPositions={this.state.headerPositions}
        />
      </div>
    )
  }
}

export default PlanningGuide
