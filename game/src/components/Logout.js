import React from 'react';
import { connect } from 'react-redux';

let Logout = (props) => {
    return (
        <div>
            <button onClick={(e) => {e.preventDefault(); this.props.logout()}}>Logout</button>
        </div>
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch({type: "LOG_OUT"}),
    }
  }

export default connect(null, mapDispatchToProps)(Logout);

