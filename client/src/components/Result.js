import React from "react";
import '../styles/Result.css';
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";

export default function Quiz() {

    function onRestart(){
        console.log('On Restart');
    }

    return(
        <div className="container">
            <h1 className="title text-light">Quiz App</h1>

            <div className="result flex-center">
                <div className="flex">
                    <span>Username</span>
                    <span className="bold">Daily Quiz</span>
                </div>
                <div className="flex">
                    <span>Total Quiz Points:</span>
                    <span className="bold">50</span>
                </div>
                <div className="flex">
                    <span>Total Question:</span>
                    <span className="bold">05</span>
                </div>
                <div className="flex">
                    <span>Total Attempts:</span>
                    <span className="bold">03</span>
                </div>
                <div className="flex">
                    <span>Total Earn Points:</span>
                    <span className="bold">30</span>
                </div>
                <div className="flex">
                    <span>Quiz Result:</span>
                    <span className="bold">Pass</span>
                </div>
            </div>

            <div className="start">
                <Link className="btn" to={'/'} onClick={onRestart}>Restart</Link>
            </div>

            <div className="container">
                <ResultTable></ResultTable>
            </div>
        </div>
    )
}