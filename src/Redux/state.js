const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
  _state: {

    profilePage: {
      posts: [
        { id: 1, message: 'Hi how are you', likeCount: 12 },
        { id: 2, message: 'It s my first post', likeCount: 11 }
      ],
      newPostText: 'it-Kamasutra.com'

    },
    messagePage: {
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
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('state changed')
  },
  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },
  updateNewPotText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer
  }

  , dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagePage.newMessageBody = action.body
      this._callSubscriber(this.state)
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagePage.newMessageBody
      this._state.messagePage.newMessageBody = ''
      this._state.messagePage.messages.push({ id: 6, message: body });
      this._callSubscriber(this.state)
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostText = (text) =>
 ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
 ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })



window.store = store;
export default store;