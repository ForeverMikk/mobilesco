import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList: [],
        totalQuantity: 0,
        productInput: "",
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
                itemExists.totalPrice += parseInt(newItem.price);
            } else {
                state.itemList.push({
                    id: newItem.id,
                    price: parseInt(newItem.price),
                    quantity: 1,
                    totalPrice: parseInt(newItem.price),
                    name: newItem.name,
                    description: newItem.description,
                    img: newItem.img,
                    productState: true
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
                state.itemList.productState = false;
                state.itemList = state.itemList.filter(item => item.id !== id);
                state.totalQuantity--;
            } else {
                itemExists.quantity--;
                itemExists.totalPrice -= parseInt(itemExists.price);
            }
        },
        deleteFromCart(state, action) {
            const id = action.payload;
            const itemExists = state.itemList.find(item => item.id === id);

            if(itemExists.quantity === 1){
                state.itemList.productState = false;
                state.itemList = state.itemList.filter(item => item.id !== id);
                state.totalQuantity--;
            } else {
                state.itemList = state.itemList.filter(item => item.id !== id);
                itemExists.quantity = 0;
                itemExists.totalPrice = 0;
                state.totalQuantity--;
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;