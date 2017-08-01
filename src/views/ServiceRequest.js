import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from '../components/MaterializeRaisedButton'

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
}

class ServiceRequest extends Component {
  render () {
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
            <DatePicker hintText='File Upload' />
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
