
import { connect } from 'react-redux'
import { addPostActionCreator, updateNewPostText } from '../../../Redux/profile-reducer'
import Posts from './Posts'





const mapStateToProps = (state) => {
     return {
          posts: state.profilePage.posts,
          newPostText: state.profilePage.newPostText
     }
}

const mapDispatchToProps = (dispatch) => {
     return {
          updateNewPostText: (text) => {
               let action = updateNewPostText(text)
               dispatch(action)
          },
          addPost: () => {
               dispatch(addPostActionCreator())
          }
     }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default MyPostContainer