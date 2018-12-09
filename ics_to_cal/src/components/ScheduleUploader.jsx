/* eslint-disable require-jsdoc */
import React from 'react'
import { Row, Col, FormGroup, Input, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import Schedule from './Schedule.jsx'

class ScheduleUploader extends React.Component {
  constructor() {
    super()
    this.state = {
      nextId: 0,
      student: null,
      ICSfile: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static get propTypes() {
    return {
      addSchedule: PropTypes.func
    }
  }

  handleChange(event) {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
    console.log('New: ' + this.state[name])
  }

  handleSubmit(event) {
    let newSchedule = new Schedule(this.state.nextId, this.state.student, this.state.ICSfile)
    this.props.addSchedule(event, newSchedule)
    let newNextId = this.state.nextId + 1
    this.setState({ nextId: newNextId })
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <Row>
          <Col md={{ size: 2, offset: 2 }}>
            <FormGroup>
              <Input type="text" name="student" id="scheduleOwner" placeholder="Name" onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col md="5">
            <FormGroup>
              <Input type="file" name="ICSfile" id="icsUpload" onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col md="1">
            <Button color="primary" type="submit">
              Add schedule
            </Button>
          </Col>
        </Row>
      </form>
    )
  }
}
export default ScheduleUploader
