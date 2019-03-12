import React, { Component } from 'react';
import song from './audio/themeSong.mp3';

class Audio extends Component {

    render() {
        return (
            <div>
                <audio ref="audio_tag" src={song} controls loop autoPlay/>
            </div>
          );
    }

}
export default Audio;

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