/* eslint-disable require-jsdoc */
import React from 'react'
import {Row, Col, FormGroup, Input, Button} from 'reactstrap';
import PropTypes from 'prop-types';
import Schedule from './Schedule.js';

class ScheduleUploader extends React.Component {
  constructor() {
    super();
    this.state = {
      nextId: 0,
      student: null,
      ICSfile: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static get propTypes() {
    return{
        addSchedule: PropTypes.func,
      }
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
    console.log('New: ' + this.state[name]);
  }

  handleSubmit(event) {
    console.log(this.addSchedule);
    this.props.addSchedule(event, new Schedule(this.state.id, this.student, this.ICSfile));
    const newNextId = this.state.nextId + 1;
    this.setState({nextId: newNextId});
  }

  render() {
    return (
      <Row>
        <Col md={{size: 2, offset: 2}}>
          <FormGroup>
            <Input type="text" name="student" id="scheduleOwner" placeholder="Name" onChange={this.handleChange}/>
          </FormGroup>
        </Col>
        <Col md="5">
          <FormGroup>
            <Input type="file" name="ICSfile" id="icsUpload" onChange={this.handleChange}/>
          </FormGroup>
        </Col>
        <Col md="1">
          <Button color="primary" onClick={this.handleSubmit}>Add schedule</Button>
        </Col>
      </Row>
    );
  }
}
export default ScheduleUploader;
