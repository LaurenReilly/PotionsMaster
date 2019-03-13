import React, { Component } from 'react';
import { connect } from 'react-redux';

import crinkle from './audio/crinkle.mp3';
import drip from './audio/drip.wav';
import drop from './audio/drop.wav';
import dust from './audio/dust.wav';
import seeds from './audio/seeds.wav';
import sizzle from './audio/sizzle.mp3';

class Audio extends Component {

    render() {
        switch(this.props.currentSound) {
            case "crinkle":
                return (
                    <div>
                        <audio ref="audio_tag" src={crinkle} autoPlay onEnded={() => this.props.resetSound()}/>
                    </div>
                );
            case "drip":
                return (
                    <div>
                        <audio ref="audio_tag" src={drip} autoPlay onEnded={() => this.props.resetSound()}/>
                    </div>
                );
            case "drop":
                return (
                    <div>
                        <audio ref="audio_tag" src={drop} autoPlay onEnded={() => this.props.resetSound()}/>
                    </div>
                );
            case "dust":
                return (
                    <div>
                        <audio ref="audio_tag" src={dust} autoPlay onEnded={() => this.props.resetSound()}/>
                    </div>
                );
            case "seeds":
                return (
                    <div>
                        <audio ref="audio_tag" src={seeds} autoPlay onEnded={() => this.props.resetSound()}/>
                    </div>
                );
            case "sizzle":
                return (
                    <div>
                        <audio ref="audio_tag" src={sizzle} autoPlay onEnded={() => this.props.resetSound()}/>
                    </div>
                );
            default:
              return null;
          }
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
