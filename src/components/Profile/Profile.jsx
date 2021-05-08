import Post from './MyPosts/Posts'
import s from './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import React from 'react'
import{addPostActionCreator,updateNewPostText} from'../../Redux/profile-reducer'
import MyPostContainer from './MyPosts/PostsContainer'



const Profile = (props) => {
  return <MyPostContainer></MyPostContainer>
}

export default Profile