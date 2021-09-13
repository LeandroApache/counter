import {combineReducers, createStore} from "redux";
import {stateReducer} from "./state-reducer";

let rootReducer = combineReducers({
  counter: stateReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);