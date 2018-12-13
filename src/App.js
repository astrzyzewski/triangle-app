import React, { Component } from 'react';
import { Container, Row, Col, Button, Input } from 'reactstrap';

//TODO: basic form input handling
//TODO: input data-type validation
//TODO: input correctness validation
//TODO: calculate angles
//TODO: calculate triangle type
//TODO: output results
//TODO: draw triangle?
//TODO: error-handling
//TODO: unit tests
class App extends Component {
  render() {
    return (
        <Container>
            <Row>
                <h3>Triangle App</h3>
            </Row>
            <form>
                <Row>
                    <Col md="2">Side A: </Col>
                    <Col md="4"><Input type="text" name="side_a" id="s_a" placeholder="Input length of Side A in cm"/></Col>
                </Row>
                <Row>
                    <Col md="2">Side B: </Col>
                    <Col md="4"><Input type="text" name="side_b" id="s_b" placeholder="Input length of Side B in cm"/></Col>
                </Row>
                <Row>
                    <Col md="2">Side C: </Col>
                    <Col md="4"><Input type="text" name="side_c" id="s_c" placeholder="Input length of Side C in cm"/></Col>
                </Row>
                <Row>
                    <Button>Submit</Button>
                </Row>
            </form>
        </Container>
    );
  }
}

export default App;
