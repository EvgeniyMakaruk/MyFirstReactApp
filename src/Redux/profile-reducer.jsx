
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState={
   posts: [
     { id: 1, message: 'Hi how are you', likeCount: 12 },
     { id: 2, message: 'It s my first post', likeCount: 11 }
   ],
   newPostText: 'it-Kamasutra.com'

 }

const profileReducer = (state=initialState, action) => {
   switch (action.type) {
      case ADD_POST:{ let newPost = {
         id: 5,
         message: state.newPostText,
         likeCount: 0
      }
      let stateCopy={...state};
         state.posts=[...state.posts]
         stateCopy.posts.push(newPost)
         stateCopy.newPostText = ''
         return stateCopy
      }

      case UPDATE_NEW_POST_TEXT:{
         let stateCopy={...state}
         stateCopy.newPostText = action.newText;
         return stateCopy
      }
      default:
         return state
      
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostText = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer