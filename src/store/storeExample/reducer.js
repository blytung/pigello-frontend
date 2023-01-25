import constants from "./constants";

const INITIAL_STATE = {
  planets: [],
  lastUpdated: null,
};


const storeExampleReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case constants.UPDATE_PLANETS: {
      return {
        planets: payload.planets,
        lastUpdated: payload.lastUpdated,
      };
    }
    default:
      return state;
  }
};

export default storeExampleReducer;
