import React, { useEffect, useState } from 'react';
import kissEmoji from './img/emojiKiss.png';
import happyEmoji from './img/emojiHappy.png';
import okEmoji from './img/emojiOk.png';
import badEmoji from './img/emojiBad.png';
import pukeEmoji from './img/emojiPuke.png';
import chat from '../chat/chat.json';

import _ from 'lodash';

const reacArr = [];
const Reactions = {
    kiss: 0,
    happy: 1,
    ok: 2,
    bad: 3,
    puke: 4
};
/*😍😄😉😐😖*/
const add = (comment) => {
    if (comment){
        if(comment.includes("😍")){
            reacArr.push(0);
        }
        if(comment.includes("😄")){
            reacArr.push(1);
        }
        if(comment.includes("😉")){
            reacArr.push(2);
        }
        if(comment.includes("😐")){
            reacArr.push(3);
        }
        if(comment.includes("😖")){
            reacArr.push(4);
        }
    }
    

    return (null);
};
// eslint-disable-next-line import/prefer-default-export 

export const Vote = () => {

    //console.log(nbPuke);

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds + 1);
            console.log(seconds);
            const comment = chat[seconds]["comment"];
            console.log(comment);
            if (seconds < comment.length){
                add(comment);
            }
            
            console.log(reacArr.length);
            if (comment === '😖'){
                console.log('Coucou Paulo')
            }
    }, 900);
    return () => clearInterval(interval);
});

    //console.log(_.countBy(reacArr));
    //console.log(Object.values(_.countBy(reacArr))[0]);

    const counts = _.countBy(reacArr); //Compte le nombre d'occurence dans le tableau de Réactions et en fait un Objet => { 0 : 14, 1: 3, 2: 0, 3: 10, 4 : 3} 

    const nbKiss = (Object.values(counts)[0]); //On accède aux valeurs stockées dans chaque clés 
    const nbHappy = (Object.values(counts)[1]);
    const nbOk = (Object.values(counts)[2]);
    const nbBad = (Object.values(counts)[3]);
    const nbPuke = (Object.values(counts)[4]);

    const maxSize = 200;

    const kissHeight = (nbKiss / reacArr.length) * maxSize;
    const happyHeight = (nbHappy / reacArr.length) * maxSize;
    const okHeight = (nbOk / reacArr.length) * maxSize;
    const badHeight = (nbBad / reacArr.length) * maxSize;
    const pukeHeight = (nbPuke / reacArr.length) * maxSize;



    

const [message, setMessage] = useState("");
const [displayValue, setDisplayValue] = useState("none");

useEffect(() => {
    if ((nbHappy + nbKiss) > (nbBad + nbPuke) && reacArr.length >= 10) {
        setDisplayValue("block");
        setMessage("On dirait bien que ça vous plaît !");
    }
    if ((nbHappy + nbKiss) < (nbBad + nbPuke) && reacArr.length >= 10) {
        setDisplayValue("block");
        setMessage("On va essayer de faire mieux !");
    }
});


return (
    <div className="container column vote_container">
        <div className="message" style={{ display: displayValue }}>
            <p>{message}</p>
        </div>
        <div className="voteGraph">
            <div className="bar" style={{ height: kissHeight }}></div>
            <div className="bar" style={{ height: happyHeight }}></div>
            <div className="bar" style={{ height: okHeight }}></div>
            <div className="bar " style={{ height: badHeight }}></div>
            <div className="bar" style={{ height: pukeHeight }}></div>
        </div>
        <div className="emojiGraph">
            <img src={kissEmoji} alt="kiss emoji" className="emoji" />
            <img src={happyEmoji} alt="happy emoji" className="emoji" />
            <img src={okEmoji} alt="ok emoji" className="emoji" />
            <img src={badEmoji} alt="bad emoji" className="emoji" />
            <img src={pukeEmoji} alt="puke emoji" className="emoji" />
        </div>
    </div>);

};
