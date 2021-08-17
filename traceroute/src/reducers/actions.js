import {
    TARGET,
    ROUTE
} from './types.js'

export const setTarget = (target) => {
    return (dispatch) => {
        dispatch({
            type: TARGET,
            payload: target
        })
    }
}

export const setRoute = (routes) => {
    return (dispatch) => {
        dispatch({
            type: ROUTE,
            payload: routes
        })
    }
}