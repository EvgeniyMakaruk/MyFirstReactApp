import Post from './MyPosts/Post'
import'./Profile.css'
const Profile=()=>{
     return(
      <div>
      <div>
      <img src='https://clck.ru/UPH3d'></img>
      </div>

      <Post message='Hi, How are you'/>
      <Post message='It s my first post'/>
     
     
   </div>
     )
}

export default Profile