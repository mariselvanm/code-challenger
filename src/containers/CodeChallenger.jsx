import React from 'react';
import './CodeChallenger.scss';
import LeaderBoard from './LeaderBoard/LeaderBoard';
import Header from './Header/Header';
import SideDrawer from '../components/SideDrawer/SideDrawer';


function codeChallenger() {
    return(
        <div>
            <Header />
            <SideDrawer />
            <div className="LeaderBoardDetailsContainer">
                <LeaderBoard />
            </div>
        </div>
    );
}

export default codeChallenger;