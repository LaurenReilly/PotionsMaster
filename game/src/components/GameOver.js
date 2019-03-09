import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let scoreRanking = () => {
    const { score } = this.props;
    if (score < 100) {
        return "Neville Longbottom"
    } else if (score > 100 && score < 500) {
        return "Draco Malfoy"
    } else if (score > 500 && score < 1000) {
        return "Horace Slughorn"
    } else if (score > 1000 && score < 1500) {
        return "Hermione Granger"
    } else if (score > 1500) {
        return "Half Blood Prince"
    }
}

let GameOver = (props) => {
    return (
        <div>
            <p>game over {this.props.username}!!!!</p>
            <p>YourScore: {this.props.score}</p>
            <p>Your Ranking: {scoreRanking()}</p>
            <Link to='/highscores'>View All Time High Scores</Link>
            <Link to='/userscores'>View Your Best Scores</Link>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
      username: state.username,
      score: state.score
    }
  }

export default connect(mapStateToProps,null)(GameOver);