import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { useEffect } from 'react';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/Users-container';
import ProfileContainer from './components/Profile/ProfileContainer';
import Profile from './components/Profile/Profile';







const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer
            store={props.store} />} />
          <Route path='/profile' render={() => <ProfileContainer
            store={props.store} />} />
            
          <Route path='/users' render={() =>  <UsersContainer/>}/>

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
