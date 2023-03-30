import { configureStore } from "@reduxjs/toolkit";
import { createStoreHook } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../reducers/root-reducer";

export const store = configureStore({ reducer: rootReducer });

