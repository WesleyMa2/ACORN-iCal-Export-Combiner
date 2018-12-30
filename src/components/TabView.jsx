/* eslint-disable require-jsdoc */
import React from 'react'
import classnames from 'classnames'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'

/**
 * A react component to switch between viewing schedule events in calendar or table view
 */
class TabView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'viewCalendar'
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render() {
    return (
      <Row>
        <Col>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === 'viewCalendar' })}
                onClick={() => {
                  this.toggle('viewCalendar')
                }}
              >
                Calendar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === 'viewTable' })}
                onClick={() => {
                  this.toggle('viewTable')
                }}
              >
                Events in table
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="viewCalendar">
              <Row>
                <Col>
                  <h4>Big ass calendar</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="viewTable">
              <Row>
                <Col>
                  <h4>Big ass table</h4>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    )
  }
}

export default TabView
