/* eslint-disable require-jsdoc */
import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import TabView from './components/TabView'
import './styles/App.css'
import ScheduleUploader from './components/ScheduleUploader'
import UploadsTable from './components/UploadsTable'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomToastContainer from './components/CustomToastContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      schedules: []
    }
    this.addSchedule = this.addSchedule.bind(this)
  }

  addSchedule(event, schedule) {
    let updatedSchedules = this.state.schedules.slice()
    updatedSchedules.push(schedule)
    this.setState({ schedules: updatedSchedules })
    toast.success('Schedule Added!')
    console.log('SCHEDULE ADDED: ID:[%d] Owner:[%s] File:[%s]', schedule.id, schedule.name, schedule.file)
    event.preventDefault()
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
        <ScheduleUploader addSchedule={this.addSchedule} />
        <Row>
          {/* <Col>List of ics files</Col> */}
          <UploadsTable schedules={this.state.schedules}/>
        </Row>
        <CustomToastContainer />
      </Container>
      
    )
  }
}

export default App
