import React from 'react';
import './Header.scss';

function header() {
    return(
        <div className="LeaderBoardHeader">
            <div className="NavHeader">CC</div>
            <div className="NavButton">
                <ul>
                    <li className="UserProfile">User</li>
                    <li className="Notification"></li>
                </ul>
            </div>
        </div>
    );
}

export default header;