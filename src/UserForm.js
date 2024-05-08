import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addUsers } from './redux/userSlice';
const UserForm=()=>{
    const [userName,setUserName]=useState("");
    const dispatch=useDispatch()
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(addUsers(userName))
        // console.log(user)
    }
return(
    <div className='user-input'>
        <h4>user name : </h4>
        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <button onClick={submitHandler}>submit</button>
    </div>
)
}
export default UserForm;