import constants from "./constants";

export const updatePlanetStore = (data) => {
  return async (dispatch) => {
    dispatch({
      type: constants.UPDATE_PLANETS,
      payload: {
        planets: data,
        lastUpdated: new Date().toLocaleString(),
      },
    });
  };
};
