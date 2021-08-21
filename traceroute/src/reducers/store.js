import config from "../assets/config.json";
import { SET_VIEWPORT } from "./types.js";

const initialState = {
  map: {
    token: config["token"],
    styles: config["styles"],
    viewport: {
      latitude: 37.805,
      longitude: -122.447,
      zoom: 16,
      bearing: 30,
      pitch: 60,
    },
  },
  // latitude, longitude
  route: [
    [37.805, -122.447],
    [37.305, -122.947],
    [37.005, 20.947],
    [40.005, 30.456],
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
