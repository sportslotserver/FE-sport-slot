import { createSlice } from '@reduxjs/toolkit'

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    playerData: {},
    isLoggedIn: false
  },
  reducers: {
    setPlayerAccount: (state, action) => {
      state.playerData = action.payload
    },
    setPlayerLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    }
  },
})

export const { setPlayerAccount, setPlayerLoggedIn } = playerSlice.actions

export default playerSlice.reducer