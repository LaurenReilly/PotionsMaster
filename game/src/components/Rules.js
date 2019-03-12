import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Rules extends Component {
    componentDidMount() {
        if(!this.props.username) {
            this.props.history.push('/');
        } else {
            return
        }
      }

    render(){
        return (
            <div>
                <p>this is how u play</p>
                <ul>
                    <li>Rules</li>
                    <li>ROOLz</li>
                    <li>rulz</li>
                    <li>rouls</li>
                </ul>
                <Link to="/game"><h2>Lets Brew Some Potions!</h2></Link>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
      username: state.username,
    }
  }

export default connect(mapStateToProps, null)(Rules);