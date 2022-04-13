import './App.css';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Nearby from './components/nearby/Nearby';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotFoundMessage from './components/message/NotFoundMessage';
import Cookies from 'js-cookie';
import AuthApi from './AuthApi';
import LogOut from './components/logout/Logout';

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [authCookie, setAuthCookie] = useState(false);
  
  const readCookie = () => {
    const username = localStorage.getItem('user');
    const userCookie = Cookies.get(username);
    if (userCookie) {
      setAuthCookie(true);
    }
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', user);
    }
    readCookie();
  }, []);

  console.log('authCookie', authCookie)
  console.log('auths', auth)
  return (
    <>
    <AuthApi.Provider value={{authCookie, setAuthCookie}}>
    <Navbar auth={authCookie}/>
    <Routes>
      {!authCookie && (
        <>
        <Route path="" exact element={<Home />} />
        <Route
          path="/login/*"
          exact
          element={<Login auth={auth} setAuth={setAuth} user={user} setUser={setUser}/>}
        />
        <Route path="/signup/*" exact element={<Signup />} />
        </>
      )}

      {authCookie && (
        <>
        <Route path="" exact element={<Home />} />
        <Route path="/profile" element={<Profile userName={localStorage.getItem('user')}/>} />
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/logout" element={<LogOut userName={localStorage.getItem('user')} />} />
        </>
      )}
      <Route path="*" element={<NotFoundMessage eventName='Page' />} />
    </Routes>
    </AuthApi.Provider>
    </>
  );
}

 
export default App;
