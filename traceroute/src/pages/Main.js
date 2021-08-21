import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../reducers/actions";

import MapGL, {
  Popup,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "../components/Pin";

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: "10px",
};

const navStyle = {
  top: 72,
  left: 0,
  padding: "10px",
};

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="map">
          <MapGL
            {...this.props.map.viewport}
            width="100%"
            height="100%"
            mapStyle={this.props.map.styles.dark}
            onViewportChange={this.props.setViewport}
            mapboxApiAccessToken={this.props.map.token}
          >
            <Pin key={1} latitude={37.805} longitude={-122.447} />
            <GeolocateControl style={geolocateStyle} />
            <NavigationControl style={navStyle} />
          </MapGL>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  map: state.map,
  route: state.route,
});
export default compose(connect(mapStateToProps, actions))(Main);
