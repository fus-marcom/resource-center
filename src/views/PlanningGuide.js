/* global trackScroll handleScroll */
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Step, Stepper, StepButton } from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import throttle from 'lodash/throttle'

const getStyles = () => {
  return {
    root: {
      position: 'fixed',
      right: '16px',
      maxWidth: 700,
      margin: 'auto'
    },
    content: {
      margin: '0 16px'
    },
    actions: {
      marginTop: 12
    },
    backButton: {
      marginRight: 12
    }
  }
}

class PlanningGuide extends Component {
  state = {
    stepIndex: null,
    visited: [],
    headerPositions: [],
    scrollY: 0
  }

  componentWillMount () {
    const { stepIndex, visited } = this.state
    this.setState({ visited: visited.concat(stepIndex) })
  }

  componentDidMount = () => {
    const headers = document.getElementsByTagName('h3')
    let headerPositions = []
    for (let i = 0; i < headers.length; i++) {
      headerPositions.push(headers[i].offsetTop)
    }
    this.setState({ headerPositions: headerPositions })
    this.trackScroll()
  }

  componentWillUpdate (nextProps, nextState) {
    const { stepIndex, visited } = nextState
    if (visited.indexOf(stepIndex) === -1) {
      this.setState({ visited: visited.concat(stepIndex) })
    }
  }

  componentWillUnmount () {
    window.removeEventListener(
      'scroll',
      throttle(() => {
        this.handleScroll()
      }, 200)
    )
  }

  trackScroll = () => {
    window.addEventListener(
      'scroll',
      throttle(() => {
        this.handleScroll()
      }, 200)
    )
  }

  handleScroll = e => {
    this.setState({ scrollY: window.scrollY })
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

  getStepContent (stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...'
      case 1:
        return 'What is an ad group anyways?'
      case 2:
        return 'This is the bit I really care about!'
      default:
        return 'Click a step to get started.'
    }
  }
  render () {
    const { stepIndex, visited } = this.state
    const styles = getStyles()
    return (
      <div>
        <Helmet>
          <title>Planning Guide | Resource Center</title>
        </Helmet>

        <div style={styles.root}>
          <p>
            <a
              href='#'
              onClick={event => {
                event.preventDefault()
                this.setState({ stepIndex: null, visited: [] })
              }}
            >
              Click here
            </a>{' '}
            to reset the example.
          </p>
          <Stepper linear={false} orientation='vertical'>
            <Step
              completed={visited.indexOf(0) !== -1}
              active={stepIndex === 0}
            >
              <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
                Select campaign settings
              </StepButton>
            </Step>
            <Step
              completed={visited.indexOf(1) !== -1}
              active={stepIndex === 1}
            >
              <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
                Create an ad group
              </StepButton>
            </Step>
            <Step
              completed={visited.indexOf(2) !== -1}
              active={stepIndex === 2}
            >
              <StepButton onClick={() => this.setState({ stepIndex: 2 })}>
                Create an ad
              </StepButton>
            </Step>
          </Stepper>
          <div style={styles.content}>
            <p>
              {this.getStepContent(stepIndex)}
            </p>
            {stepIndex !== null &&
              <div style={styles.actions}>
                <FlatButton
                  label='Back'
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={styles.backButton}
                />
                <RaisedButton label='Next' primary onClick={this.handleNext} />
              </div>}
          </div>
        </div>

        <div className='container'>
          <div className='row flow-text'>
            <h2 style={{ marginBottom: 0 }}>
              Please follow these guidelines before final approval.
            </h2>
            <div className='col s12'>
              <h3 id='plan-ahead'>Plan Ahead</h3>
              <p>
                Since not all projects are alike, the time needed to produce
                them also varies. A simple press release may be completed in two
                weeks; writing and designing a large viewbook or two-minute
                video may take several months from concept through delivery.
                Please allow three weeks to design and print posters and flyers.
                Even if active time producing your project is only two weeks,
                you may need to get the word out about your event several months
                in advance to allow guests adequate time to plan to attend.
              </p>
              <p>
                Please know that the MarCom Department has an extensive list of
                ongoing projects, so the more time you give us to assist you,
                the better we can meet your expectations and deadlines.
              </p>
              <p>
                If you are planning a large campaign or project you should
                include the MarCom Department in your initial planning meetings.
                Even one year ahead is not too early to contact MarCom to
                develop marketing materials and publicity plans for a major
                event or campaign.
              </p>
              <p>
                It limits our ability to help you when we are only given one or
                two months to assist with a large-scale project.
              </p>
              <h3 id='budget'>Budget Information</h3>
              <p>
                In most cases, there is no charge for MarCom’s writing,
                photography, and editing services, nor for content creation for
                Web and social media. Hard costs, such as printing, however,
                must be met by the initiating department’s budget. Video
                recordings of campus talks require a set fee to cover SWOP
                costs. Advertising placement costs including TV, radio, print,
                Web, and social media also require funds from the initiating
                department. A MarCom representative will discuss specifics with
                you after you submit your project request.
              </p>

              <h3 id='proof'>Proof the Job in a Timely Manner</h3>
              <p>
                After a proof has been received, please look it over as soon as
                possible. If, for some reason, you need to delay the job at this
                point, please notify your MarCom contact person. Mark any
                corrections on the proof, and send it back to MarCom as soon as
                possible. The publication will not be sent to print until a
                final sign off is given.
              </p>
              <p>
                See <Link to='glossary'>Common MarCom Terms</Link> for more
                information.
              </p>
              <h3 id='services'>Services</h3>
              <p>
                MarCom provides many services to help you complete your
                marketing and communication projects.
              </p>
              <dl>
                <dt>Advertising</dt>
                <dd>
                  We reserve ad space, write, edit, photograph, design, and
                  proof ads, and create website landing pages.
                </dd>
              </dl>
              <dl>
                <dt>News Release</dt>
                <dd>
                  We gather information, write, proof, make photo selection, and
                  submit to local, regional, or national media.
                </dd>
              </dl>
              <dl>
                <dt>Photography</dt>
                <dd>
                  We schedule student and/or professional photographer(s), make
                  photo corrections, archive, and print photographs.
                </dd>
              </dl>
              <dl>
                <dt>Print</dt>
                <dd>
                  We research, write copy, edit, do layout and design,
                  photograph or image creation, proof, and print.
                </dd>
              </dl>
              <dl>
                <dt>Radio</dt>
                <dd>
                  We write scripts, record voice talent, select music, edit, and
                  distribute to radio networks.
                </dd>
              </dl>
              <dl>
                <dt>Social Media</dt>
                <dd>
                  We write content, select photos or images, design, and create
                  website landing pages.
                </dd>
              </dl>
              <dl>
                <dt>Television</dt>
                <dd>
                  We write scripts, record television footage, record voiceover
                  talent, edit, and distribute to television networks and
                  websites.
                </dd>
              </dl>
              <dl>
                <dt>Video</dt>
                <dd>
                  We research, write scripts, conduct interviews, acquire video
                  footage, select music, record voiceover talent, edit, and
                  distribute through appropriate channels.
                </dd>
              </dl>
              <dl>
                <dt>Website Additions</dt>
                <dd>
                  We write, edit, make photo selection, and provide html coding.
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlanningGuide
