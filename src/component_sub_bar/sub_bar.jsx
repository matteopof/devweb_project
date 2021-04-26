import React, { useState }  from 'react';

const songs = [
    {id: 1, song: "Oasis Wonderwall"} , {id: 2, song: "Diams La boulette"} 
];
//{artiste: "Oasis", song: "Wonderwall"} , {artiste: "Diams", song: "La boulette"} 
export const SubBar = () => {
    return (
    <div className="component">
        <div className="sub_component">
            <p>
                {Object.keys(id).map()}
            </p>
        </div>
        <div className="sub_component">
            <p><strong>SUB</strong>{}</p>
        </div>
        <div className="sub_component">
            <p><strong>SUBGOAL</strong>{}</p>
            <div className="fixed bar" style={{width : 10 }}>
                <div className="moving bar" style={{width : 5 }}></div>
            </div>
        </div>
        
    </div>
    )

};

/*
//JEANNE
class Comment extends React.Component {
  render() {
      return React.createElement(
          "div",
          {class: 'row mt-1'},
          React.createElement("div", {class: 'bold'}, this.props.pseudo),
          React.createElement("div", {class: 'ml-2'}, this.props.content),
      );
  }
}

export const UserTchat = () => {
    const [pseudo, setPseudo] = useState('Test');    
    const [content, setContent] = useState('Test');
    const [comments, setComments] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInput = (event, setter) => {setter(event.target.value);};

    const handleComments = (pseudo, content) => {
        if(!pseudo || !content) {
            setErrorMessage('Your comment is incomplete');
        }
        else{
            const newComment = comments.concat(React.createElement(Comment, { pseudo: pseudo, content: content }, null)); 
            setComments(newComment);
            setErrorMessage('');
        }
    }

    return(
      <div id='sub_bar' class="component">
          <input type="text" onChange={ (e) => handleInput(e, setPseudo) } placeholder ="Pseudo" value={pseudo}></input>
          <input type="text" onChange={ (e) => handleInput(e, setContent)} placeholder ="Type your comment here" value={content}></input>
          <button onClick={() => handleComments(pseudo, content)}>Submit</button>
          <div id="error">{errorMessage}</div>
      </div>
    )
};

//PAUL

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

*/