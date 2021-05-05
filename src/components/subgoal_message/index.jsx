import React, { useEffect, useState }  from 'react';
import subGoal from '../sub_bar/index';
import axios from 'axios';
var chat= [];
axios.get ( "https://api.npoint.io/8fbad75c668cb9509ea2")
.then (res => chat = res.data)


export const SubgoalMessage = () => {
    const [time, setTime] = useState(0);
    const [subs, setSub] = useState(28);
    const [messagedisplay, setMessageDisplay] = useState("none");    
    const [toggleDisplay, setToggleDisplay] = useState("hiden");    
    
    useEffect(() => {
        const timer = setInterval(() => {        
        if(time < chat.length){
            console.log(subs)
            setTime(time + 1);
            if(chat[time]["sub"]) { 
                setSub(subs+1);
            } 
            if(subs >= subGoal){
                // setMessageDisplay("flex");
                setToggleDisplay("displayed")
            }
            else{
                // setMessageDisplay("none")
                setToggleDisplay("hiden");
            }
            
        }       
        }, 900);
        return () => clearInterval(timer);
    });
    
    return (
        <div className={toggleDisplay} id="subgoal_message">
            <p>Subgoal atteint ! <br/> Merci à tous !</p>
        </div>
    );

};
