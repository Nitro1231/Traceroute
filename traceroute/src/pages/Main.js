import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../reducers/actions";

import MapGL, {
  Layer,
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

const paintLayer = {
  "fill-extrusion-color": "#141414",
  "fill-extrusion-height": {
    type: "identity",
    property: "height",
  },
  "fill-extrusion-base": {
    type: "identity",
    property: "min_height",
  },
  "fill-extrusion-opacity": 0.6,
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
            <Pin key={2} latitude={37.305} longitude={-122.947} />
            <Layer
              id="3d-buildings"
              source="composite"
              source-layer="building"
              filter={["==", "extrude", "true"]}
              type="fill-extrusion"
              minZoom={8}
              paint={paintLayer}
            />
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
