import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/dialogs-reducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
   return {
      dialogsPage: state.messagePage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: () => {
         dispatch(sendMessageCreator())
      },

      updateNewMessageBody: (body) => {
         dispatch(updateNewMessageBodyCreator(body))
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;