import { NavLink } from 'react-router-dom';
import './Header.css';
import s from './Header.module.css';

const Header = (props) => {
   return <header className='header'>
      <img src='https://clck.ru/UPF73'></img>

      <div className={s.loginBlock}>
         {props.isAuth ? props.login:
         <NavLink to={'/login'}>Login</NavLink>}
      </div>
   </header>
};
export default Header