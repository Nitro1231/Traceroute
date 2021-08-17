import {
    TARGET,
    ROUTE
} from './types.js'

const initialState = {
    
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