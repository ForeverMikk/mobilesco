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
            const input = action.payload.input;
            
            
            state.data.input = input; 
        },
        saveFiltered(state, action) {
            const productList = action.payload.filteredList;
            
            state.data.filteredList = productList;
        }

    }
})

export const filterActions = filterSlice.actions;

export default filterSlice;