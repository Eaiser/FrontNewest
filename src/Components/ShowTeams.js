import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { BASE_URL } from '../constants';
import Table from '../Components/Layout/Table'


class ShowTeams extends React.Component {
    constructor() {
        super();
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        axios.get(`${BASE_URL}/team`).then((response) => {
            const responseTeams = response.data;
            
            this.setState({ teams: responseTeams })
        }).catch((err) => {
            console.log(err);
        });
    }
    render() {
        return (
            <div>
                <Table header={[{name: 'Name', prop:'name'},{name:'id', prop:'id' }, {name: 'First Name', prop:'firstName'}, {name: 'Last name', prop:'lastName'}, {name: 'nick', prop:'nick'}]} data={this.state.teams} />
            </div>
        )
    }
//, {name:'id', prop:'id' }, {name: 'First Name', prop:'firstName'}, {name: 'Last name', prop:'lastName'}, {name: 'nick', prop:'nick'}
}



export default withRouter(ShowTeams); 