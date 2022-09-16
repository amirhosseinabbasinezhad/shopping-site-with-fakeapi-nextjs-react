
import { AnyAction, createSlice, Dispatch } from '@reduxjs/toolkit';
import { AppState } from "./index"
import { HYDRATE } from "next-redux-wrapper";
import axios from 'axios';
export interface cartItem {
    readonly productItem: {
        id: number,
        title: string,
        price: number,
        description: string,
        category: {},
        images: string[],
        categoryId: string,
    },
    readonly amount: number,
}

export interface userState {
    authState: boolean,
    emailavailable: boolean,
    userInfo: {
        id: number,
        email: string,
        password: string,
        name: string,
        role: string,
        avatar: string
    },
    cart: {
        items: cartItem[],
        totalAmount: number,

    }
}
const userState = {
    authState: false,
    emailavailable: null,
    userInfo: {
        id: 0,
        email: "",
        password: "",
        name: "",
        role: "",
        avatar: "",
    },
    cart: {
        items: [] as cartItem[],
        totalAmount: 0,

    }
}
export const userslice = createSlice({
    name: "user",
    initialState: userState,
    reducers: {
        isAvailable(state, action) {


            state.emailavailable = action.payload.Available;
        },
        Login(state, action) {
            console.log(action.payload);
            state.userInfo.id = action.payload.id
            state.userInfo.email = action.payload.email
            state.userInfo.password = action.payload.password
            state.userInfo.role = action.payload.role
            state.userInfo.name = action.payload.name
            state.userInfo.avatar = action.payload.avatar
            state.authState = true;
        },
        Logout(state) {
            state.userInfo.id = 0,
                state.userInfo.email = "",
                state.userInfo.password = "",
                state.userInfo.role = "",
                state.userInfo.name = "",
                state.userInfo.avatar = "",
                state.authState = false;
        },
        AddToCart(state, action) {

            if (state.cart.items.length > 0) {


                state.cart.items.map((item, index) => {
                    if (item.productItem.id === action.payload) {

                        state.cart.items[index] = { productItem: item.productItem, amount: item.amount + 1 }
                        state.cart.totalAmount = state.cart.totalAmount + state.cart.items[index].productItem.price;
                    }
                })
            }

        },
        DeletFromCart(state, action) {

            if (state.cart.items.length > 0) {


                state.cart.items.map((item, index) => {
                    if (item.productItem.id === action.payload) {

                        if (item.amount > 0) {
                            state.cart.items[index] = { productItem: item.productItem, amount: item.amount - 1 }
                            state.cart.totalAmount = state.cart.totalAmount - state.cart.items[index].productItem.price;
                        }



                    }
                })
            }

        },
        addProductToCart(state, action) {
            state.cart.items = action.payload;
        },
        setTotalAmount(state, action) {
            state.cart.totalAmount = action.payload;
        }
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
export const carthandler = (dispatch: Dispatch<AnyAction>,
    productItem: {
        id: number,
        title: string,
        price: number,
        description: string,
        category: {},
        images: string[],
        categoryId: string,
    },
    prevcart: { items: cartItem[], totalAmount: number }, amount: number) => {
    const prevItems = prevcart.items;
    let sendItems;
    const prevTotalAmount = prevcart.totalAmount;
    let newTotalAmount;
    if (prevItems.length > 0) {
        prevItems.map((item, index) => {

            if (item.productItem.id === productItem.id) {

                const sendItemss: cartItem[] = [...prevItems];
                sendItemss[index] = {
                    productItem: productItem,
                    amount: item.amount + amount,
                }

                dispatch(userAction.addProductToCart(sendItemss));
            }
            else {
                sendItems = [...prevItems, { productItem: productItem, amount: amount }];
                dispatch(userAction.addProductToCart(sendItems));
            }
            newTotalAmount = prevTotalAmount + amount * productItem.price;
            dispatch(userAction.setTotalAmount(newTotalAmount))
        })





    } else {
        sendItems = [{ productItem: productItem, amount: amount }]
        dispatch(userAction.addProductToCart(sendItems));
        newTotalAmount = 0 + amount * productItem.price;
        dispatch(userAction.setTotalAmount(newTotalAmount))
    }

}
export async function addUser(dispatch: Dispatch<AnyAction>, name: string, email: string, password: string) {

    try {

        const response = await axios.post(`https://api.escuelajs.co/api/v1/users`,
            {
                email: email,
                name: name,
                password: password,
                role: "costumer",
                avatar: "https://api.lorem.space/image/face?w=150&h=150"
            });

        LoginUser(dispatch, email, password)


    } catch (error) {
        console.error("something is wrong!!");
    }
}
export async function checkAvailable(dispatch: Dispatch<AnyAction>, email: string) {

    try {

        const response = await axios.post(`https://api.escuelajs.co/api/v1/users/is-available`,
            { email: email });

        dispatch(userAction.isAvailable({ Available: response.data.isAvailable }))
    } catch (error) {
        console.error("something is wrong!!");

    }

}
export async function LoginUser(dispatch: Dispatch<AnyAction>, email: String, password: string) {

    try {

        const response = await axios.post(`https://api.escuelajs.co/api/v1/auth/login`,
            {
                email: email,
                password: password,
            }
        );
        const profileresponse = await axios.get(`https://api.escuelajs.co/api/v1/auth/profile`,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${response.data.access_token}`
                }
            },)
        dispatch(userAction.Login(profileresponse.data))

    } catch (error) {
        console.error("something is wrong!!");

    }
}

export const userAction = userslice.actions;

export const userstates = (state: AppState) => state.user;
