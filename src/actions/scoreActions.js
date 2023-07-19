// note we dont pass value here as those values are added in the reducer
// we just need to trigger the actions and the actions would call the reducers

export const addHomeTeamGoal = () => {
  return (dispatch, getState) => {
    dispatch({ type: "HOME_TEAM_GOAL" });
  };
};

// Add away team goal
export const addAwayTeamGoal = () => {
  return (dispatch, getState) => {
    dispatch({ type: "AWAY_TEAM_GOAL" });
  };
};

// Add home team behind
export const addHomeTeamBehind = () => {
  return (dispatch, getState) => {
    dispatch({ type: "HOME_TEAM_BEHIND" });
  };
};

// Add away team behind
export const addAwayTeamBehind = () => {
  return (dispatch, getState) => {
    dispatch({ type: "AWAY_TEAM_BEHIND" });
  };
};
// reset scores
export const resetScores = () => {
  return (dispatch, getState) => {
    dispatch({ type: "RESET_SCORES" });
  };
};
