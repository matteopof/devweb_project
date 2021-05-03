import React, { useEffect, useState }  from 'react';
import chat from '../chat/chat.json';

const subGoal = 40;

export const SubgoalMessage = () => {
    const [time, setTime] = useState(0);
    const [subs, setSub] = useState(0);

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
