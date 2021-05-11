import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from "./users-reducer copy";


let redusers = combineReducers({
   profilePage: profileReducer,
   messagePage: dialogsReducer,
   sidebar: sidebarReducer,
   usersPage: usersReducer
})




let store = createStore(redusers);

window.store = store

export default store;