import React, {Component} from 'react';
import song from './audio/themeSong.mp3';

  class Theme extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        play: false
      };
      this.audio = new Audio(song);
      this.audio.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
      }, false);
      this.togglePlay = this.togglePlay.bind(this);
    }
  
    togglePlay() {
      const wasPlaying = this.state.play;
      this.setState({
        play: !wasPlaying
      });
  
      if (wasPlaying) {
        this.audio.pause();
      } else {
        this.audio.play()
      }
    }

    render() {
      return (
        <div>
          <button
            id="audioBtn"
            onClick={this.togglePlay}> {this.state.play ? "Pause" : "Play"}
          </button>
        </div>
      );
    }
  }


  export default Theme;


