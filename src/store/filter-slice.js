import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        inputValue: '',
        filteredList: []
    }, 
    reducers: {
        saveFiltered(state, action) {
            const productList = action.payload.productList;
            const input = action.payload.inputValue;


            state.filteredList = productList;
            state.inputValue = input; 
        }
    }
})

export const filterActions = filterSlice.actions;

export default filterSlice;