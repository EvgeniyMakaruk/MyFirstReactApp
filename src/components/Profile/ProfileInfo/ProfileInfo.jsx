import Profile from '../Profile';
import s from'./ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus';

const ProfileInfo=(props)=>{
   if (!props.profile){
      return <Preloader/>
   }

   return(
      <div>
         {/* <div>
            <img src="https://clck.ru/UPH3d" alt=""></img>
         </div> */}

      <div className={s.DescriptionBlock}>
         <img src={props.profile.photos.large}/>
         <div>{props.profile.aboutMe}</div>
         <div>{'Мой twitter '+props.profile.contacts.twitter}</div>
         <ProfileStatus status='Hello world'/>
      </div>
      </div>
   )
}

export default ProfileInfo;