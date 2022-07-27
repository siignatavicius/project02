import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        value: {
            users: [],
            currentuser: []
        }
    },
   
    reducers: {
        addUser: (state, action) => {
            state.value.users.push(action.payload)
        },
        updateCurrent: ({ value }, { payload }) => {
            value.currentuser = payload
        },
        updateUsers: ({value}, {payload} ) => {
            value.users = payload
        }
       
    }
})

export const { addUser, updateCurrent } = userSlice.actions
export default userSlice.reducer