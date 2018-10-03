import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  CustomInput
} from "reactstrap";
import TabView from "./components/TabView";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ICSFiles: []
    };
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
          <Col md={{ size: 2, offset: 2 }}>
            <FormGroup>
              <Input
                type="text"
                name="owner"
                id="scheduleOwner"
                placeholder="Name"
              />
            </FormGroup>
          </Col>
          <Col md="5">
            <FormGroup>
              <Input type="file" name="file" id="icsUpload" />
            </FormGroup>
          </Col>
          <Col md="1">
            <Button color="primary">Add schedule</Button>
          </Col>
        </Row>
        <Row>
          <Col>List of ics files</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
