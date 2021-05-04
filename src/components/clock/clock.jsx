import React, { useEffect, useState }  from 'react';
//import axios from 'axios';



export const Clock = (props) => {

    const [chat, setChat] = useState(0)

    useEffect(() => {
        fetch("https://api.npoint.io/8fbad75c668cb9509ea2")
        .then((res) => res.json)
        .then((data) => setChat(data));
    }, []);
        /*xios.get ( "https://api.npoint.io/8fbad75c668cb9509ea2", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
                
            }
          })
//        .then (res => setTime(res.data.datetime))
        .then (res => console.log(res))
  



    return (
        <div className="container row subbar spacearound clock">
           <p><strong>Time : </strong>{time}</p>
        </div>
        
        )*/
    

};