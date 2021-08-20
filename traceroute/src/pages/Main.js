import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../reducers/actions";

import MapTheme from "../assets/MapTheme.json";
import GoogleMap from "google-map-react";

import Marker from "../components/Marker";

class Main extends React.Component {
  // renderPolylines Code From: https://github.com/Dooffy/google-map-react-polyline-example/blob/master/examples/basic/src/components/Map.js
  renderPolylines(map, maps) {
    let nonGeodesicPolyline = new maps.Polyline({
      path: this.props.route,
      geodesic: false,
      strokeColor: "#5F7CD3",
      strokeOpacity: 0.8,
      strokeWeight: 4,
    });
    nonGeodesicPolyline.setMap(map);

    var bounds = new maps.LatLngBounds();
    for (let marker of this.props.route) {
      bounds.extend(new maps.LatLng(marker.lat, marker.lng));
    }
    map.fitBounds(bounds);
  }
  
  render() {
    console.log(this.props.mapData.GoogleMapKey);
    return (
      <>
        <div className="map">
          <GoogleMap
            bootstrapURLKeys={{ key: this.props.mapData.GoogleMapKey }}
            defaultCenter={this.props.mapData.center}
            defaultZoom={this.props.mapData.zoom}
            options={{ styles: MapTheme }}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) =>
              this.renderPolylines(map, maps)
            }
          >
            <Marker
              lat={this.props.route[0]["lat"]}
              lng={this.props.route[0]["lng"]}
            />
            <Marker
              lat={this.props.route[1]["lat"]}
              lng={this.props.route[1]["lng"]}
            />
            <Marker
              lat={this.props.route[2]["lat"]}
              lng={this.props.route[2]["lng"]}
            />
          </GoogleMap>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  mapData: state.mapData,
  target: state.target,
  route: state.route,
});
export default compose(connect(mapStateToProps, actions))(Main);
