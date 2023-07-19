// Add home team name
export const addHomeTeam = (value) => {
  return (dispatch, getState) => {
    dispatch({ type: "ADD_HOME_TEAM", payload: { value } });
  };
};

// Add away team name
export const addAwayTeam = (value) => {
  return (dispatch, getState) => {
    dispatch({ type: "ADD_AWAY_TEAM", payload: { value } });
  };
};

// reset scoreboards to add other teams
export const resetTeams = () => {
  return (dispatch, getState) => {
    dispatch({ type: "RESET_TEAMS" });
  };
};
