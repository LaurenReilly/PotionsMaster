import React, {Component} from 'react';
import song from './audio/themeSong.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <div className="align-self-start">
          <FontAwesomeIcon 
            id="music" 
            onClick={this.togglePlay} 
            icon={this.state.play ? "pause" : "music"} 
            size="2x" alt="theme" title="theme"/>
        </div>
      );
    }
  }

  export default Theme;


