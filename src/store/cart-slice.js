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
                itemExists.cantidad ++;
                itemExists.totalPrice += parseInt(newItem.price);
            } else {
                state.itemList.push({
                    id: newItem.id,
                    // price: parseInt(newItem.price),
                    cantidad: 1,
                    category: newItem.category,
                    // totalPrice: parseInt(newItem.price),
                    name: newItem.name,
                    descripcion: newItem.descripcion,
                    img: newItem.img,
                    material: newItem.material,
                    color: newItem.color,
                    images: newItem.images,
                    // productState: true
                });
                state.totalQuantity++;
            }
        },
        removeFromCart(state, action) {
            // state.changed = true
            const id = action.payload;
            const itemExists = state.itemList.find(item => item.id === id);

            // Si el item es solo uno lo borra, si es mayor a uno solo resta el total y el precio total
            if(itemExists.cantidad === 1) {
                state.itemList.productState = false;
                state.itemList = state.itemList.filter(item => item.id !== id);
                state.totalQuantity--;
            } else {
                itemExists.cantidad--;
                // itemExists.totalPrice -= parseInt(itemExists.price);
            }
        },
        deleteFromCart(state, action) {
            const id = action.payload;
            const itemExists = state.itemList.find(item => item.id === id);

            if(itemExists.cantidad === 1){
                state.itemList.productState = false;
                state.itemList = state.itemList.filter(item => item.id !== id);
                state.totalQuantity--;
            } else {
                state.itemList = state.itemList.filter(item => item.id !== id);
                itemExists.cantidad = 0;
                // itemExists.totalPrice = 0;
                state.totalQuantity--;
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;