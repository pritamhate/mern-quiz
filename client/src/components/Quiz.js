import React, { useEffect } from "react";
import Questions from "./Questions";

/** redux store import */
import { useSelector } from "react-redux";

export default function Quiz() {

    const state = useSelector(state => state);

    useEffect(()=>{
        console.log(state);
    })

    /** next button event handler **/
    function onNext() {
        console.log('On Next Click');
    }

    /** prev button event handler **/
    function onPrev() {
        console.log('On Prev Click');
    } 

    return(
        <div className="container">
            <h1 className="title text-light">Quiz App</h1>

            {/** Display Questions **/}
            <Questions></Questions>

            <div className="grid">
                <button className="btn prev" onClick={onPrev}>Prev</button>
                <button className="btn next" onClick={onNext}>Next</button>
            </div>
        </div>
    )
}