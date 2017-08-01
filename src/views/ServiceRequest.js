import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from '../MaterializeRaisedButton'
import '../styles/inputFile.css'

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
    this.state = {
      fileInput: []
    }
  }
  handleFilePath = () => {
    let file = document.getElementById('upload').files
    if (file.length === 0) {
      this.setState({
        fileInput: null
      })
    } else {
      this.setState({
        fileInput: file[0].name
      })
    }
  }

  render () {
    let fileValue = this.state.fileInput || 'Select a file to upload'
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12 flow-text'>
            <h2>Please use this form to request services.</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m6'>
            <TextField floatingLabelText='Floating Label Text' fullWidth />
          </div>
          <div className='col s12 m6'>
            <TextField floatingLabelText='Floating Label Text' fullWidth />
          </div>
          <div className='col s12 m6'>
            <TextField floatingLabelText='Floating Label Text' fullWidth />
          </div>
          <div className='col s12 m6'>
            <TextField floatingLabelText='Floating Label Text' fullWidth />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='MultiLine and FloatingLabel'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='MultiLine and FloatingLabel'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='MultiLine and FloatingLabel'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='MultiLine and FloatingLabel'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='MultiLine and FloatingLabel'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='MultiLine and FloatingLabel'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='MultiLine and FloatingLabel'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='MultiLine and FloatingLabel'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <DatePicker hintText='Portrait Dialog' />
          </div>
          <div className='col s12 m6'>
            <div className='file-field input-field'>
              <div className='btn'>
                <span>Upload File</span>
                <input
                  id='upload'
                  type='file'
                  multiple
                  onChange={this.handleFilePath}
                />
              </div>
              <div className='file-path-wrapper'>
                <input
                  value={fileValue}
                  className='file-path validate'
                  type='text'
                />
              </div>
            </div>
            {/* This is how Material-UI display an upload button (uncomment it)
                <RaisedButton
                  label="Choose an Image"
                  labelPosition="before"
                  style={styles.button}
                  containerElement="label"
                >
                  <input type="file" style={styles.exampleImageInput} />
                </RaisedButton>
           */}
          </div>
          <div className='col s12 m6'>
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
          </div>
          <div className='col s12 m6'>
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
          </div>
          <div className='col s12'>
            <RaisedButton label='Submit' primary />
            <Checkbox label='Simple' style={styles.checkbox} />
          </div>
        </div>
      </div>
    )
  }
}

export default ServiceRequest
