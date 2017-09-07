import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from '../components/MaterializeRaisedButton'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { Helmet } from 'react-helmet'
import '../styles/responsive-text.css'

const PORT = process.env.UPLOADS_PORT || 9000
const HOST = process.env.UPLOADS_HOST || window.location.host.split(':')[0]
const UPLOAD_URL = `http://${HOST}:${PORT}/story-form`

class Story extends Component {
  constructor (props) {
    super(props)
    this.singleLineFields = ['Name', 'Email']
    this.multiLineFields = ['Project Description']

    const stringProps = [
      ...this.singleLineFields,
      ...this.multiLineFields
    ].reduce(
      (acc, label) => ({
        [this.formatLabelToProperty(label)]: '',
        ...acc
      }),
      {}
    )

    this.state = {
      form: {},
      loadingDialogOpen: false,
      resultDialogOpen: false,
      resultDialogText: null,
      resultDialogSuccess: true
    }
    Object.assign(this.state.form, stringProps)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  formatLabelToProperty = label =>
    label
      .split(' (')[0]
      .toLowerCase()
      .split(' ')
      .join('-')

  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    const form = Object.assign({}, this.state.form)
    form[name] = value

    this.setState({ form })
  }

  handleFormData = async () => {
    const data = new FormData()
    for (const [key, val] of Object.entries(this.state.form)) {
      data.append(key, val)
    }

    this.setState({ loadingDialogOpen: true })

    try {
      const response = await fetch(UPLOAD_URL, {
        method: 'post',
        body: data
      }).then(res => res.json())

      if (!response.success) throw response.status

      this.setState({
        resultDialogOpen: true,
        resultDialogSuccess: true,
        resultDialogText: 'Your story suggestion was sent successfully.'
      })
    } catch (err) {
      const msg =
        typeof err === 'string'
          ? err
          : 'An error occurred while sending your story.'
      this.setState({
        resultDialogOpen: true,
        resultDialogSuccess: false,
        resultDialogText: msg
      })
    }

    this.setState({ loadingDialogOpen: false })
  }

  handleDialogClose = () => {
    this.setState({ resultDialogOpen: false })
  }

  render () {
    const SingleLineField = (label, index) => (
      <div className='col s12 m6' key={index}>
        <TextField
          floatingLabelText={label}
          name={this.formatLabelToProperty(label)}
          value={this.state.form[this.formatLabelToProperty(label)]}
          onChange={this.handleInputChange}
          fullWidth
          id={`${this.formatLabelToProperty(label)}-field`}
        />
      </div>
    )
    const MultiLineField = (label, index) => (
      <div className='col s12' key={index}>
        <TextField
          floatingLabelText={label}
          name={this.formatLabelToProperty(label)}
          value={this.state.form[this.formatLabelToProperty(label)]}
          onChange={this.handleInputChange}
          multiLine
          rows={2}
          fullWidth
          id={`${this.formatLabelToProperty(label)}-field`}
        />
      </div>
    )

    return (
      <div className='container'>
        <Helmet>
          <title>Story | Resource Center</title>
        </Helmet>
        <div className='row flow-text'>
          <div className='col s12'>
            <h2 style={{ marginBottom: 0 }}>Suggest a Story</h2>
          </div>
          <div className='col s12'>
            <p>
              The Marketing and Communications Department shares the
              accomplishments of Franciscan University faculty, students, staff,
              and alumni with many different audiences over many different
              platforms. But we’re always looking for more stories—especially
              yours.
            </p>
            <p>
              Tell us about the interesting projects, research, classroom
              experiences, extracurricular activities, volunteer work, or other
              endeavors you’re undertaking. Or share tips about what other
              Franciscan faculty, students, staff, and alumni are doing. Please
              fill out the story idea form below, and help us keep a finger on
              the pulse of what’s happening in the classroom, on campus, and in
              our community.
            </p>
            <p>
              We will look into each tip and determine where it might fit—on the
              website, in admissions materials, as a media story, social media
              post, and so on.
            </p>
            <p>
              Thank you for your help identifying the great work happening in
              the Franciscan University family.
            </p>
          </div>
        </div>
        <div className='row'>
          {this.singleLineFields.map((label, index) =>
            SingleLineField(label, index)
          )}
          {this.multiLineFields.map((label, index) =>
            MultiLineField(label, index)
          )}
          <div className='col s12'>
            <RaisedButton
              label='Submit'
              onClick={this.handleFormData}
              primary
            />
          </div>
        </div>
        <Dialog title='Loading...' modal open={this.state.loadingDialogOpen}>
          Sending story
        </Dialog>
        <Dialog
          title={this.state.resultDialogSuccess ? 'Done' : 'Error'}
          modal={false}
          open={this.state.resultDialogOpen}
          onRequestClose={this.handleDialogClose}
          actions={[
            <FlatButton
              label='Ok'
              onTouchTap={this.handleDialogClose}
              keyboardFocused
            />
          ]}
        >
          {this.state.resultDialogText}
        </Dialog>
      </div>
    )
  }
}

export default Story
