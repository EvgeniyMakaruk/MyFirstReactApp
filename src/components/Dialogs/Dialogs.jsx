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
   return (
      <div className={s.dialogsItems}>
         <div>
            <DialogItem name="Dimych" id="1" />
            <DialogItem name="Andrey" id="2" />
            <DialogItem name="Menko" id="3" />
            <DialogItem name="Zisic" id="4" />
         </div>

         <div className={s.messages}>
            <Messasge message="hi" />
            <Messasge message="How are you" />
            <Messasge message="Hope so" />
         </div>
      </div>

   )
}
export default Dialogs;