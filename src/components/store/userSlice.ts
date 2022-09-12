
import { AnyAction, createSlice, Dispatch } from '@reduxjs/toolkit';
import { AppState } from "./index"
import { HYDRATE } from "next-redux-wrapper";
import axios from 'axios';
export interface userState {
    authState: boolean,
    emailavailable: boolean,
    userInfo: {
        id: Number,
        email: String,
        password: String,
        name: String,
        role: String,
        avatar: String
    }
}
const userState = {
    authState: false,
    emailavailable: null,
    userInfo: {
        id: null,
        email: "",
        password: "",
        name: "",
        role: "",
        avatar: "",
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
            state.userInfo.id = null,
                state.userInfo.email = "",
                state.userInfo.password = "",
                state.userInfo.role = "",
                state.userInfo.name = "",
                state.userInfo.avatar = "",
                state.authState = false;
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
export async function addUser(dispatch: Dispatch<AnyAction>, name: string, email: string, password: string) {

    try {

        const response = await axios.post(`https://api.escuelajs.co/api/v1/users`,
            {
                email: email,
                name: name,
                password: password,
                role: "costumer",
                avatar: "https://mui.com/static/images/avatar/2.jpg"
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
        console.log(response.data.access_token);
        console.log(profileresponse.data);
    } catch (error) {
        console.error("something is wrong!!");

    }
}

export const userAction = userslice.actions;

export const userstates = (state: AppState) => state.user;
