import s from './Dialogs.module.css'

const Dialogs = (props) => {
   return (
      <div className={s.dialogsItems}>
         <ul className={s.dialog}>
            <li className={s.active}>Andrey</li>
            <li>Nikita</li>
            <li>Menko</li>
            <li>Zisic</li>
            <li>Kexta</li>
         </ul>

         <ul className={s.messages}>
            <li>Hi</li>
            <li>How are you</li>
            <li>I hope so</li>
         </ul>
      </div>

   )
}
export default Dialogs;