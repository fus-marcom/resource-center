// eslint-disable-next-line
/* global notifyFormError enableSubmit */
import React, { Component } from 'react'
import DatePicker from 'material-ui/DatePicker'
import IconCheckbox from '../components/iconCheckbox'
import RaisedButton from '../components/MaterializeRaisedButton'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import '../styles/inputFile.css'
import '../styles/serviceRequest.css'
import infoLogo from '../img/info.svg'
import { logPageView } from '../utils/analytics'

import Formsy from 'formsy-react'
import { FormsyText, FormsyCheckbox } from 'formsy-material-ui/lib'
import {
  singleLineFields,
  multiLineFields,
  leftCheckboxes,
  rightCheckboxes
} from '../data/serviceRequestFields'

const fileExtensions =
  'application/vnd.rar, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, audio/mp4, audio/mpeg, text/plain, application/zip, video/quicktime, video/avi, audio/wav, image/jpeg, application/octet-stream, image/png'

const PORT = process.env.SERVER_PORT || 9000
const HOST = process.env.UPLOADS_HOST || window.location.host.split(':')[0]
const UPLOAD_URL =
  process.env.NODE_ENV === 'production'
    ? `https://${HOST}/uploads`
    : `http://${HOST}:${PORT}/uploads`

const styles = {
  checkbox: {
    marginBottom: 16,
    width: 'auto',
    display: 'flex'
  }
}

