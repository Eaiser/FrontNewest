import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { BASE_URL } from '../constants';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

class GetUsers extends React.Components {
    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get(`${BASE_URL}/user`).then((response) => {
            const usersRes = response.data;
            alert(usersRes);
            this.setState({users: usersRes})
        })

    };
render(){
    
}
}
