import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrawer.scss';

export default function sideDrawer() {
    return(
        <div className="SideDrawerContainer">
            <ul>
                <NavLink to="/questions" activeClassName="activeLink">
                    <li className="ListQuestionsNav">Questions</li>
                </NavLink>
                <NavLink to="/leaderboard" activeClassName="activeLink">
                    <li className="LeaderBoardNav">LeaderBoard</li>
                </NavLink>
                <NavLink to="/record" activeClassName="activeLink">
                    <li className="RecordNav">Record</li>
                </NavLink>
            </ul>
        </div>
    );
}