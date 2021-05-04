import React, { useEffect, useState }  from 'react';


export const Clock = () => {
    const [min, setMin] = useState(20);
    const [sec, setSec] = useState(50);
    useEffect(() => {
        const timer = setInterval(() => {        
        if(sec < 59){
            setSec(sec + 1);
        }
        else{
            setSec(0);
            setMin(min + 1);
        }
        


        }, 1000);
        return () => clearInterval(timer);
    });  

    
    var begintime = "";
    if(sec < 10) begintime = min + ":0" + sec;
    else begintime = min + ":" + sec;

    return (
        <div className="clock container row spacearound">
        <p> {begintime}</p>
    </div>
    );

};
