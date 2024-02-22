import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username:"",
    email:"",
    image:"",
    isLoggedIn: false,
    token:"",
    id:"",
    favorites:[]
  },
  reducers: {
    addUser: (state,action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.image = action.payload.image;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.favorites = action.payload.favorites
      state.isLoggedIn = true;
      // localStorage.setItem("userInfo",JSON.stringify(action.payload));
      // localStorage.setItem("isLoggedIn",state.isLoggedIn);
    },
    updateUser: (state,action)=>{
      if(action.payload.action === "remove"){
        const favs = state.favorites.filter((f)=>f !== action.payload.id)
        state.favorites = favs;
      }else if(action.payload.action === "add"){
        const favs = state.favorites;
        favs.push(action.payload.id)
        state.favorites = favs;
      }
      localStorage.removeItem("userInfo")
      localStorage.setItem("userInfo",JSON.stringify(state));
    }
    // setToken:(state,action)=>{
    //   state.token = action.payload
    //   localStorage.setItem("token",action.payload);
    // }
  },
})
export const { addUser,updateUser } = userSlice.actions

export default userSlice.reducer