import React, { useState }  from 'react';

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
      <div id='userTchat'>
          <input type="text" onChange={ (e) => handleInput(e, setPseudo) } placeholder ="Pseudo" value={pseudo}></input>
          <input type="text" onChange={ (e) => handleInput(e, setContent)} placeholder ="Type your comment here" value={content}></input>
          <button onClick={() => handleComments(pseudo, content)}>Submit</button>
          <div id="error">{errorMessage}</div>
      </div>
    )
};