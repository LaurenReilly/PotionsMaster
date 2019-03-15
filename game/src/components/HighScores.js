import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from './Header';

class HighScores extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            highScores: []
        }
    }

    componentDidMount() {
        if(!this.props.username) {
            this.props.history.push('/');
        } else {
            this.getScores();
        }
      }

    async getScores() {
        let response = await axios.get(`/scores/highscores`);
        console.log(response.data);
        this.setState({
            ...this.state,
            highScores: response.data
        })
    }

    handleClick(page) {
        this.props.history.push(page);
    }

    render() {
        return (
            <div className="mt-5">
            <Header/>
                {this.state.highScores.map((record, i) => {
                        if (i === 0) {
                            return (
                                <div key={i} className="m-5">
                                    <h3>{record.username} has the high score of {record.points}</h3>
                                </div>
                            )
                        } else {
                            return (
                                <div key={i} className="d-flex flex-row">
                                    <h4>{record.username}</h4>
                                    <p>scored {record.points} for their house</p>
                                </div>
                            )
                        }
                    }) 
                }
                <div className="d-flex justify-content-around mt-5">
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
    }
  }

export default connect(mapStateToProps, null)(HighScores);