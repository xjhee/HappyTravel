import './App.css';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Nearby from './components/nearby/Nearby';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import NotFoundMessage from './components/message/NotFoundMessage';

function App() {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);
  return (
    <>
    <Navbar />
    <Routes>
      {!auth && (
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

      {auth && (
        <>
        <Route path="" exact element={<Home />} />
        <Route path="/profile" element={<Profile userName={user}/>} />
        <Route path="/nearby" element={<Nearby />} />
        </>
      )}
      <Route path="*" element={<NotFoundMessage eventName='Page' to={auth ? "/profile" : "/login"} />} />
    </Routes>
    </>
  );
}

 
export default App;
