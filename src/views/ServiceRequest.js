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

const PORT = process.env.UPLOADS_PORT || 9000
const HOST = process.env.UPLOADS_HOST || window.location.host.split(':')[0]
const UPLOAD_URL = `http://${HOST}:${PORT}/uploads`

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  },
  button: {
    margin: 12
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
}

// https://github.com/Dogfalo/materialize/blob/master/js/forms.js#L192
class ServiceRequest extends Component {
  constructor (props) {
    super(props)
    this.singleLineFields = ['Name', 'Email', 'Phone', 'Department']
    this.multiLineFields = [
      'Project Description',
      'Project Goal',
      'Project Budget',
      'Key Messages',
      'Primary Target Audience',
      'Secondary Target Audience',
      'Project Contact (if other than yourself)',
      'Comments'
    ]
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
    Object.assign(this.state.form, stringProps, checkboxProps)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  formatLabelToProperty = label =>
    label.split(' (')[0].toLowerCase().split(' ').join('-')

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
    const SingleLineField = (label, index) =>
      <div className='col s12 m6' key={index}>
        <TextField
          floatingLabelText={label}
          name={this.formatLabelToProperty(label)}
          value={this.state.form[this.formatLabelToProperty(label)]}
          onChange={this.handleInputChange}
          fullWidth
        />
      </div>
    const MultiLineField = (label, index) =>
      <div className='col s12 m6' key={index}>
        <TextField
          floatingLabelText={label}
          name={this.formatLabelToProperty(label)}
          value={this.state.form[this.formatLabelToProperty(label)]}
          onChange={this.handleInputChange}
          multiLine
          rows={2}
          fullWidth
        />
      </div>
    const CheckboxField = (label, index) =>
      <Checkbox
        label={label}
        name={this.formatLabelToProperty(label)}
        checked={this.state.form[this.formatLabelToProperty(label)]}
        key={index}
        onCheck={this.handleInputChange}
        style={styles.checkbox}
      />

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
          {this.singleLineFields.map((label, index) =>
            SingleLineField(label, index)
          )}
          {this.multiLineFields.map((label, index) =>
            MultiLineField(label, index)
          )}
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
                <input
                  value={fileValue}
                  className='file-path validate'
                  type='text'
                  readOnly
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
              id='submit-button'
              onClick={this.handleFormData}
              primary
            />
            <div id='planning-guide-checkbox'>
              <Checkbox
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
