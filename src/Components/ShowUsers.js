import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { BASE_URL } from '../constants';
import Table from '../Components/Layout/Table'


class ShowUsers extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get(`${BASE_URL}/user`).then((response) => {
            const responseUsers = response.data;
            console.log(responseUsers);
            this.setState({ users: responseUsers })
        }).catch((err) => {
            console.log(err);
        });
    }
    render() {
        return (
            <div>
                <Table header={[{name:'First name', prop:'firstName' }, {name: 'Last name', prop:'lastName'}]} data={this.state.users} />
            </div>
        )
    }

}



export default withRouter(ShowUsers); 