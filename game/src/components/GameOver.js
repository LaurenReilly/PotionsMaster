import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

    render() {
        return (
            <div>
                <p>game over {this.props.username}!!!!</p>
                <p>YourScore: {this.props.score}</p>
                <p>Your Ranking: {this.scoreRanking()}</p>
                <Link to='/highscores'>View All Time High Scores</Link>
                <Link to='/userscores'>View Your Best Scores</Link>
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