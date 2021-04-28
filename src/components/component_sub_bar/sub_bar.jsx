import React from 'react';

const songs = [
    {id: 1, artist: "Oasis", song: "Wonderwall"} 
    , {id: 2, artist: "The Rolling Stones", song: "Miss You"} 
    , {id: 3, artist: "The Cure", song: "Just Like Heaven"} 
    , {id: 4, artist: "U2", song: "One"} 
    , {id: 5, artist: "Bob Marley", song: "No Woman, No Cry"} 
    , {id: 6, artist: "The Beatles", song: "Help!"} 
    , {id: 7, artist: "The Who", song: "Baba O’Riley"} 
    , {id: 8, artist: "The Ronettes", song: "Be My Baby"} 
    , {id: 9, artist: "Elvis Presley", song: "Hound Dog"} 
    , {id: 10, artist: "The Kinks", song: "You Really Got Me"} 
    , {id: 11, artist: "The Clash", song: "London Calling"} 
    , {id: 12, artist: "Louis Armstrong", song: "What A Wonderful World"} 
    , {id: 13, artist: "Simon & Garfunkel", song: "The Sound Of Silence"} 
    , {id: 14, artist: "The Doors", song: "Light My Fire"} 
    , {id: 15, artist: "Ray Charles", song: "What’d I Say"} 
    , {id: 16, artist: "Aretha Franklin", song: "Respect"} 
    , {id: 17, artist: "Marvin Gaye", song: "What’s Going On"} 
    , {id: 18, artist: "Led Zeppelin", song: "Stairway To Heaven"} 
    , {id: 19, artist: "Bob Dylan", song: "Like A Rolling Stone’"} 
    , {id: 20, artist: "The Beach Boys", song: "God Only Knows"} 
    , {id: 21, artist: "Diams", song: "La boulette"} 
    , {id: 22, artist: "Chuck Berry", song: "Johnny B. Goode"} 
    , {id: 23, artist: "Nirvana", song: "Smells Like Teen Spirit"} 
    , {id: 24, artist: "The Beach Boys", song: "Good Vibrations"} 
    , {id: 25, artist: "John Lennon", song: "Imagine"} 
];

const subGoal = 40;

export default subGoal


const renderSong = (titleId) => {
    return (
        <p><strong>{songs.find(song => song.id === titleId).artist}</strong> {songs.find(song => song.id === titleId).song}</p>
    )
}

//{artiste: "Oasis", song: "Wonderwall"} , {artiste: "Diams", song: "La boulette"} 
export const SubBar = (props) => {
    return (
    <div className="container bar">
        <div className="sub_component">
            {renderSong(1)}
        </div>
        <div className="sub_component">
            <p><strong>Followers </strong>{props.followers}</p>
        </div>
        <div className="sub_component">
            <div><p><strong>Subgoal </strong>{props.subscribers}/{subGoal}</p></div>
            <div className="fixed_bar" style={{width : subGoal}}>
                <div className="moving_bar" style={{ width : ((subGoal)/subGoal)*props.subscribers}}></div>
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