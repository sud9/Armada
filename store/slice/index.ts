import {configureStore, combineReducers} from '@reduxjs/toolkit';
import Dataslice from './Dataslice';
import Cartslice from './Cartslice';

const store = configureStore({
  reducer: {
    data: Dataslice,
    cart: Cartslice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
