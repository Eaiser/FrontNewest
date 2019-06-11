import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { BASE_URL } from '../constants';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Table from '../Components/Layout/Table'

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

class Games extends React.Components {
    constructor(){
        super();
        this.state = {
            games: []
        }
    }

    componentDidMount() {
        axios.get(`${BASE_URL}/games`).then((response) => {
            const gamesRes = response.data;
            console.log(gamesRes);
            this.setState({games: gamesRes})
        }).catch((err) => {
            console.log(err);
        });
    }

render() {
    return (
        <div>
            <Table header={[{name:'TeamA', prop:'TeamA' }, {name:'teamAscore', prop:'teamAscore' }, {name: 'TeamB', prop:'TeamB'}, {name:'teamBscore', prop:'teamBscore' }]} data={this.state.games} />
        </div>
    )
}
}




export default withRouter(Games); 