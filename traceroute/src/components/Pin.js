import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../reducers/actions";

import { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

class Pin extends React.Component {
  addMarkers = () => {
    var i = 0;
    var items = [];
    this.props.points.forEach((point) => {
      items.push(
        <Marker key={`Marker-${i++}`} latitude={point[0]} longitude={point[1]}>
          <div
            className="marker"
            style={{
              transform: `translate(-50%, -50%) rotateX(${this.props.map.viewport.pitch}deg) rotateZ(${this.props.map.viewport.bearing}deg)`,
            }}
          />
        </Marker>
      );
    });
    return items;
  };

  render() {
    return <>{this.addMarkers()}</>;
  }
}

const mapStateToProps = (state) => ({
  map: state.map,
});
export default compose(connect(mapStateToProps, actions))(Pin);
