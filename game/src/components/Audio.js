import React, { Component } from 'react';
import { connect } from 'react-redux';

import crinkle from './audio/crinkle.mp3';
import drip from './audio/drip.wav';
import drop from './audio/drop.wav';
import dust from './audio/dust.wav';
import seeds from './audio/seeds.wav';
import sizzle from './audio/sizzle.mp3';
import bubbling from './audio/bubbling.wav';

class Audio extends Component {

    soundSwitch = () => {
        switch(this.props.currentSound) {
            case "crinkle":
                return crinkle;
            case "drip":
                return drip;
            case "drop":
                return drop;
            case "dust":
                return dust;
            case "seeds":
                return seeds;
            case "sizzle":
                return sizzle;
            case "bubbling":
                return bubbling;
            default:
              return null;
          }
    }

    render() {
        return (
            <div>
                <audio ref="audio_tag" src={this.soundSwitch()} autoPlay onEnded={() => this.props.resetSound()}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentSound: state.currentSound
    }
  }

let mapDispatchToProps = (dispatch) => {
    return {
        resetSound: () => dispatch({type: "RESET_SOUND"})
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Audio);
