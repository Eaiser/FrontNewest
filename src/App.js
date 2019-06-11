import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NewUser from "./Components/NewUser";
import './App.css';
import Navbar from './Components/Layout/Navbar';
import ShowUsers from './Components/ShowUsers';
import { MuiThemeProvider } from 'material-ui/styles';
import ShowTeams from './Components/ShowTeams';
import NewTeam from './Components/NewTeam';
import SetScore from './Components/SetScore';
import Games from './Components/Games';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <BrowserRouter>
                        <Navbar />

                        <div>
                            <Route path='/addNewUser' component={NewUser} />
                            <Route path='/showUsers' component={ShowUsers} />

                            <Route path='/addNewTeam' component={NewTeam} />
                            <Route path='/showTeams' component={ShowTeams} />
                            <Route path='/Games' component={Games} />
                            <Route path='/addScore' component={SetScore} />
                            
                        </div>
                    </BrowserRouter>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default App;