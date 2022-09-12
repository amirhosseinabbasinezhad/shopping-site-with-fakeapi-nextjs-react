import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userslice } from "./userSlice";
import { productSlice } from "./productsSlice";
import { createWrapper } from "next-redux-wrapper";
import { categoryslice } from "./categorySlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [userslice.name]: userslice.reducer,
      [productSlice.name]: productSlice.reducer,
      [categoryslice.name]: categoryslice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);