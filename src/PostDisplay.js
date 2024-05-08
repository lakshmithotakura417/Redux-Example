import React,{useState} from 'react';
import natureImage from './nature.jpg'
import NewUser from './NewUser';
import NewComment from './NewComment';
import UserForm from './UserForm';
import CommentForm from './CommentForm';
import { useDispatch } from 'react-redux';
import { increment } from './redux/counterSlice';
const PostDisplay=()=>{
    const [showUser,setShowUser]=useState(false);
    const [showComment,setShowComment]=useState(false);
    const dispatch=useDispatch(); 
    const likeHandler=()=>{
        dispatch(increment())
    }
    const subscrptionHandler=()=>{
        setShowUser(true)
    }
    const commentHandler=()=>{
        setShowComment(true)
    }
return(
   
    <div className='post-container'>
        <div className='poster'>
            <div className='poster-image'>
                <img src={natureImage} alt="no image" />
            </div>
            <div className='poster-buttons'>
                <button onClick={subscrptionHandler}>Subscribe</button>
                <button onClick={commentHandler}>Comment</button>
                <button onClick={likeHandler}>Like</button>

            </div>
            <div className="userForm">
                {showUser && <UserForm />}
                {showComment && <CommentForm />}
            </div>

        </div>
        <div className='poster-items'>
            <NewUser/>
            <NewComment/>
        </div>       

    </div>
   
    
)
}
export default PostDisplay