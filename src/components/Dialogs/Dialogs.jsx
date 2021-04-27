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

   let dialogsData = [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Menko' },
      { id: 4, name: 'Zisic' },
      { id: 4, name: 'Vasya' },
      { id: 6, name: 'Petya' }
   ]

   let messagesData = [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you' },
      { id: 3, message: 'Hope so' },
      { id: 4, message: 'Yooo' },
      { id: 5, message: 'Yooo' }
   ]

   return (
      <div className={s.dialogsItems}>
         <div>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
         </div>

         <div className={s.messages}>
            <Messasge message={messagesData[0].message} />
            <Messasge message={messagesData[1].message} />
         </div>
      </div>

   )
}
export default Dialogs;