import React, { useState }  from 'react';
import axios from 'axios';



export const Clock = (props) => {

    const [time, setTime] = useState(0)
        axios.get ( "http://www.json-generator.com/api/json/get/ceYeigZtBu?indent=2"/*, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
                
            }
          }*/)
//        .then (res => setTime(res.data.datetime))
        .then (res => console.log(res))
  



    return (
        <div className="container row subbar spacearound clock">
           <p><strong>Time : </strong>{time}</p>
        </div>
        
        )
    

};