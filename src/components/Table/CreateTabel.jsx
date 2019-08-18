import React from 'react';
import './CreateTable.scss';

export default function createTable(props) {
    let tableTemplate = props.data.map((rowData, index) => {
        return <li key={index}>
            <span>{rowData.id}</span>
            <span>{rowData.name}</span>
            <span>{rowData.score}</span>
        </li>
    });

    return(
        <div className="TableContainer">
            <ul className="HeaderContainer">
                <li>Index</li>
                <li>Name</li>
                <li>Score</li>
            </ul>
            <ul className="BodyContainer">
                {tableTemplate}
            </ul>
        </div>
    );
}