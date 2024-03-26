// cartReducer.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++; // If item already exists, increment its quantity
      } else {
        state.items.push({...newItem, quantity: 1});
      }
      //   state.items.push(newItem);
      console.log(action.payload);
    },
  },
});

export const {addItemToCart} = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export default cartSlice.reducer;
