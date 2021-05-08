import React from'react'
import{addPostActionCreator,updateNewPostText} from'../../../Redux/profile-reducer'
import Post from './Post';
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import s from './Post.module.css'
import Profile from '../Profile'


const Posts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
         props.addPost()
    }
    let onPostChange = () => {
         let text = newPostElement.current.value;
         props.updateNewPostText(text);
    }

    let postElements =
    
         props.posts.map(p => <Post
              message={p.message}
              likeCount={p.likeCount}
               />);

        
    return (
         <div>
              <ProfileInfo />
              <div>
                   <textarea ref={newPostElement}
                   onChange={onPostChange}
                   value={props.newPostText} />
              </div>
              <div>
                   <button onClick={addPost}>addPost</button>
              </div>
              <div className={s.postsBlock}>
                   {postElements}
              </div>


         </div>
    )
}

export default Posts