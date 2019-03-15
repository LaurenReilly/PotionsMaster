import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Logout extends Component {

    handleClick = (e) => {
        e.preventDefault();
        axios.post('/users/logout')
            .then( (response) => {
            this.props.logout();
            this.props.history.push('/');
            })
            .catch(function (error) {
            console.log(error);
            });
        }

    render() {
        return (
            <div className="mt-5 mb-1">
                <FontAwesomeIcon id="dungeon" onClick={(e) => this.handleClick(e)} icon="dungeon" size="3x" alt="Logout" title="Logout"/>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch({type: "LOG_OUT"}),
    }
  }

  export default connect(null, mapDispatchToProps)(withRouter(Logout));

