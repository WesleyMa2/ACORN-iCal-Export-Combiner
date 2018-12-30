/* eslint-disable require-jsdoc */
import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import TabView from './components/TabView'
import './styles/App.css'
import ScheduleUploader from './components/ScheduleUploader'
import UploadsTable from './components/UploadsTable'
import 'react-toastify/dist/ReactToastify.css'
import CustomToastContainer from './components/CustomToastContainer'
import TargetSelector from './components/TargetStudentSelector'

class App extends Component {
  constructor() {
    super()
    this.state = {
      targetStudent: null,
      schedules: []
    }
    this.addSchedule = this.addSchedule.bind(this)
    this.setTarget = this.setTarget.bind(this)
  }

  setTarget(event, student) {
    this.setState({ targetStudent: student })
    event.preventDefault()
  }

  addSchedule(event, schedule) {
    let updatedSchedules = this.state.schedules.slice()
    updatedSchedules.push(schedule)
    this.setState({ schedules: updatedSchedules })
    console.log('SCHEDULE ADDED: ID:[%d] Owner:[%s] File:[%s]', schedule.id, schedule.name, schedule.file)
    event.preventDefault()
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <TabView />
          </Col>
        </Row>
        <ScheduleUploader addSchedule={this.addSchedule} schedules={this.state.schedules} />
        <TargetSelector state={this.state} setTarget={this.setTarget} />
        <UploadsTable schedules={this.state.schedules} />
        <CustomToastContainer />
      </Container>
    )
  }
}

export default App
