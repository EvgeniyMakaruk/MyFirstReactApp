import { NavLink } from 'react-router-dom'; 
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'

const Messasge = (props) => {
   return (
      <div className={s.dialog}>{props.message}</div>
   )
}



const Dialogs = (props) => {

   let dialogsElements = props.dialogs
      .map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />);

   let messagesElements = props.messages
      .map(message => <Messasge message={message.message} />)
      
      


   return (
      <div className={s.dialogsItems}>
         <div>
            {dialogsElements}
         </div>

         <div className={s.messages}>
            {messagesElements}
         </div>
      </div>

   )
}
export default Dialogs;