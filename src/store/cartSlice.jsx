import { createSlice } from "@reduxjs/toolkit"

let cart = createSlice({
    name : 'cart',
    initialState : 
    [
      {id : 0, name : 'White and Black', count : 2},
      {id : 2, name : 'Grey Yordan', count : 1}
    ] ,
    reducers : {
      plusNum(state, action){
        state[action.payload].count += 1
      }
    }
  })

  export let { plusNum } = cart.actions 
  
  export default cart;