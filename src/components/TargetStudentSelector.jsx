/* eslint-disable require-jsdoc */
import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import PropTypes from 'prop-types'

/**
 * A react compenent that contains fuctionality to select target student
 */
class TargetSelector extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }
  static get propTypes() {
    return {
      state: PropTypes.object,
      setTarget: PropTypes.func
    }
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render() {
    var menuItems = this.props.state.schedules.map(schedule => {
      return (
        <DropdownItem key={schedule.id} onClick={event => this.props.setTarget(event, schedule.name)}>
          {schedule.name}
        </DropdownItem>
      )
    })

    var selectedStudent = 'Select Student'
    if (this.props.state.targetStudent != null) {
      selectedStudent = this.props.state.targetStudent
    }

    return (
      <Row>
        <Col md={{ size: 2, offset: 1 }}>
          <h5>Step 2: </h5>
        </Col>
        <Col md="2">
          <b>Primary Student: </b>
        </Col>
        <Col md="3">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>{selectedStudent}</DropdownToggle>
            <DropdownMenu>{menuItems}</DropdownMenu>
          </Dropdown>
        </Col>
        <Col md={{ size: 3, offset: 1 }}>
          <Button color="primary" type="submit">
            Combine Schedules
          </Button>
        </Col>
      </Row>
    )
  }
}
export default TargetSelector
