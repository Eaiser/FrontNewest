import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { BASE_URL } from '../constants';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
//Nie wiem czy to jest dobrze
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


class AddUsersToTeam extends React.Component {
    constructor() {
        super();
        this.state = {
            teamNumber: '',
            nick: ''
                      
        }
        this.handelChange = this.handelChange.bind(this)
    }

    handelChange(event) {
        console.log(event)

        console.log(event.target)
        this.setState({ [event.target.name]: event.target.value })
    }

    addUsersToTeam = () => {
        alert("log");
        const data = {id: 0, teamNumber: this.state.teamNumber, nick: this.state.nick};
        axios.post(BASE_URL + '/team/add/', data)
            .catch((err) => {
                console.log(err);
            });
    }

    

    render() {
        
        return (
            <div>
                 <TextField
                    id="standard-name"
                    label="teamNumber"
                    name="teamNumber"
                    value={this.state.teamNumber}
                    onChange={this.handelChange}
                    margin="normal"
                />

                <TextField
                    id="standard-name"
                    label="nick"
                    name='nick'
                    value={this.state.nick}
                    onChange={this.handelChange}
                    margin="normal"
                />
                            
                <Button variant="contained" onClick={this.addUsersToTeam} color="primary">
                    Add Users to Team
                 </Button>

        
            </div>
        )
    }

}

export default withRouter(AddUsersToTeam);