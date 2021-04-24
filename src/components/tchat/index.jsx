import React, { useState }  from 'react';

const createComment = (pseudo, content) => (
    !pseudo || !content ? null :
    `<>
        <div>` + pseudo + `</div>
        <div>` + content + `</div>
    </>`
);

const insertComment = (parent, comment) => {
    !comment ? console.log("Your comment is incomplete") :
    parent.innerHTML += comment;
}

// eslint-disable-next-line import/prefer-default-export
export const Tchat = () => {
    const [pseudo, setPseudo] = useState('A random pseudo');
    const [content, setContent] = useState('A random comment');
    const handleInput = (event, setter) => {
        setter(event.target.value);
    };    
    
    return(
        <>
            <div className="container">
                <h2>Le Cha-Cha-Chat</h2>
                <div id="commentSection"></div>
            </div>
            <input type="text" onChange={ (e) => handleInput(e,setPseudo) } placeholder ="Pseudo" value={pseudo}></input>
            <input type="text" onChange={ (e) => handleInput(e, setContent)} placeholder ="Type your comment here" value={content}></input>
            <button onClick={() => insertComment(document.getElementById('commentSection'), createComment(pseudo, content))}>Submit</button>
        </>
    )
};