// https://github.com/Dogfalo/materialize/blob/master/js/forms.js#L192
class ServiceRequest extends Component {
  constructor (props) {
    super(props)
    const checkboxProps = [...leftCheckboxes, ...rightCheckboxes].reduce(
      (acc, label, index) => ({
        [this.formatLabelToProperty(label.name)]: false,
        ...acc
      }),
      {}
    )
    this.state = {
      form: {
        fileInput: null,
        fileValid: true
      },
      loadingDialogOpen: false,
      resultDialogOpen: false,
      resultDialogText: null,
      resultDialogSuccess: true,
      canSubmit: false
    }
    Object.assign(this.state.form, checkboxProps)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount = () => {
    logPageView()
  }

  enableSubmit = e => {
    if (e.target.checked) {
      this.setState({
        canSubmit: true
      })
    } else {
      this.setState({
        canSubmit: false
      })
    }
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
    const formState = this.state.form
    formState.fileValid = true
    this.setState({ formState })
    if (files.length > 0) {
      fileNames = files.map(f => f.name).join(', ')
      files.map(
        f =>
          fileExtensions.match(f.type) === null
            ? (formState.fileValid = false)
            : ''
      )
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

    return (
      <div className='container'>
        <Helmet>
          <title>Service Request | Resource Center</title>
          <script src='https://cdn.polyfill.io/v2/polyfill.min.js?features=def‌​ault,es6,Object.entries,Array.from,DocumentFragment.prototype.append,Element.prototype.append,Document&flags=gated' />
        </Helmet>
        <div className='row'>
          <div className='col s12 flow-text'>
            <h2 style={{ marginBottom: 0 }}>
              Please use this form to request services.
            </h2>
            <span style={{ fontSize: '16px' }}>
              * This form is not compatible with older browsers. Please use
              current versions of Chrome, Firefox, Edge or Safari. Internet
              Explorer is not supported.
            </span>
          </div>
        </div>
        <div className='row'>
          <Formsy.Form
            onValidSubmit={this.handleFormData}
            onInvalidSubmit={this.notifyFormError}
          >
            {singleLineFields.map((field, index) => (
              <div className='col s12 m6' key={index}>
                <FormsyText
                  floatingLabelText={
                    field.required ? field.name + ' *' : field.name
                  }
                  name={field.name.toLowerCase()}
                  value={this.state.form[field.name]}
                  onChange={this.handleInputChange}
                  fullWidth
                  id={`${field.name.toLowerCase()}-field`}
                  required={field.required}
                  validations={field.type}
                  validationError={field.error}
                  className='formsy-input'
                />
              </div>
            ))}
            {multiLineFields.map((field, index) => (
              <div className='col s12 m6' key={index}>
                <FormsyText
                  floatingLabelText={
                    field.required ? field.name + ' *' : field.name
                  }
                  name={field.name.toLowerCase()}
                  value={this.state.form[field.name]}
                  onChange={this.handleInputChange}
                  fullWidth
                  id={`${field.name.toLowerCase()}-field`}
                  multiLine
                  required={field.required}
                  validations={field.type}
                  validationError={field.error}
                  className='formsy-multiline'
                />
              </div>
            ))}
            <div
              className='col s12 m6'
              style={{ marginTop: '16px', marginBottom: '16px' }}
            >
              <DatePicker hintText='Desired Completion Date' />
            </div>
            <div
              className='col s12 m6 file-upload'
              style={{ marginBottom: '16px' }}
            >
              <label htmlFor='upload' className='file-field input-field'>
                <div className='btn'>
                  <span>Upload Files</span>
                  <input
                    id='upload'
                    name='upload[]'
                    type='file'
                    multiple
                    accept={fileExtensions}
                    onChange={this.handleFilePath}
                    ref={input => {
                      this.uploadInput = input
                    }}
                    className='formsy-input'
                  />
                </div>
                <div className='file-path-wrapper'>
                  <FormsyText
                    className='file-path validate formsy-multiline'
                    value={fileValue}
                    multiLine
                    rows={1}
                    fullWidth
                    readOnly
                    name='upload-text-field'
                    id='file-path-field'
                    validations={{
                      myCustomIsFiveValidation: () => this.state.form.fileValid
                    }}
                    validationError='Error'
                  />
                </div>
              </label>
            </div>
            <div className='col s12 m6 checkbox-col'>
              {leftCheckboxes.map((label, index) => (
                <div key={index}>
                  <IconCheckbox
                    label={label.name}
                    name={label.name.toLowerCase()}
                    isChecked={this.state.form[label.name.toLowerCase()]}
                    key={index + label.name}
                    handleCheck={event => this.handleInputChange(event)}
                    style={styles.checkbox}
                    inputStyle={styles.inputStyle}
                    src={infoLogo}
                    alt='Info Button'
                    icon={label.icon ? label.icon : false}
                    dialogText={label.dialogText && label.dialogText}
                    dialogTitle={label.dialogTitle && label.dialogTitle}
                    conditionalFields={label.conditionalFields}
                  />
                  {label.conditionalFields &&
                    this.state.form[label.name.toLowerCase()] &&
                    label.conditionalFields.map(field => (
                      <FormsyText
                        key={field.name}
                        floatingLabelText={
                          field.required ? field.name + ' *' : field.name
                        }
                        name={field.name.toLowerCase()}
                        value={this.state.form[field.name]}
                        onChange={this.handleInputChange}
                        fullWidth
                        id={`${field.name.toLowerCase()}-field`}
                        required={field.required}
                        validations={field.type}
                        validationError={field.error}
                        className='formsy-input'
                        style={{ margin: '0 0 8px 0' }}
                      />
                    ))}
                </div>
              ))}
            </div>
            <div className='col s12 m6 checkbox-col'>
              {rightCheckboxes.map((label, index) => (
                <div key={index}>
                  <IconCheckbox
                    label={label.name}
                    name={label.name.toLowerCase()}
                    isChecked={this.state.form[label.name.toLowerCase()]}
                    key={index + label.name}
                    handleCheck={event => this.handleInputChange(event)}
                    style={styles.checkbox}
                    inputStyle={styles.inputStyle}
                    src={infoLogo}
                    alt='Info Button'
                    icon={label.icon ? label.icon : false}
                    dialogText={label.dialogText && label.dialogText}
                    dialogTitle={label.dialogTitle && label.dialogTitle}
                    conditionalFields={label.conditionalFields}
                  />
                  {label.conditionalFields &&
                    this.state.form[label.name.toLowerCase()] &&
                    label.conditionalFields.map(field => (
                      <FormsyText
                        key={field.name}
                        floatingLabelText={
                          field.required ? field.name + ' *' : field.name
                        }
                        name={field.name.toLowerCase()}
                        value={this.state.form[field.name]}
                        onChange={this.handleInputChange}
                        fullWidth
                        id={`${field.name.toLowerCase()}-field`}
                        required={field.required}
                        validations={field.type}
                        validationError={field.error}
                        className='formsy-input'
                        style={{ margin: '0 0 8px 0' }}
                      />
                    ))}
                </div>
              ))}
            </div>
            <div className='col s12' style={{ marginTop: '16px' }}>
              <RaisedButton
                label='Submit'
                type='submit'
                id='submit-button'
                buttonStyle={{
                  cursor: this.state.canSubmit ? 'pointer' : 'not-allowed'
                }}
                primary
                disabled={!this.state.canSubmit}
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
                        rel='noopener noreferrer'
                        style={{ fontWeight: 500 }}
                      >
                        Planning Guide
                      </Link>{' '}
                      *
                    </span>
                  }
                  style={styles.checkbox}
                  inputStyle={{ width: '35px' }}
                  onChange={this.enableSubmit}
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
