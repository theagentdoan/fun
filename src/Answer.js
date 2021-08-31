import React, { useState } from 'react';
import './Answer.css';

export default function Answer (){
const [isActive, setActive] = useState("question1");
const [isActive2, setActive2] = useState("question2");
const [isActive3, setActive3] = useState("question3");
//const [count, setCount] = useState(1);
const [isYes1, setYes1] = useState("yes");
const [isNo1, setNo1] = useState("no");
const [isYes2, setYes2] = useState("yes");
const [isNo2, setNo2] = useState("no");
const [isYes3, setYes3] = useState("yes");
const [isNo3, setNo3] = useState("no");

const handleToggle1 = () => {
      setActive(!isActive);
      setYes1(!isYes1);
};

const handleToggle2 = () => {
    setActive(!isActive);
    setNo1(!isNo1);
};

const handleToggle3 = () => {
    setActive2(!isActive2);
    setYes2(!isYes2);
};
const handleToggle4 = () => {
    setActive2(!isActive2);
    setNo2(!isNo2);
};

const handleToggle5 = () => {
    setActive3(!isActive3);
    setYes3(!isYes3);
};
const handleToggle6 = () => {
    setActive3(!isActive3);
    setNo3(!isNo3);
};


    return(
        <div>
        <button className={isActive ? "question1" : "none"} >Dodangghet, thương tao khum?</button>
        <button className={isYes1 ? "yes1" : "move"} onClick={ handleToggle1}>{isYes1 ? "yas" : "😍 cố gắng phát huy nha"}</button>
        <button className={isNo1 ? "no1" : "move"} onClick={handleToggle2}>{isNo1 ? "no" : "oke 💔"}</button>
        
        <button className={isActive2 ? "question2" : "none"} >có nhớ lần đầu gặp nhau khum?</button>
        <button className={isYes2 ? "yes2" : "move2"} onClick={handleToggle3}>{isYes2 ? "yas" : "kể nghe đi 😁"}</button>
        <button className={isNo2 ? "no2" : "move2"} onClick={handleToggle4}>{isNo2 ? "no" : "kk t cũng ko nhớ lắm"}</button>

        <button className={isActive3 ? "question3" : "none"} >thích con trai hay gái?</button>
        <button className={isYes3 ? "yes3" : "move3"} onClick={handleToggle5}>{isYes3 ? "trai" : "m gay à 😁 đùa chứ m đẻ nha"}</button>
        <button className={isNo3 ? "no3" : "move4"} onClick={handleToggle6}>{isNo3 ? "gái" : "đồ mê gái"}</button>
        </div>
        )
}

