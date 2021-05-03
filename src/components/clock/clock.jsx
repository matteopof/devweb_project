import React, { useState }  from 'react';
import axios from 'axios';




export const Clock = (props) => {

    const [time, setTime] = useState(0)
        axios.get ( "http://worldtimeapi.org/api/timezone/Europe/Paris")
        .then (res => setTime(res.data.datetime))
    



    return (
        <div className="container row subbar spacearound clock">
           <p><strong>Time : </strong>{time}</p>
        </div>
        
        )
    

};