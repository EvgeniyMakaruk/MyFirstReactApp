import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import {updateNewMessageBodyCreator,sendMessageCreator}from'../../Redux/dialogs-reducer'


const Messasge = (props) => {
   return (
      <div className={s.dialog}>{props.message}</div>
   )
}



const Dialogs = (props) => {

   let state=props.dialogsPage;

   let dialogsElements = state.dialogs
      .map(dialogs => <DialogItem name={dialogs.name} key={dialogs.id} id={dialogs.id} />);

   let messagesElements = state.messages
      .map(message => <Messasge message={message.message} key={message.id} />)

   let newMessageBody =state.newMessageBody;

   let onSendMessageClick = () => {
      props.sendMessage()
   }
   let onNewMessageChange=(e)=>{
      let body=e.target.value
      props.updateNewMessageBody(body)
     
   }


   return (
      <div className={s.dialogsItems}>
         <div>
            {dialogsElements}
         </div>

         <div className={s.messages}>
            <div>{messagesElements}</div>
            <div>
               <div><textarea value={newMessageBody}
                  onChange={onNewMessageChange}
                  placeholder='add your message'></textarea></div>
               <div><button onClick={onSendMessageClick}>send</button></div>
            </div>
         </div>
      </div>

   )
}
export default Dialogs;