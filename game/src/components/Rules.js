import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class Rules extends Component {
    componentDidMount() {
        if(!this.props.username) {
            this.props.history.push('/');
        } else {
            return
        }
      }

    handleClick() {
        this.props.history.push('/game')
    }

    render(){
        return (
            <div>
                <Header/>
                <h4>Rules:</h4>
                <ul>
                    <li>Follow Snape's instructions exactly!</li>
                    <li>Work quickly before he erases the board.</li>
                    <li>Try not to get distracted by his insults.</li>
                </ul>
                <h2 onClick={() => this.handleClick()}>Lets Brew Some Potions!</h2>
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