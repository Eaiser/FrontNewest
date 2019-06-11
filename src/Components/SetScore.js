import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { BASE_URL } from '../constants';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});



class SetScore extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            teamA: '',
            teamAscore: '', 
            teamB: '' ,
            teamBscore: ''
        }
        this.handelChange = this.handelChange.bind(this)
    }

    handelChange(event) {
        console.log(event)

        console.log(event.target)
        this.setState({ [event.target.name]: event.target.value })
    }

    SetScore = () => {
        alert("log");
        const data = { id: 0, teamA: this.state.teamA, teamAscore: this.state.teamAscore, teamB: this.state.teamB, teamBscore: this.state.teamBscore };
        axios.post(BASE_URL + '/games', data)
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <TextField
                    id="Set Score"
                    label="Team A Name"
                    name="teamA"
                    value={this.state.teamA}
                    onChange={this.handelChange}
                    margin="normal"
                />
                <TextField
                    id="Set Score"
                    label="Team A score"
                    name="teamAscore"
                    value={this.state.teamAscore}
                    onChange={this.handelChange}
                    margin="normal"
                />
                <TextField
                    id="Set Score"
                    label="Team B Name"
                    name='teamB'
                    value={this.state.teamB}
                    onChange={this.handelChange}
                    margin="normal"
                />

                <TextField
                    id="Set Score"
                    label="Team B score"
                    name='teamBscore'
                    value={this.state.teamBscore}
                    onChange={this.handelChange}
                    margin="normal"
                />

                <Button variant="contained" onClick={this.setScore} color="primary">
                    SetScore
                 </Button>
            </div>
        )
    }

}

export default withRouter(SetScore);