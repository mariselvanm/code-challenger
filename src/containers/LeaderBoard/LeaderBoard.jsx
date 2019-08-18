import React, { useState, useEffect } from 'react';
import CreateTable from '../../components/Table/CreateTabel';
import './LeaderBoard.scss';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';

function LeaderBoard() {
    const [allUserScore, setAllUserScore] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/getAllScores')
            .then( response => {
                setAllUserScore(response.data);
            }).catch( error => {
                setError(error);
            });
    }, []);

    return(
        <div className="LeaderBoardContainer">
            <div className="LeaderBoardHeading">Leader Board</div>
            { allUserScore ? 
                <CreateTable data={allUserScore} /> :
                <Loader />
            }
        </div>
    );
}

export default LeaderBoard;