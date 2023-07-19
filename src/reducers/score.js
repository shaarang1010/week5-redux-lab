const initState = {
  awayTeamScore: {
    goals: 0,
    behinds: 0,
    total: 0,
  },
  homeTeamScore: {
    goals: 0,
    behinds: 0,
    total: 0,
  },
};

const scoresReducer = (state = initState, action) => {
  switch (action.type) {
    case "HOME_TEAM_GOAL":
      return {
        ...state,
        homeTeamScore: {
          ...state.homeTeamScore,
          goals: state.homeTeamScore.goals + 1,
          total: state.homeTeamScore.total + 6,
        },
      };
    case "AWAY_TEAM_GOAL":
      return {
        ...state,
        awayTeamScore: {
          ...state.awayTeamScore,
          goals: state.awayTeamScore.goals + 1,
          total: state.awayTeamScore.total + 6,
        },
      };
    case "HOME_TEAM_BEHIND":
      return {
        ...state,
        homeTeamScore: {
          ...state.homeTeamScore,
          behinds: state.homeTeamScore.behinds + 1,
          total: state.homeTeamScore.total + 1,
        },
      };
    case "AWAY_TEAM_BEHIND":
      return {
        ...state,
        awayTeamScore: {
          ...state.awayTeamScore,
          behinds: state.awayTeamScore.behinds + 1,
          total: state.awayTeamScore.total + 1,
        },
      };
    case "RESET_SCORES":
      return {
        ...initState,
      };
    default:
      break;
  }
  return state;
};

export default scoresReducer;
