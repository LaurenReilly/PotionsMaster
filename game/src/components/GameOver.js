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
        } else if (score >= 50 && score < 90) {
            return "Draco Malfoy"
        } else if (score >= 90 && score < 120) {
            return "Horace Slughorn"
        } else if (score >= 120 && score < 150) {
            return "Hermione Granger"
        } else if (score >= 150) {
            return "the Half Blood Prince"
        }
    }

    handleClick(page) {
        this.props.history.push(page);
    }

    render() {
        return (
            <div>
                <Header/>
                <h2 className="mt-5">Professor Snape knew you couldn't do it, {this.props.username}!</h2>
                <h3 className="gameOver">Your Score: {this.props.score}</h3>
                <h4 className="gameOver mb-5">Your skills are at the level of {this.scoreRanking()}</h4>
                <div className="d-flex justify-content-around mt-5">
                    <h4 className="newPage" onClick={() => this.handleClick('/highscores')}>View All Time High Scores</h4>
                    <h4 className="newPage" onClick={() => this.handleClick('/userscores')}>View Your Best Scores</h4>
                    <h4 className="newPage" onClick={() => this.handleClick('/game')}>Play Again</h4>
                </div>
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