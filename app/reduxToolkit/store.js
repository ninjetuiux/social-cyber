// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
// import { createWrapper } from 'next-redux-wrapper'; 
import navbarReducer from './features/NavbarSlice';

const store = configureStore({
    reducer: {
      navbar: navbarReducer, // Your reducer
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
  
  export default store

// export const wrapper = createWrapper(makeStore);
