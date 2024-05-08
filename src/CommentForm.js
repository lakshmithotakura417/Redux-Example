import React,{useState} from 'react';
import { commentUser } from './redux/commentSlice';
import { useDispatch } from 'react-redux';
const CommentForm=()=>{
    const [userComment,setUserComment]=useState("");
    const dispatch=useDispatch();
    const commentHandler=(e)=>{
        setUserComment(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(userComment);
        dispatch(commentUser(userComment))
        
    }
    return(
        <div>
            <div className="user-input">
                <h4>Leave Your Comment : </h4>
               <div>
                <textarea value={userComment} onChange={commentHandler} cols='50' rows='5'/>
               </div>
                <button onClick={submitHandler}>submit</button>
            </div>

        </div>
    )
}
export default CommentForm;