import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class GameOver extends Component {
//if there is no user signed in return to home page
    componentDidMount() {
        if(!this.props.username) {
            this.props.history.push('/');
        } else {
            return
        }
      }
//based on score, assign a ranking
   scoreRanking = () => {
        const { score } = this.props;
        if (score < 50) {
            return "Neville Longbottom"
        } else if (score > 50 && score < 70) {
            return "Draco Malfoy"
        } else if (score > 70 && score < 90) {
            return "Horace Slughorn"
        } else if (score > 90 && score < 110) {
            return "Hermione Granger"
        } else if (score > 110) {
            return "Half Blood Prince"
        }
    }

    handleClick(page) {
        this.props.history.push({page})
    }

    render() {
        return (
            <div>
                <Header/>
                <p>game over {this.props.username}!!!!</p>
                <p>YourScore: {this.props.score}</p>
                <p>Your Ranking: {this.scoreRanking()}</p>
                <h2 onClick={() => this.handleClick('/highscores')}>View All Time High Scores</h2>
                <h2 onClick={() => this.handleClick('/userscores')}>View Your Best Scores</h2>
                <h2 onClick={() => this.handleClick('/game')}>Play Again</h2>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
      username: state.username,
      score: state.score
    }
  }

export default connect(mapStateToProps,null)(GameOver);