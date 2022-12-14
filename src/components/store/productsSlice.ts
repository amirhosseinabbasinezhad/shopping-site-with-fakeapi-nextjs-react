
import { AnyAction, createSlice, Dispatch } from '@reduxjs/toolkit';
import { AppState } from "./index"
import { HYDRATE } from "next-redux-wrapper";
import axios from "axios";
export interface product {
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: {},

    images: String[],
    categoryId: String,


}
export interface productState {
    products: product[];
    product: product;
    categoryapi: string;
    Limit:string,
    page: number,
}
const productState = {
    products: [],
    product:{
        id: 0,
        title: "",
        price: 0,
        description: "",
        category: {},
    
        images: [],
        categoryId: "",
    
    
    } ,
    categoryapi: "0",
    Limit:"10",
    page: 1,
}
export const productSlice = createSlice({
    name: "product",
    initialState: productState,
    reducers: {
        setProducts(state, action) {

            state.products = action.payload;
        },
        setSingleProduct(state, action) {
            state.product = action.payload;
        },
        setSelects(state, action) {
            state.categoryapi = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
        setLimit(state, action) {
            state.Limit = action.payload;
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
export async function fechData(dispatch: Dispatch<AnyAction>, id: string | undefined, page: number,limit: string) {


    try {
        if (id === "0" || id === null) {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${page+1}0&limit=${limit}`);

            dispatch(productAction.setProducts(response.data))
        }
        else {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products?offset=${page+1}0&limit=${limit}`);

            dispatch(productAction.setProducts(response.data))
        }
    } catch (error) {
       
    }
}

export async function fechSingleProduct(dispatch: Dispatch<AnyAction>, id: string | string[] | undefined) {


    try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        dispatch(productAction.setSingleProduct(response.data));

       
    } catch (error) {
        
    }
}
export const productAction = productSlice.actions;

export const productslicestate = (state: AppState) => state.product;
