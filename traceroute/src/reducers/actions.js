import {
    SET_VIEWPORT
} from './types.js'

// https://ipapi.co//json

export const setViewport = (viewport) => {
    return (dispatch) => {
        // console.log(viewport)
        dispatch({
            type: SET_VIEWPORT,
            payload: viewport
        })
    }
}