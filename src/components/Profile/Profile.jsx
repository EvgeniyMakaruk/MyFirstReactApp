import Post from './MyPosts/Post'
import s from './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {



     let postElements=
     props.posts.map(p=><Post message={p.message} likeCount={p.likeCount} />);


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