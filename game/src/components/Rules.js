import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import cauldron from './audio/cauldron.png';
import lacewing from './audio/lacewing.png';
import boomslang from './audio/boomslang.png';
import bicorn from './audio/bicorn.png';
import dragon from './audio/dragon.png';
import beetle from './audio/beetle.png';
import newt from './audio/newt.png';

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
                <div className="images d-flex flex-wrap" style={{width:600, height:700}}>
                <img src={cauldron} alt="Severus Snape" style={{width: 200, height: 200}}/>
                <img src={dragon} alt="Severus Snape" style={{width: 200, height: 200}}/>
                <img src={lacewing} alt="Severus Snape" style={{width: 200, height: 200}}/>
                <img src={bicorn} alt="Severus Snape" style={{width: 200, height: 200}}/>
                <img src={beetle} alt="Severus Snape" style={{width: 200, height: 200}}/>
                <img src={newt} alt="Severus Snape" style={{width: 200, height: 200}}/>
                <img src={boomslang} alt="Severus Snape" style={{width: 200, height: 200}}/>
                </div>
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