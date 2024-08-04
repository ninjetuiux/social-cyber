// redux/features/navbarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isToggled: false,
  isScrolled: false,
  wasScrolled: false,
};

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isToggled = !state.isToggled;
    },
    setIsScrolled: (state, action) => {
      state.isScrolled = action.payload;
      if (action.payload) { // If scrolling down, set wasScrolled to true
        state.wasScrolled = true;
      }else{
        state.wasScrolled = false;
      }
    },
  },
});

// Extract actions and reducer
export const { toggleMenu, setIsScrolled } = navbarSlice.actions;
export default navbarSlice.reducer;
