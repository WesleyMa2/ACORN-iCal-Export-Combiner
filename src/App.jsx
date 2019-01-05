/* eslint-disable require-jsdoc */
import axios from 'axios'
import FormData from 'form-data'
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
    this.sendSchedules = this.sendSchedules.bind(this)
  }

  setTarget(event, student) {
    event.preventDefault()
    this.setState({ targetStudent: student })
  }

  addSchedule(event, schedule) {
    // event.preventDefault()
    let updatedSchedules = this.state.schedules.slice()
    updatedSchedules.push(schedule)
    this.setState({ schedules: updatedSchedules })
    console.log('SCHEDULE ADDED: ID:[%d] Owner:[%s] File:[%s]', schedule.id, schedule.name, schedule.file.name)
  }

  sendSchedules(event) {
    event.preventDefault()
    // Generate form data with uploaded 
    //  ------Form-----------
    //  target: xxx
    //  icsFile: File()
    //    ...
    //  owners: [xxx, xxx, ...]
    //  ---------------------
    var form = new FormData()
    var owners = []
    form.append('target', this.state.targetStudent)
    for (var i = 0; i < this.state.schedules.length; i++) {
      form.append('icsFile', this.state.schedules[i].file)
      owners.push(this.state.schedules[0].name)
    }
    form.append('owners', owners)
    axios
      .post('/getSchedule', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(function(response) {
        console.log('SUCCESS: ', response)
      })
      .catch(function(error) {
        console.log('ERROR: ', error)
      })
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
        <TargetSelector state={this.state} setTarget={this.setTarget} sendSchedules={this.sendSchedules} />
        <UploadsTable schedules={this.state.schedules} />
        <CustomToastContainer />
      </Container>
    )
  }
}

export default App
