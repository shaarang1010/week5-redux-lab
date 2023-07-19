const initState = {
  homeTeam: null,
  awayTeam: null,
};

const teamReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_HOME_TEAM":
      // reducer fired when add home team action happens
      return {
        ...state,
        homeTeam: action.payload.value,
      };
    case "ADD_AWAY_TEAM":
      // reducer fired when add away team action happens
      return {
        ...state,
        awayTeam: action.payload.value,
      };
    case "RESET_TEAMS":
      // reducer fired when we want to reset teams
      return {
        ...initState,
      };
    default:
      break;
  }
  return state;
};

export default teamReducer;
