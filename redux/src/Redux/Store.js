import {  todoReducer } from "./Reducers/Reducer";
import { createStore } from "redux";

export const store=createStore(todoReducer,window.__REDUX_DEVTOOLS_EXTENSION&&window.__REDUX_DEVTOOLS_EXTENSIONREDUX_DEVTOOLS_EXTENSION())