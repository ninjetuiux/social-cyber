import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSmallScreen: false,
}

const smallScreenSlice = createSlice({
    name: 'smallScreenSlice',
    initialState,
    reducers: {
        toggleSmallScreen: (state) => {
            state.isSmallScreen = !state.isSmallScreen;
        },
    },
})

export const { toggleSmallScreen } = smallScreenSlice.actions

export default smallScreenSlice.reducer