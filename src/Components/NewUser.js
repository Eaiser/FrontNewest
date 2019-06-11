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



class NewUser extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            firstName: '',
            lastName: ''
        }
        this.handelChange = this.handelChange.bind(this)
    }

    handelChange(event) {
        console.log(event)

        console.log(event.target)
        this.setState({ [event.target.name]: event.target.value })
    }

    addUser = () => {
        alert("log");
        const data = { id: 0, firstName: this.state.firstName, lastName: this.state.lastName };
        axios.post(BASE_URL + '/user', data)
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <TextField
                    id="standard-name"
                    label="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handelChange}
                    margin="normal"
                />

                <TextField
                    id="standard-name"
                    label="Last Name"
                    name='lastName'
                    value={this.state.lastName}
                    onChange={this.handelChange}
                    margin="normal"
                />

                <Button variant="contained" onClick={this.addUser} color="primary">
                    Primary
                 </Button>
            </div>
        )
    }

}

export default withRouter(NewUser);