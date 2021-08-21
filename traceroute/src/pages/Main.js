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
import PolylineOverlay from "../components/PolylineOverlay"

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
            <Pin key={0} point={this.props.route[0]} />
            <Pin key={1} point={this.props.route[1]} />
            <Pin key={2} point={this.props.route[2]} />
            <Pin key={3} point={this.props.route[3]} />
            <PolylineOverlay points={this.props.route} />
            <Layer
              id="3d-buildings"
              source="composite"
              source-layer="building"
              filter={["==", "extrude", "true"]}
              type="fill-extrusion"
              paint={paintLayer}
            />
            <GeolocateControl className='map-geolocate' />
            <NavigationControl className='map-nav' />
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
