// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
// import { createWrapper } from 'next-redux-wrapper'; 
import navbarReducer from './features/NavbarSlice';
import smallScreenReducer from './features/SmallScreenSlice';

const store = configureStore({
    reducer: {
      navbar: navbarReducer,
      smallScreenSlice: smallScreenReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
  
  export default store

// export const wrapper = createWrapper(makeStore);
