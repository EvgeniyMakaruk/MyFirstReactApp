import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from "./users-reducer copy";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'



let redusers = combineReducers({
   profilePage: profileReducer,
   messagePage: dialogsReducer,
   sidebar: sidebarReducer,
   usersPage: usersReducer,
   auth: authReducer
})




let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;