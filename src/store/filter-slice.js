import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        data: {
            input: '',
            filteredList: []
        }
    }, 
    reducers: {
        saveInput(state, action) {
            const productList = action.payload;
            
            state.data.input = productList;
            // console.log(state.data.input);
        },
        saveFiltered(state, action) {
            const productList = action.payload;
            
            state.data.filteredList = productList;
            // console.log(state.data.filteredList);
        }

    }
})

export const filterActions = filterSlice.actions;

export default filterSlice;