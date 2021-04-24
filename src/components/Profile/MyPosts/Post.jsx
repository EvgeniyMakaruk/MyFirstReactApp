import s from './Post.module.css'
const Post=(props)=>{
     return(     
         <div  className={s.content}>
        <img src="https://clck.ru/UTqkU" alt=""></img>
        <div>
         {props.message}
         </div>
         </div>  
         )
         }

export default Post