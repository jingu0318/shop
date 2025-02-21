import { configureStore, createSlice } from '@reduxjs/toolkit'
import cart from './store/cartSlice'

let user = createSlice({
  name : 'user',
  initialState : 'kim',
  reducers : {
    changeName(state){
      return 'john ' + state
    }
  }
})

export let { changeName } = user.actions 

export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer
  }
}) 