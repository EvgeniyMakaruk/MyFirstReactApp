import Post from './MyPosts/Post'
import s from './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import React from 'react'


const Profile = (props) => {

let newPostElement=React.createRef();

let addPost=()=>{
     let text=newPostElement.current.value;
     props.addPost(text)
     newPostElement.current.value=''
}

let onPostChange=()=>{

}

     let postElements=
     props.posts.map(p=><Post message={p.message} likeCount={p.likeCount} addPost={props.addPost} />);


     return (
          <div>
               <ProfileInfo />
               <div>
               <textarea ref={newPostElement}
               onChange={onPostChange}
                value={props.NewPostText}/>
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