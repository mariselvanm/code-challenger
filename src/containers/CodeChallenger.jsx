import React from 'react';
import './CodeChallenger.scss';
import LeaderBoard from './LeaderBoard/LeaderBoard';
import Header from './Header/Header';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import { Route, Switch, Redirect } from 'react-router-dom';


function codeChallenger() {
    return(
        <div>
            <Header />
            <SideDrawer />
            <div className="LeaderBoardDetailsContainer">
                <Switch>
                    <Route path="/questions" exact render={() => <h1 className="banner"> Comming soon .....!</h1>} />
                    <Route path="/leaderboard" exact component={LeaderBoard} />
                    <Route path="/record" exact render={() => <h1 className="banner"> Comming soon .....!</h1>} />
                    <Redirect from="/" to="/leaderboard"/>
                </Switch>
            </div>
        </div>
    );
}

export default codeChallenger;