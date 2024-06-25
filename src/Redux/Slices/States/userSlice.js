import { createSlice } from '@reduxjs/toolkit'


const initialState = { user:null, users:[] }

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setMainUser:(state,action)=>{
            state.user = action.payload
        },
        setUsers:(state,action)=>{
            state.users.push(action.payload)
        }
    }
})


export const {setMainUser,setUsers} = userSlice.actions
export default userSlice.reducer