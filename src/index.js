import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state'
import ReactDOM from 'react-dom';
import './index.css';
import React from'react'
import {addPost} from './Redux/state'
import{updateNewPotText} from'./Redux/state'
import {subscribe} from './Redux/state'


export let rerenderEntireTree=(state)=>{
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} updateNewPotText={updateNewPotText} />
  </React.StrictMode>,
  document.getElementById('root')
);}
rerenderEntireTree(state);

subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
