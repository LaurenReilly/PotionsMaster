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
                <h2>Congratulations!</h2>
                <h3>Professor Snape thinks you're bad enough at potions that hes willing to teach you one on one.</h3>
                <h3>Don't think this means he's going to be nice or patient though...it's just a favor for Dumbledore.</h3>
                <p>Your task is to brew up as many perfect potions as you can.</p>
                <p>Professor Snape does not tolerate imperfection, one misstep and it's back to your common room!</p>
                <h4>Rules:</h4>
                <ul>
                    <li>Follow Snape's instructions exactly!</li>
                    <li>Work quickly before he erases the board.</li>
                    <li>Try not to get distracted by his insults.</li>
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