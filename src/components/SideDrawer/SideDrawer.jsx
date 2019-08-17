import React from 'react';
import './SideDrawer.scss';

export default function sideDrawer() {
    return(
        <div className="SideDrawerContainer">
            <ul>
                <li className="ListQuestionsNav">Questions</li>
                <li className="LeaderBoardNav">LeaderBoard</li>
                <li className="RecordNav">Record</li>
            </ul>
        </div>
    );
}