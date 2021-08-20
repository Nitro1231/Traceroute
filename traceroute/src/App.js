import "./App.css";

import ReactMapboxGl, { ZoomControl, Marker, Layer } from "react-mapbox-gl";

const { token, styles } = require("./config.json");

const Map = ReactMapboxGl({ accessToken: token });

const mapStyle = {
  flex: 1,
};

var paintLayer = {
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

function App() {
  const state = {
    map: null
  };

  const onStyleLoad = (map)=>{
    this.setState({map})
    // this.props.finishedLoading()
  }


  return (
    <Map
      className="Map"
      style={styles.dark}
      containerStyle={mapStyle}
      zoom={[15]}
      center={[-0.0824952, 51.5144951]}
      pitch={[60]}
      bearing={[-60]}
      onStyleLoad={onStyleLoad}
      mapOptions={{
        renderWorldCopies: false,
      }}
    >
      <Marker coordinates={[-0.0826952, 51.6154951]}>
        <div className="Marker"/>
      </Marker>
      <Layer
        id="3d-buildings"
        sourceId="composite"
        sourceLayer="building"
        filter={["==", "extrude", "true"]}
        type="fill-extrusion"
        minZoom={14}
        paint={paintLayer}
      />
      <ZoomControl />
    </Map>
  );
}

export default App;
