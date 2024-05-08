import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/counterSlice';
import userReducer from './redux/userSlice'
import commentReducer from './redux/commentSlice'
export const store = configureStore({
  reducer:{
    counter:counterReducer,
    newsubscriber:userReducer,
    userComment:commentReducer
  }
})
