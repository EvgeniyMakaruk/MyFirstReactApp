
import ProfileInfo from './ProfileInfo/ProfileInfo'
import React from 'react'
import MyPostContainer from './MyPosts/PostsContainer'



const Profile = (props) => {
  return <div>
<ProfileInfo profile={props.profile}/>
{/* <MyPostContainer/> */}
</div>
}

export default Profile