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
        { id: 4, name: 'Vasya' },
        { id: 6, name: 'Petya' }
      ]
    }
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('state changed')
  },
  addPost() {
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
}

window.store = store;






export default store;