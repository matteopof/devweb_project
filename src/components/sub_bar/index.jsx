import React, { useEffect, useState }  from 'react';
import axios from 'axios';

var chat= [];
axios.get ( "https://api.npoint.io/8fbad75c668cb9509ea2")
.then (res => chat = res.data)

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

const subGoal = 3;

export default subGoal


const renderSong = (titleId) => {
    return (
        <p><strong>{songs.find(song => song.id === titleId).artist}</strong> {songs.find(song => song.id === titleId).song}</p>
    )
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const SubBar = (props) => {
    const [followers, setFollow] = useState(0)
    const [subscribers, setSub] = useState(38)
    const [musicId, setMusic] = useState(1)
    const [time, setTime] = useState(0);

    const follow = () => {
        let number = followers + getRandomInt(-2,5)
        if(number>=0) setFollow(number)
    }

    const subscribe = () => {
        if(subscribers < subGoal) setSub(subscribers + 1)
    }

    const unsubscribe = () => {
        if(subscribers>0) setSub(subscribers - 1)
    }

    
    const increment = 0.5;
    const musictiming = 10;
    
    useEffect(() => {
        const timer = setInterval(() => {        
        if(time < chat.length){
            
            
            
            setTime(time + 1);
            console.log(chat[time]);
            if(chat[time]["sub"]) { 
                subscribe();
            }
            else if(chat[time]["sub"] === false){
                // unsubscribe();
            }
                 
            follow();
            
            if(time%musictiming===0){
                setMusic(getRandomInt(1,songs.length-1));
            }
            
        }       
        }, 900);
        return () => clearInterval(timer);
    });

    return (
    <div className="container row subbar spacearound">
        <div className="sub_component">
            {renderSong(musicId)}
        </div>
        <div className="sub_component">
            <p><strong>Followers </strong>{followers}</p>
        </div>
        <div className="sub_component">
            <div><p><strong>Subgoal </strong>{subscribers}/{subGoal}</p></div>
            <div className="fixed_bar" style={{width : subGoal*2}}>
                <div className="moving_bar" style={{ width : ((subGoal*2)/subGoal)*subscribers}}></div>
            </div>
        </div>
    </div>
    
    )

};
