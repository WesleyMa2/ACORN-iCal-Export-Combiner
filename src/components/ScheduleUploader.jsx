/* eslint-disable require-jsdoc */
import React from 'react'
import { Row, Col, FormGroup, Input, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import Schedule from './Schedule.jsx'
import { toast } from 'react-toastify'

/**
 * A react component that contains functionality to upload a ics file, with a name
 */
class ScheduleUploader extends React.Component {
  constructor() {
    super()
    this.state = {
      nextId: 0,
      student: '',
      ICSfile: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this._checkInputs = this._checkInputs.bind(this)
  }

  static get propTypes() {
    return {
      schedules: PropTypes.array,
      addSchedule: PropTypes.func
    }
  }

  handleChange(event) {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
    event.preventDefault()
  }

  _checkInputs() {
    return new Promise((resolve, reject) => {
      let pass = true
      if (this.state.ICSfile === null) {
        toast.error('Please select a .ics file')
        pass = false
      } else if (!this.state.ICSfile.trim().substring(this.state.ICSfile.lastIndexOf('.') === '.ics')){
        toast.error('Not an .ics file')
        pass = false
      }
      if (this.state.student === '') {
        toast.error('"Name" needs an input')
        pass = false
      } else {
        for (var i = 0; i < this.props.schedules.length; i++) {
          if (this.state.student === this.props.schedules[i].name) {
            pass = false
            toast.error('This person has been added (File ID: ' + i + ')')
            break
          }
        }
      }
      resolve(pass)
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this._checkInputs().then(res => {
      if (res === true) {
        let newSchedule = new Schedule(this.state.nextId, this.state.student, this.state.ICSfile)
        this.props.addSchedule(event, newSchedule)
        this.setState({ nextId: this.state.nextId + 1 })
        toast.success('Schedule Added!')
      }
    })
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <Row>
          <Col md={{ size: 2, offset: 1 }}>
            <h5>Step 1: </h5>
          </Col>
          <Col md="2">
            <FormGroup>
              <Input type="text" name="student" id="scheduleOwner" placeholder="Name" onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Input type="file" name="ICSfile" id="icsUpload" onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col md="2">
            <Button outline color="primary" type="submit">
              Add schedule
            </Button>
          </Col>
        </Row>
      </form>
    )
  }
}
export default ScheduleUploader
