import React from 'react';
import CreateTable from '../../components/Table/CreateTabel';
import './LeaderBoard.scss';

const DATA = [
    {name: "Mari" , score:23},
    {name: "Priyanga" , score:33},
    {name: "Rubina" , score:43},
    {name: "Vamshi" , score:25},
    {name: "Vanitha" , score:27},
    {name: "Arjun" , score:20},
    {name: "Gayathri" , score:43},
    {name: "Shylajha" , score:43},
    {name: "Mari" , score:23},
    {name: "Priyanga" , score:33},
    {name: "Rubina" , score:43},
    {name: "Vamshi" , score:25},
    {name: "Vanitha" , score:27},
    {name: "Arjun" , score:20},
    {name: "Gayathri" , score:43},
    {name: "Shylajha" , score:43},
];

function leaderBoard() {
    return(
        <div className="LeaderBoardContainer">
            <div className="LeaderBoardHeading">Leader Board</div>
            <CreateTable data={DATA} />
        </div>
    );
}

export default leaderBoard;