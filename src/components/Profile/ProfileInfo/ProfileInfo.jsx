import s from'./ProfileInfo.module.css'

const ProfileInfo=()=>{
   return(
      <div>
         <div>
            <img src="https://clck.ru/UPH3d" alt=""></img>
         </div>

      <div className={s.DescriptionBlock}>
         ava+description
      </div>
      </div>
   )
}

export default ProfileInfo;