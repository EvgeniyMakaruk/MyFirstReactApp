import React from 'react'
import styles from './users.module.css'


let Users = (props) => {

   if(props.users.length===0){
   props.setUsers([ { id: 1, photoUrl: 'https://clck.ru/UkAcL', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
   { id: 2, photoUrl: 'https://clck.ru/UkAcL', followed: true, fullName: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
   { id: 3, photoUrl: 'https://clck.ru/UkAcL', followed: false, fullName: 'Andrew', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ucraine' } }
])}

   return (
      <div>
         {
            props.users.map(u => <div key={u.id}>
               <span>
                  <div>
                     <img className={styles.userPtoto} src={u.photoUrl}></img>
                  </div>
                  <div>
                     {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                        <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                  </div>
               </span>

               <span>
                  <span>
                     <div>{u.fullName}</div>
                     <div>{u.status}</div>
                  </span>
                  <span>
                     <div>{u.location.country}</div>
                     <div>{u.location.city}</div>
                  </span>
               </span>

            </div>)
         }
      </div>
   )
}
export default Users
