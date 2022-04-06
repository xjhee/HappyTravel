import './App.css';
import Navbar from './components/Navbar'
import Home from './components/home/Home'
import Nearby from './components/nearby/Nearby'
import People from './components/people/People'
import Signup from './components/signup/Signup'
import Login from './components/login/Login';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} /> 
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/people" element={<People />} />
        <Route path="/signup/*" exact element={<Signup />} />
        <Route path="/login/*" exact element={<Login />} />
      </Routes>
    </Router>
    </>
  );
}


export default App;
