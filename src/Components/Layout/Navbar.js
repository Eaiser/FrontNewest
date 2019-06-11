import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';



class Navbar extends Component {
    state = {
        anchorEl: null,
        anchorE2: null,
    };

    handleUserClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleUserClose = () => {
        this.setState({ anchorEl: null });
    };
    handleTeamClick = event => {
        this.setState({ anchorE2: event.currentTarget });
    };

    handleTeamClose = () => {
        this.setState({ anchorE2: null });
    };
    handleGameClick = event => {
        this.setState({ anchorE3: event.currentTarget });
    };

    handleGameClose = () => {
        this.setState({ anchorE3: null });
    };
    render() {

        const { anchorEl, anchorE2, anchorE3 } = this.state;
        return (
            <div className='Navbar'>

                <AppBar position="static">
                    <Toolbar>
                        <Button
                            aria-owns={anchorEl ? 'user-menu' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleUserClick}
                        >
                            Users
                        </Button>
                        <Menu
                            id="user-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleUserClose}
                        >
                            <MenuItem onClick={this.handleUserClose}><a href='/addNewUser'>Add new user</a></MenuItem>
                            <MenuItem onClick={this.handleUserClose}><a href='/showUsers'>Show users</a></MenuItem>
                            
                        </Menu>
                        <Button
                            aria-owns={anchorE2 ? 'team-menu' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleTeamClick}
                        >
                            Teams
                        </Button>
                        <Menu
                            id="team-menu"
                            anchorEl={anchorE2}
                            open={Boolean(anchorE2)}
                            onClose={this.handleTeamClose}
                        >
                            <MenuItem onClick={this.handleTeamClose}><a href='/addNewTeam'>Add new team</a></MenuItem>
                            <MenuItem onClick={this.handleTeamClose}><a href='/deleteTeam'>Delete team</a></MenuItem>
                            <MenuItem onClick={this.handleTeamClose}><a href='/showTeams'>Show teams</a></MenuItem>
                            
                        </Menu>
                        <Button
                            aria-owns={anchorE3 ? 'team-menu' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleGameClick}
                        >
                            Games
                        </Button>
                        <Menu
                            id="games-menu"
                            anchorEl={anchorE3}
                            open={Boolean(anchorE3)}
                            onClose={this.handleGameClose}
                        >
                            <MenuItem onClick={this.handleGameClose}><a href='/Games'>Games</a></MenuItem>
                            <MenuItem onClick={this.handleGameClose}><a href='/MyGames'>MyGames</a></MenuItem>
                            <MenuItem onClick={this.handleGameClose}><a href='/AddScore'>Add Score</a></MenuItem>
                            
                        </Menu>
                    

                    </Toolbar>
                </AppBar>
            </div>

        )
    }
}

export default Navbar;