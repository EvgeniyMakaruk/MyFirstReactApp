import Post from './MyPosts/Post'
import s from './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = () => {
     let postData=[
          {id:1, message:'Hi how are you', likeCount:12},
          {id:2, message:'It s my first post', likeCount:11}
     ]
     return (
          <div>
               <ProfileInfo />

               <div className={s.postsBlock}>
               <Post message={postData[0].message} likeCount={postData[0].likeCount} />
               <Post message={postData[1].message} likeCount={postData[1].likeCount} />
               </div>


          </div>
     )
}

export default Profile