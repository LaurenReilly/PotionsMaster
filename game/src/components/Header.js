import React, {Component} from 'react';
import { connect } from 'react-redux';
import snape from './audio/snape.png';
import Logout from './Logout';

class Header extends Component {
    render() {
        return (
            <div className="header d-flex justify-content-around mx-5 mt-3">
                <img src={snape} alt="Severus Snape" style={{width: 100, height: 100}}/>
                <h1 className="mt-4 title">Remedial Potions</h1>
                <Logout/>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch({type: "LOG_OUT"}),
    }
}

export default connect(null, mapDispatchToProps)(Header);