import'./Navbar.css'

const Navbar=()=>{
     return(<nav className='nav'>
     <ul className='item'>
        <li><a href='/profile'>Profile</a></li>
        <li><a href='/dialogs'>Messages</a></li>
        <li><a href='/news'>News</a></li>
        <li><a href='/Music'>Music</a></li>
        <li><a href='/Settings'>Settings</a></li>
     </ul>
  </nav>)
}

export default Navbar