import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList: [],
        totalQuantity: 0,
        // showCart: false,
        // changed: false
    },
    reducers: {
        addToCart(state, action) {
            // checar si el item existe
            const newItem = action.payload;
            const itemExists = state.itemList.find((item) => item.id === newItem.id);
            
            // Si el item esta creado agregar uno nuevo, si no agregarlo
            if(itemExists) {
                itemExists.quantity ++;
                itemExists.totalPrice += newItem.price;
            } else {
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    description: newItem.description,
                    img: newItem.img,
                });
                state.totalQuantity++;
            }
        },
        removeFromCart(state, action) {
            // state.changed = true
            const id = action.payload;
            const itemExists = state.itemList.find(item => item.id === id);

            // Si el item es solo uno lo borra, si es mayor a uno solo resta el total y el precio total
            if(itemExists.quantity === 1) {
                state.itemList = state.itemList.filter(item => item.id !== id);
                state.totalQuantity--;
            } else {
                itemExists.quantity--;
                itemExists.totalPrice -= itemExists.price;
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;