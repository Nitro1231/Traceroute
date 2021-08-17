import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

import Marker from '../components/Marker'
import GoogleMapReact from 'google-map-react'

class Main extends React.Component {
    render() {

        return(
            <>
                <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: this.props.mapData.key }}
                    defaultCenter={this.props.mapData.center}
                    defaultZoom={this.props.mapData.zoom}
                    >
                    
                    <Marker lat={this.props.route[0]['lat']} lng={this.props.route[0]['lng']} />
                    <Marker lat={this.props.route[1]['lat']} lng={this.props.route[1]['lng']} />
                    <Marker lat={this.props.route[2]['lat']} lng={this.props.route[2]['lng']} />

                </GoogleMapReact>
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