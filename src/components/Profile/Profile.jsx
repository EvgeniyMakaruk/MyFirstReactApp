import Post from './MyPosts/Post'
import s from './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import React from 'react'


const Profile = (props) => {
    
     let newPostElement = React.createRef();
     let addPost = () => {
          props.dispatch({type:'ADD-POST'})
     }
     let onPostChange = () => {
          let text = newPostElement.current.value;
          props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText:text});
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

export default Profile