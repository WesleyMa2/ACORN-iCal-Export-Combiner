import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import TabView from "./components/TabView";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
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
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            Adding ics files
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            List of ics files
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
