
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from "./index"
import { HYDRATE } from "next-redux-wrapper";
export interface categorys {
    showSelects: boolean,

}
const categorys = {
    showSelects: false,

}
export const categoryslice = createSlice({
    name: "filters",
    initialState: categorys,
    reducers: {
        showSelectHandler(state) {
            state.showSelects = !state.showSelects;
        },

    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },

})
export const categoryAction = categoryslice.actions;

export const categoryStates = (state: AppState) => state.filters;