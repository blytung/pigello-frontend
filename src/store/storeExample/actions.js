import constants from "./constants";

export const increaseCount = () => {
  return async (dispatch) => {
    dispatch({
      type: constants.INCREASE_COUNT,
      payload: {
        lastUpdated: new Date().toLocaleString(),
      },
    });
  };
};
