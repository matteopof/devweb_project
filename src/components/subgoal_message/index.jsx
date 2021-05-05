import React, { useEffect, useState }  from 'react';
import subGoal from '../sub_bar/index';
import axios from 'axios';

var chat= [];
axios.get ( "https://api.npoint.io/8fbad75c668cb9509ea2")
.then (res => chat = res.data)


export const SubgoalMessage = () => {
    const [time, setTime] = useState(0);
    const [subs, setSub] = useState(38);

    const [messagedisplay, setMessageDisplay] = useState("none");

    const increment = 0.5;
    
    useEffect(() => {
        const timer = setInterval(() => {        
        if(time < chat.length){
            console.log(subs)
            setTime(time + increment);
            if( Number.isInteger(time)){
                if(chat[time]["sub"]) { 
                    setSub(subs+1);
                } 
                if(subs >= subGoal){
                    setMessageDisplay("flex");
                }
                else
                    setMessageDisplay("none")
            }
        }       
        }, 900);
        return () => clearInterval(timer);
    });
    
    return (
        <div className="subgoal_message" style={{display:messagedisplay}}>
            <p>Subgoal atteint ! <br/> Merci à tous !</p>
        </div>
    );

};
