import React, { useState, useEffect } from 'react';
import CreateTable from '../../components/Table/CreateTabel';
import './LeaderBoard.scss';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';

function LeaderBoard() {
    const [allUserScore, setAllUserScore] = useState(null);
    const [loderState, setLoderState] = useState(true);

    useEffect(() => {
        axios.get('/getAllScores')
            .then( response => {
                setAllUserScore(response.data);
                setLoderState(false);
            }).catch( error => {
                toast.error(`Error on loading leaderboard...`);
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