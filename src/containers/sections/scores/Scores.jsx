import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { ScoreTable } from "../../../components/table/ScoreTable";
import { connect } from "react-redux";
import {
  addAwayTeamBehind,
  addAwayTeamGoal,
  addHomeTeamBehind,
  addHomeTeamGoal,
} from "../../../actions/scoreActions";

class ScoreBoard extends React.Component {
  render() {
    return (
      <Row>
        <ScoreTable
          total={this.props.total}
          goals={this.props.goals}
          behinds={this.props.behinds}
        />
        <Col md={4}>
          <Button
            onClick={() =>
              this.props.homeTeam
                ? this.props.addHomeTeamGoal()
                : this.props.addAwayTeamGoal()
            }
          >
            Add Goal
          </Button>
        </Col>
        <Col md={4}>
          <Button
            onClick={() =>
              this.props.homeTeam
                ? this.props.addHomeTeamBehind()
                : this.props.addAwayTeamBehind()
            }
          >
            Add Behind
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addHomeTeamGoal: () => dispatch(addHomeTeamGoal()),
    addAwayTeamGoal: () => dispatch(addAwayTeamGoal()),
    addHomeTeamBehind: () => dispatch(addHomeTeamBehind()),
    addAwayTeamBehind: () => dispatch(addAwayTeamBehind()),
  };
};

export default connect(null, mapDispatchToProps)(ScoreBoard);
