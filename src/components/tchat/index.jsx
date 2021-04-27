import React, { useEffect, useState }  from 'react';
import tchat from './tchat.json';

class Comment extends React.Component { //Un Comment est composé d'un pseudo et d'un contenu
    render() {
        return React.createElement(
            "div",
            {className: 'row mt-1'},
            React.createElement("div", {className: 'bold'}, this.props.pseudo),
            React.createElement("div", {className: 'ml-2'}, this.props.content),
        );
    }
}

export const Tchat = () => {
    const allComments = tchat.map((comment) => [
        React.createElement(
            Comment, 
            { pseudo: comment["pseudo"], content: comment["comment"] }, 
            null)
        ]); //allComments contient TOUS les commentaires du fichier "tchat.json", mis sous la forme de l'objet Comment
        //COMMENTAIRE À SUPPR PLUS TARD : pour les autres components, travaillez directement sur le tableau tchat 

    const [comments, setComments] = useState([]);

    const [time, setTime] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {        
        if(time < tchat.length){
            //Les commentaires stockés dans commentsArray s'ajoutent un à un au tableau comments : 
            setTime(time + 1);

            //COMMENTAIRE À SUPPR PLUS TARD : pour les autres components, à la place de cette ligne vous faites vos traitements à vous : 
            setComments(comments.concat(allComments[time])); 
        }        
        }, 2000);
        return () => clearInterval(timer);
    });   

    return(
        <>
            <div id="tchatComponent" className="container column">
                <h2 className='upperCase mt-0 text-center'>Le Cha-Cha-Chat</h2>
                <div className="wrapper">
                    <div id='commentsSection' className="mb-2">
                        {comments.map((comment) => comment)}
                    </div>
                </div>                
            </div>
        </>
    )
};