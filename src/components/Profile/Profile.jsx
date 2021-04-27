import Post from './MyPosts/Post'
import s from './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = () => {
     return (
          <div>
               <ProfileInfo />

               <div className={s.postsBlock}>
               <Post message='Hi, How are you' />
               <Post message='It s my first post' />
               </div>


          </div>
     )
}

export default Profile