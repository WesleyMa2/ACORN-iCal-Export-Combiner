import React, { Component } from "react";
import "./styles/App.css";
import "./styles/bootstrap.min.css";
import { TabContent, TabPane, Container, Row, Col } from "reactstrap";
import classnames from "classnames";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div>Tabs (Table view or Calendar view)</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>Adding ics files</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>List of ics files</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
