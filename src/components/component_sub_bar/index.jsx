import React, { useState } from 'react';
import {SubBar} from './sub_bar';
import subGoal from './sub_bar';

export const SubBarInterface = () => {
    const [followers, setFollow] = useState(0)
    const [subscribers, setSub] = useState(0)
    const [musicId, setMusic] = useState(1)

    const follow = () => {
        setFollow(followers + 1)
    }

    const unfollow = () => {
        if(followers>0) setFollow(followers - 1)
    }

    const subscribe = () => {
        if(subscribers < subGoal) setSub(subscribers + 1)
    }

    const unsubscribe = () => {
        if(subscribers>0) setSub(subscribers - 1)
    }

    return(
        <div id='userinterface'>
            <SubBar followers={followers} subscribers={subscribers}/>
            <button onClick={() => follow()}>Follow</button>
            <button onClick={() => unfollow()}>Unfollow</button>
            <button onClick={() => subscribe()}>Subscribe</button>
            <button onClick={() => unsubscribe()}>Unsubscribe</button>
            <select name="education">
                <option>Choisir</option>
	        </select><br />
        </div>
    )
}