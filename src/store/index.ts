import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {userReducer} from "./userReducer/userReducer";

export const store = createStore(userReducer, composeWithDevTools())