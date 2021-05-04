import React, { useEffect, useState }  from 'react';
import axios from 'axios';

var chat= [];
axios.get ( "https://api.npoint.io/8fbad75c668cb9509ea2")
  .then (res => chat = res.data)


const Comment = ( pseudo, content) => (
    <div className='mt-1'>
        <span className='bold'>
            {pseudo} :
        </span>
        {' ' + content}
    </div>
);

const SubComment = (pseudo) => (
    <div className='mt-1'>
        <span className='bold'>
            {pseudo} s'est abonné ! 
        </span>
    </div>
);

export const Chat = () => {
    const allComments = chat.map((comment) => [
        comment["sub"] === undefined ? Comment(comment["pseudo"],comment["comment"])     
        : ( comment["sub"] ? SubComment(comment["pseudo"]) : null)
    ]);

    const [comments, setComments] = useState([]);

    const [time, setTime] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {        
        if(time < chat.length){
            //Les commentaires stockés dans commentsArray s'ajoutent un à un au tableau comments : 
            setTime(time + 1);
            setComments(comments.concat(allComments[time]));
        }

        }, 900);
        return () => clearInterval(timer);
    });   

    return(
        <>
            <div id="tchatComponent" className="container column">
                <h2 className='upperCase mt-0 text-center'>Le cha-cha-chat !</h2>
                <div className="wrapper">
                    <div id='commentsSection' className="mb-2">
                        {comments.map((comment) => comment)}
                    </div>
                </div>                
            </div>
        </>
    )
};