import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { TeamCard } from "../../../components/card/TeamCard";
import TeamForm from "../../../components/forms/TeamNameForm";
import { connect } from "react-redux";
import { addAwayTeam, addHomeTeam } from "../../../actions/teamActions";
import ScoreBoard from "../../sections/scores/Scores";
import { resetScores } from "../../../actions/scoreActions";

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

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { awayTeamScore, homeTeamScore } = this.props.scores;
    return (
      <div className="justify-content-md-center">
        <Row>
          <Col md={4}>
            <TeamForm
              label="Home Team"
              placeholder={"Enter home team name"}
              onChangeHandler={(e) =>
                this.setState({ hometeam: e.target.value })
              }
              onClickHandler={() => this.props.addHomeTeam(this.state.hometeam)}
            />
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <TeamForm
              label="Away Team"
              placeholder={"Enter away team name"}
              onChangeHandler={(e) =>
                this.setState({ awayTeam: e.target.value })
              }
              onClickHandler={() => this.props.addAwayTeam(this.state.awayTeam)}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          {this.props.teams.homeTeam && (
            <Col md={4}>
              <TeamCard title={this.props.teams.homeTeam}>
                <ScoreBoard
                  homeTeam={this.props.teams.homeTeam}
                  total={homeTeamScore.total}
                  goals={homeTeamScore.goals}
                  behinds={homeTeamScore.behinds}
                />
              </TeamCard>
            </Col>
          )}
          {this.props.teams.awayTeam && (
            <Col md={{ span: 4, offset: 2 }}>
              <TeamCard title={this.props.teams.awayTeam}>
                <ScoreBoard
                  total={awayTeamScore.total}
                  goals={awayTeamScore.goals}
                  behinds={awayTeamScore.behinds}
                />
              </TeamCard>
            </Col>
          )}
        </Row>
        <Row style={{ marginTop: "10%" }}>
          <Col md={12}>
            <Button
              variant="danger"
              size="lg"
              onClick={() => this.props.resetScores()}
            >
              Reset scores
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    scores: state.scores,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHomeTeam: (value) => dispatch(addHomeTeam(value)),
    addAwayTeam: (value) => dispatch(addAwayTeam(value)),
    resetScores: () => dispatch(resetScores()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
