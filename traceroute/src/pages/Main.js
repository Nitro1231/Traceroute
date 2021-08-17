import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

class Main extends React.Component {
    render() {

        return(
            <>
                hello world!
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    target: state.target,
    route: state.route
})
export default compose(connect(mapStateToProps, actions))(Main)