import React from 'react';
import { useSelector } from 'react-redux';
const NewComment=()=>{
    const newComments=useSelector((state)=>state.userComment.comments);
    console.log(newComments)
    return(
        <div>
            <h6>comments :{newComments.map((item)=>{
                return <div>{item}</div>
            })}</h6>
        </div>
    )
}
export default NewComment;