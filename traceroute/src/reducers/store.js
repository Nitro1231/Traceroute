import {
    TARGET,
    ROUTE
} from './types.js'

const initialState = {
    mapData: {
        GoogleMapKey: '',
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    },
    route: [   
        {'lat': 59.95, 'lng': 30.33},
        {'lat': 59.97, 'lng': 30.32},
        {'lat': 59.96, 'lng': 30.34}
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TARGET:
            return {
                ...state,
                target: action.payload
            }
        case ROUTE:
            return {
                ...state,
                route: action.payload
            }
        default:
            return state
    }
}