import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../reducers/actions";

import { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

class Pin extends React.Component {
  render() {
    return (
      <Marker
        key={`Marker-${this.props.key}`}
        longitude={this.props.longitude}
        latitude={this.props.latitude}
      >
        <div
          className="marker"
          style={{
            transform: `rotateX(${this.props.map.viewport.pitch}deg) rotateZ(${this.props.map.viewport.bearing}deg)`,
          }}
        >
          <div className="dot" />
        </div>
      </Marker>
    );
  }
}

const mapStateToProps = (state) => ({
  map: state.map,
});
export default compose(connect(mapStateToProps, actions))(Pin);
