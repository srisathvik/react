import { createSlice } from "@reduxjs/toolkit";
// import items from ".";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers:{
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;
            }
            state.totalQuantity++;
        },

        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if(existingItem.quantity > 1){
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
            else{
                state.items = state.items.filter(item => item.id !== id);
            }
            state.totalQuantity--;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;