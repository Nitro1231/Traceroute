import config from "../assets/config.json";
import { SET_VIEWPORT } from "./types.js";

const initialState = {
  map: {
    token: config["token"],
    styles: config["styles"],
    viewport: {
      latitude: 37.520728201903935,
      longitude: 126.98199690480689,
      zoom: 16,
      bearing: 30,
      pitch: 60,
    },
  },
  // latitude, longitude
  route: [
    [37.520728201903935, 126.98199690480689],
    [35.921395948134084, 137.83287384621335],
    [28.570427979426356, 107.06038711571986],
    [40.702098900655926, -73.6332448712818],
    [36.65398950295249, -120.05832364365196],
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEWPORT:
      return {
        ...state,
        map: {
          ...state.map,
          viewport: action.payload,
        },
      };
    default:
      return state;
  }
};
