import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'


let redusers = combineReducers({
   profilePage: profileReducer,
   messagePage: dialogsReducer,
   sidebar: sidebarReducer
})




let store = createStore(redusers);

window.store=store

export default store;