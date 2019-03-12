import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class UserScores extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            highScores: []
        }
    }

    componentDidMount() {
        if(!this.props.username) {
            this.props.history.push('/')
        } else {
            this.getScores(); 
        }
    }

    async getScores() {
        let response = await axios.get(`/scores/user/${this.props.username}`);
        console.log(response.data);
        this.setState({
            ...this.state,
            highScores: response.data
        })
    }

    render() {
        return (
            <div>
                {this.state.highScores.map((record, i) => {
                    return (
                        <div key={i}>
                            <p>{record.username} scored {record.points}</p>
                        </div>
                    )
                }) }
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
      username: state.username
    }
  }

export default connect(mapStateToProps,null)(UserScores);