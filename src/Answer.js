import React, { useState } from 'react';
import './Answer.css';

export default function Answer (){
const [isActive, setActive] = useState("question1");
const [count, setCount] = useState(1);
const [isYes, setYes] = useState("yes");
const [isNo, setNo] = useState("no");

const handleToggle1 = () => {
      setActive(!isActive);
};

const handleToggle2 = () => {
    setYes(!isYes);
};

const handleToggle3 = () => {
    setNo(!isNo);
};
    return(
        <div>
        <button className={isActive ? "question1" : "none"} >You love me?</button>
        <button className={isYes ? "yes" : "move"} onClick={handleToggle2}>{isYes ? "yes" : "I love you too"}</button>
        <button className={isNo ? "no" : "move"} onClick={handleToggle3}>{isNo ? "no" : "Still love you babe"}</button>
        
        </div>
        )
}

