import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

import MapTheme from '../assets/MapTheme.json'
import GoogleMap from 'google-map-react'

import Marker from '../components/Marker'

class Main extends React.Component {
    render() {
      console.log(this.props.mapData.GoogleMapKey)
        return(
            <>
                <div className='map'>
                <GoogleMap
                    bootstrapURLKeys={{ key: this.props.mapData.GoogleMapKey }}
                    defaultCenter={this.props.mapData.center}
                    defaultZoom={this.props.mapData.zoom}
                    options={{ styles: MapTheme }}
                    >
                    
                    <Marker lat={this.props.route[0]['lat']} lng={this.props.route[0]['lng']} />
                    <Marker lat={this.props.route[1]['lat']} lng={this.props.route[1]['lng']} />
                    <Marker lat={this.props.route[2]['lat']} lng={this.props.route[2]['lng']} />

                </GoogleMap>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    mapData: state.mapData,
    target: state.target,
    route: state.route
})
export default compose(connect(mapStateToProps, actions))(Main)