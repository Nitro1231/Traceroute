import React from "react";
import { Marker } from "react-map-gl";

class Pin extends React.Component {
  render() {
    return (
      <Marker
        key={`Marker-${this.props.key}`}
        longitude={this.props.longitude}
        latitude={this.props.latitude}
      >
        <div className="marker">
          <div className="dot" />
        </div>
      </Marker>
    );
  }
}

export default Pin;
