import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import {updateNewMessageBodyCreator,sendMessageCreator}from'../../Redux/dialogs-reducer'
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

   let state=props.store.getState().messagePage;

   
   let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator())
   }
   let onNewMessageChange=(body)=>{
      props.store.dispatch(updateNewMessageBodyCreator(body))
   }


   return (<Dialogs updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}/>)
}
export default DialogsContainer;