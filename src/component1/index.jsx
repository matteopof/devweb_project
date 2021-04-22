import React from 'react';
import kissEmoji from './img/emojiKiss.png';
import _ from 'lodash';
const reacArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
//const reacArr = [0]
const Reactions = {
    kiss: 0,
    happy: 1,
    ok: 2,
    bad: 3,
    puke: 4
};
reacArr.push(Reactions.kiss);

console.log(_.countBy(reacArr));
console.log(Object.values(_.countBy(reacArr))[0]);

const counts = _.countBy(reacArr); //Compte le nombre d'occurence dans le tableau de Réactions et en fait un Objet => { 0 : 14, 1: 3 ....}

const nbKiss = (Object.values(counts)[0]); //On accède aux valeurs stockées dans chaque clés
const nbHappy = (Object.values(counts)[1]);
const nbOk = (Object.values(counts)[2]);
const nbBad = (Object.values(counts)[3]);
const nbPuke = (Object.values(counts)[4]);

const kissHeight = (nbKiss/reacArr.length)*200;
const happyHeight = (nbHappy/reacArr.length)*200;
const okHeight = (nbOk/reacArr.length)*200;
const badHeight = (nbBad/reacArr.length)*200;
const pukeHeight = (nbPuke/reacArr.length)*200;

console.log(nbPuke);


// eslint-disable-next-line import/prefer-default-export
export const Vote = () => (
    <div className="container">
        <div className="voteGraph">
            <div className="kiss bar" style={{height : kissHeight }}></div>
            <div className="happy bar" style={{height : happyHeight }}></div>
            <div className="ok bar" style={{height : okHeight }}></div>
            <div className="bad bar " style={{height : badHeight }}></div>
            <div className="puke bar" style={{height : pukeHeight }}></div>
        </div>
        <div className="emojiGraph">
            <img src={kissEmoji} alt="wtf" className="emoji emojiKiss" />
            <img src={kissEmoji} alt="wtf" className="emoji emojiHappy" />
            <img src={kissEmoji} alt="wtf" className="emoji emojiOk" />
            <img src={kissEmoji} alt="wtf" className="emoji emojiBad" />
            <img src={kissEmoji} alt="wtf" className="emoji emojiPuke" />
        </div>
    </div>

);
