import React, { useState, useEffect } from 'react';
import CreateTable from '../../components/Table/CreateTabel';
import './LeaderBoard.scss';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';

function LeaderBoard() {
    const [allUserScore, setAllUserScore] = useState(null);
    const [error, setError] = useState(null);
    const [loderState, setLoderState] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/api/getAllScores')
            .then( response => {
                setTimeout(() => {
                    setAllUserScore(response.data)
                    setLoderState(false);
                }, 2000);
            }).catch( error => {
                setError(error);
                setLoderState(false);
            });
    }, []);

    return(
        <div className="LeaderBoardContainer">
            <div className="LeaderBoardHeading">Leader Board</div>
            { allUserScore ? 
                <CreateTable data={allUserScore} /> : null
            }
            <Loader state={loderState} />
        </div>
    );
}

export default LeaderBoard;