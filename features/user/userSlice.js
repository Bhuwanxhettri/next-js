import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users:[],
}
export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: (state,action) => {
      state.users = [...state.users,...action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { getUsers } = userSlice.actions
export default userSlice.reducer