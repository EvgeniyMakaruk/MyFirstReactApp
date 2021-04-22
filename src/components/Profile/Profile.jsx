import Post from './MyPosts/Post'
import'./Profile.css'
const Profile=()=>{
     return(
      <div className='content'>
      <div>
      <img src='https://clck.ru/UPH3d'></img>
      </div>

      <Post/>
      <Post/>
      <Post/>
   </div>
     )
}

export default Profile