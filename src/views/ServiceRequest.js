// eslint-disable-next-line
/* global notifyFormError */
import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from '../components/MaterializeRaisedButton'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import '../styles/inputFile.css'
import '../styles/serviceRequest.css'

import Formsy from 'formsy-react'
import { FormsyText, FormsyCheckbox } from 'formsy-material-ui/lib'

const PORT = process.env.UPLOADS_PORT || 9000
const HOST = process.env.UPLOADS_HOST || window.location.host.split(':')[0]
const UPLOAD_URL = `http://${HOST}:${PORT}/uploads`

const styles = {
  checkbox: {
    marginBottom: 16
  }
}

const singleLineFields = [
  { name: 'Name', required: true, type: 'isAlpha', error: 'Not a valid name' },
  {
    name: 'Email',
    required: true,
    type: 'isEmail',
    error: 'Not a valid email'
  },
  {
    name: 'Phone',
    required: true,
    type: 'isNumeric',
    error: 'Not a valid phone number'
  },
  { name: 'Department', required: false }
]
const multiLineFields = [
  {
    name: 'Project Description',
    required: true,
    type: 'isAlphanumeric',
    error: 'Not a valid project description'
  },
  {
    name: 'Project Goal',
    required: true,
    type: 'isAlphanumeric',
    error: 'Not a valid goal'
  },
  {
    name: 'Project Budget',
    required: true,
    type: 'isNumeric',
    error: 'Not a valid number'
  },
  {
    name: 'Key Messages',
    required: true,
    type: 'isAlphanumeric',
    error: 'Not a valid key message'
  },
  {
    name: 'Primary Target Audience',
    required: true,
    type: 'isAlphanumeric',
    error: 'Not a valid target'
  },
  {
    name: 'Secondary Target Audience',
    required: true,
    type: 'isAlphanumeric',
    error: 'Not a valid target'
  },
  {
    name: 'Project Contact (if other than yourself)',
    required: false,
    type: null,
    error: null
  },
  {
    name: 'Comments',
    required: false,
    type: 'isAlphanumeric',
    error: 'Not a valid comment'
  }
]

// https://github.com/Dogfalo/materialize/blob/master/js/forms.js#L192
class ServiceRequest extends Component {
  constructor (props) {
    super(props)
    this.leftCheckboxes = [
      'Simple1',
      'Simple2',
      'Simple3',
      'Simple4',
      'Simple5',
      'Simple6'
    ]
    this.rightCheckboxes = [
      'Simple7',
      'Simple8',
      'Simple9',
      'Simple10',
      'Simple11',
      'Simple12'
    ]
    const checkboxProps = [
      ...this.leftCheckboxes,
      ...this.rightCheckboxes
    ].reduce(
      (acc, label) => ({
        [this.formatLabelToProperty(label)]: false,
        ...acc
      }),
      {}
    )
    this.state = {
      form: {
        fileInput: null
      },
      loadingDialogOpen: false,
      resultDialogOpen: false,
      resultDialogText: null,
      resultDialogSuccess: true
    }
    Object.assign(this.state.form, checkboxProps)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  notifyFormError = () => {
    this.setState({
      resultDialogOpen: true,
      resultDialogSuccess: false,
      resultDialogText: 'Something went wrong. Check for errors and try again.'
    })
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

  handleFilePath = event => {
    const target = event.target
    // Array.from converts array-like to array (so that map works)
    const files = Array.from(target.files)
    let fileNames = null
    if (files.length > 0) {
      fileNames = files.map(f => f.name).join(', ')
    }

    const form = Object.assign({}, this.state.form)
    form.fileInput = fileNames
    this.setState({ form })
  }

  handleFormData = async () => {
    const data = new FormData()
    for (const [key, val] of Object.entries(this.state.form)) {
      data.append(key, val)
    }

    for (const file of this.uploadInput.files) data.append('file', file)

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
        resultDialogText: 'Your service request was sent successfully.'
      })
    } catch (err) {
      const msg =
        typeof err === 'string'
          ? err
          : 'An error occurred while sending the request.'
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
    const fileValue = this.state.form.fileInput || 'Select a file to upload'
    const CheckboxField = (label, index) => (
      <Checkbox
        label={label}
        name={this.formatLabelToProperty(label)}
        checked={this.state.form[this.formatLabelToProperty(label)]}
        key={index}
        onCheck={this.handleInputChange}
        style={styles.checkbox}
      />
    )

    return (
      <div className='container'>
        <Helmet>
          <title>Service Request | Resource Center</title>
        </Helmet>
        <div className='row'>
          <div className='col s12 flow-text'>
            <h2>Please use this form to request services.</h2>
          </div>
        </div>
        <div className='row'>
          <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.handleFormData}
            onInvalidSubmit={this.notifyFormError}
          >
            {singleLineFields.map((field, index) => (
              <div className='col s12 m6' key={index}>
                <FormsyText
                  floatingLabelText={field.name}
                  name={field.name.toLowerCase()}
                  value={this.state.form[field.name]}
                  onChange={this.handleInputChange}
                  fullWidth
                  id={`${field.name.toLowerCase()}-field`}
                  required={field.required}
                  validations={field.type}
                  validationError={field.error}
                />
              </div>
            ))}
            {multiLineFields.map((field, index) => (
              <div className='col s12 m6' key={index}>
                <FormsyText
                  floatingLabelText={field.name}
                  name={field.name.toLowerCase()}
                  value={this.state.form[field.name]}
                  onChange={this.handleInputChange}
                  fullWidth
                  id={`${field.name.toLowerCase()}-field`}
                  required={field.required}
                  validations={field.type}
                  validationError={field.error}
                />
              </div>
            ))}
            <div className='col s12 m6'>
              <DatePicker hintText='Desired Completion Date' />
            </div>
            <div className='col s12 m6 file-upload'>
              <div className='file-field input-field'>
                <div className='btn'>
                  <span>Upload Files</span>
                  <input
                    id='upload'
                    name='upload[]'
                    type='file'
                    multiple
                    onChange={this.handleFilePath}
                    ref={input => {
                      this.uploadInput = input
                    }}
                  />
                </div>
                <div className='file-path-wrapper'>
                  <TextField
                    className='file-path validate'
                    value={fileValue}
                    multiLine
                    rows={1}
                    fullWidth
                    readOnly
                    id='file-path-field'
                  />
                </div>
              </div>
            </div>
            <div className='col s12 m6'>
              {this.leftCheckboxes.map((label, index) =>
                CheckboxField(label, index)
              )}
            </div>
            <div className='col s12 m6'>
              {this.rightCheckboxes.map((label, index) =>
                CheckboxField(label, index)
              )}
            </div>
            <div className='col s12'>
              <RaisedButton
                label='Submit'
                type='submit'
                id='submit-button'
                primary
              />
              <div id='planning-guide-checkbox'>
                <FormsyCheckbox
                  name='planning-guide-check'
                  required
                  label={
                    <span>
                      I have read the{' '}
                      <Link
                        to='/planning-guide'
                        target='_blank'
                        style={{ fontWeight: 500 }}
                      >
                        Planning Guide
                      </Link>
                    </span>
                  }
                  style={styles.checkbox}
                  inputStyle={{ width: '35px' }}
                />
              </div>
            </div>
          </Formsy.Form>
        </div>
        <Dialog title='Loading...' modal open={this.state.loadingDialogOpen}>
          Sending service request
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

export default ServiceRequest
