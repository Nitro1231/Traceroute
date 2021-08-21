import config from "../assets/config.json";
import { SET_VIEWPORT } from "./types.js";

const initialState = {
  map: {
    token: config["token"],
    styles: config["styles"],
    viewport: {
      latitude: 37.805,
      longitude: -122.447,
      zoom: 15.5,
      bearing: 0,
      pitch: 0,
    },
  },
  route: [
    { lat: 59.95, lng: 30.33 },
    { lat: 59.97, lng: 30.32 },
    { lat: 59.96, lng: 30.34 },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEWPORT:
      return {
        ...state,
        map: {
            ...state.map,
            viewport: action.payload
        }
      };
    default:
      return state;
  }
};
