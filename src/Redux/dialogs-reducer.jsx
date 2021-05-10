const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState={
   messages: [
     { id: 1, message: 'Hi' },
     { id: 2, message: 'How are you' },
     { id: 3, message: 'Hope so' },
     { id: 4, message: 'Yooo' },
     { id: 5, message: 'Yooo' }
   ],
   dialogs: [
     { id: 1, name: 'Dimych' },
     { id: 2, name: 'Andrey' },
     { id: 3, name: 'Menko' },
     { id: 4, name: 'Zisic' },
     { id: 5, name: 'Vasya' },
     { id: 6, name: 'Petya' }
   ],
   newMessageBody: ''
 }

const dialogsReducer = (state=initialState, action) => {

   let stateCopy={
      ...state
   }
   
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         stateCopy.newMessageBody = action.body
         return stateCopy
      case SEND_MESSAGE:
         let body = state.newMessageBody
         stateCopy.newMessageBody = ''
         stateCopy.messages.push({ id: 6, message: body });
         return stateCopy
         default:
            return state
   }
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer