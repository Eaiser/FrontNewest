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


class NewTeam extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            teamName: '',
            teamMembers: []          
        }
        this.handelChange = this.handelChange.bind(this)
    }

    handelChange(event) {
        console.log(event)

        console.log(event.target)
        this.setState({ [event.target.name]: event.target.value })
    }

    addTeam = () => {
        alert("log");
        const data = {id: 0, name: this.state.teamName, teamMembers: this.state.teamMembers};
        axios.post(BASE_URL + '/team', data)
            .catch((err) => {
                console.log(err);
            });
    }

    

    render() {
        
        return (
            <div>
                <TextField
                    id="standard-name"
                    label="Team Name"
                    name="teamName"
                    value={this.state.teamName}
                    onChange={this.handelChange}
                    margin="normal"
                />
                
               
                
                <Button variant="contained" onClick={this.addTeam} color="primary">
                    Add Team
                 </Button>

        
            </div>
        )
    }

}

export default withRouter(NewTeam);