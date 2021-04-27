import React, { useState }  from 'react';
import tchat from './tchat.json';

class Comment extends React.Component {
    render() {
        return React.createElement(
            "div",
            {class: 'row mt-1'},
            React.createElement("div", {className: 'bold'}, this.props.pseudo),
            React.createElement("div", {className: 'ml-2'}, this.props.content),
        );
    }
}

export const Tchat = () => {
    const [pseudo, setPseudo] = useState('Test');    
    const [content, setContent] = useState('Test');
    const commentsArray = tchat.map((comment) => [React.createElement(Comment, { pseudo: comment["pseudo"], content: comment["comment"] }, null)]);
    const [comments, setComments] = useState(commentsArray);
    const [errorMessage, setErrorMessage] = useState('');
    // const maxComments = 9;

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
    
    // const addComment(pseudo, content) =>
    // const commentsTest = [];

    // handleComments('test', 'test');
    // tchat.map((comment) => addComment('test','test'));

    return(
        <>
            <div id="tchatComponent" className="container w-20">
                <h2 className='upperCase mt-0 text-center'>Le Cha-Cha-Chat</h2>
                <div id='commentsSection'>
                    {comments.map((comment) => comment)}
                </div>
            </div>
            {/* <div id='userTchat'>
                <input type="text" onChange={ (e) => handleInput(e, setPseudo) } placeholder ="Pseudo" value={pseudo}></input>
                <input type="text" onChange={ (e) => handleInput(e, setContent)} placeholder ="Type your comment here" value={content}></input>
                <button onClick={() => handleComments(pseudo, content)}>Submit</button>
                <div id="error">{errorMessage}</div>
            </div> */}
        </>
    )
};