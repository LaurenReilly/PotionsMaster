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
                        <audio ref="audio_tag" src={crinkle} autoPlay/>
                    </div>
                );
            case "drip":
                return (
                    <div>
                        <audio ref="audio_tag" src={drip} autoPlay/>
                    </div>
                );
            case "drop":
                return (
                    <div>
                        <audio ref="audio_tag" src={drop} autoPlay/>
                    </div>
                );
            case "dust":
                return (
                    <div>
                        <audio ref="audio_tag" src={dust} autoPlay/>
                    </div>
                );
            case "seeds":
                return (
                    <div>
                        <audio ref="audio_tag" src={seeds} autoPlay/>
                    </div>
                );
            case "sizzle":
                return (
                    <div>
                        <audio ref="audio_tag" src={sizzle} autoPlay/>
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

  
  export default connect(mapStateToProps,null)(Audio);

// return (
//     <Sound
//       url="/theme.mp3"
//       playStatus={Sound.status.PLAYING}
//       playFromPosition={0}
//       autoLoad={true}
//       loop={true}
//     />
//   );

//<div>
//<audio ref="audio_tag" src="/themeSong.mp3" loop autoPlay/>
//</div>