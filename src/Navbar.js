import React from 'react';
import { useSelector } from 'react-redux';
const Navbar=()=>{
    const updatedLikes=useSelector((state)=>state.counter.value);
    const comments=useSelector((state)=>state.userComment.comments);
    const subscribers=useSelector((state)=>state.newsubscriber.users);
    return(
        <>
        <div className="navbar">
            <div>
                Redux
            </div>
            <div>
                Subscribers : {subscribers.length}
            </div>
            <div>
                Comments :{comments.length}
            </div>
            <div>
                Likes : {updatedLikes}
            </div>

        </div>
        </>
    )
}
export default Navbar