import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
   let path = "/dialogs/" + props.id;
   return (
      <div className={s.dialog}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>)
}

const Messasge = (props) => {
   return (
      <div className={s.dialog}>{props.message}</div>
   )
}



const Dialogs = (props) => {

   let dialogs = [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Menko' },
      { id: 4, name: 'Zisic' },
      { id: 4, name: 'Vasya' },
      { id: 6, name: 'Petya' }
   ]

   let messages = [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you' },
      { id: 3, message: 'Hope so' },
      { id: 4, message: 'Yooo' },
      { id: 5, message: 'Yooo' }
   ]

   let dialogsElements = dialogs
      .map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />);

   let messagesElements = messages
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