import Post from './MyPosts/Post'
import s from './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = () => {
     let posts = [
          { id: 1, message: 'Hi how are you', likeCount: 12 },
          { id: 2, message: 'It s my first post', likeCount: 11 },
     ]


     let postElements=
     posts.map(p=><Post message={p.message} likeCount={p.likeCount} />);


     return (
          <div>
               <ProfileInfo />

               <div className={s.postsBlock}>
                    {postElements}
               </div>


          </div>
     )
}

export default Profile