import React from 'react';
import { useSelector } from 'react-redux';
const NewUser=()=>{
    const subscribedUsers=useSelector((state)=>state.newsubscriber.users)
    return(
        <div>
            <h6>Subscribers : {subscribedUsers.map((item)=>{
                return <div>{item}</div>
            })}</h6>
        </div>
    )
}
export default NewUser;