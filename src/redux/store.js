import { configureStore } from '@reduxjs/toolkit';
import shoeReducer from './reducers/shoeReducer';
import userReducer from './reducers/userReducer';
import cartReducer from './reducers/cartReducer';

export const store = configureStore({
  reducer: {
    shoeState: shoeReducer,
    userState: userReducer,
    cartState: cartReducer,
  },
});
