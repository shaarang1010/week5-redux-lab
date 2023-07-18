import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { TeamCard } from "../../components/card/TeamCard";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      hometeam: null,
      awayTeam: null,
      homeTeamScore: 0,
      awayTeamScore: 0,
    };
  }
  render() {
    return (
      <Row className="justify-content-md-center">
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Home Team</Form.Label>
              <Form.Control
                size="md"
                type="text"
                placeholder="Enter Home Team name"
              />
            </Form.Group>
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Away Team</Form.Label>
              <Form.Control
                size="md"
                type="text"
                placeholder="Enter Away team name"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <TeamCard
              title="Melbourne Demons"
              text={"Score:" + this.state.homeTeamScore}
            ></TeamCard>
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <TeamCard
              title="Melbourne Demons"
              text={"Score:" + this.state.homeTeamScore}
            ></TeamCard>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default Homepage;
