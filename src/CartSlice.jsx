import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if(existingItem){
            existingItem.quantity++;
        }else {
            state.items.push({name,image, quantity: 1});
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name != payload.name)
    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload;
        
        const existingItem = state.items.find(item => item.name === name);
        if(existingItem){
            existingItem.quantity = quantity;
        }

    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
