/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import TabView from './components/TabView';
import './styles/App.css';
import ScheduleUploader from './components/ScheduleUploader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      schedules: [],
    };
    this.addSchedule = this.addSchedule.bind(this);
  }

  addSchedule(event, schedule) {
    const updatedSchedules = this.state.schedules.slice();
    updatedSchedules.push(schedule);
    this.setState({ICSFiles: updatedSchedules});
    console.log('Schedule Added: ' + schedule.id, schedule.name);
    console.log('Num Schedules: ' + this.state.schedules.length)
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div>
              <TabView />
            </div>
          </Col>
        </Row>
        <ScheduleUploader addSchedule={(event, schedule) => this.addSchedule(event, schedule)}/>
        <Row>
          <Col>List of ics files</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
