import{rerenderEntireTree}from '../render'
let state = {

  profilePage: {
    posts: [
      { id: 1, message: 'Hi how are you', likeCount: 12 },
      { id: 2, message: 'It s my first post', likeCount: 11 }
    ],
    newPostText:'it-Kamasutra.com'

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
}
window.state=state;
export let addPost=()=>{
    let newPost={
      id:5,
      message: state.profilePage.newPostText,
      likeCount:0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree(state)
  }

  export let updateNewPotText=(newText)=>{
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state);
  }




export default state;