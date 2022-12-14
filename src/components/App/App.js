import React from 'react';
import './App.css';

import {  BrowserRouter,
          Routes, 
          Route
        } from "react-router-dom";


import Login from '../Login/Login';
import SignUp from '../../pages/SignUp';
import Logout from '../../pages/Logout';
import Results from '../../pages/Results';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import useToken from '../../hooks/useToken';

/*Move a un CustomHook
function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}
*/



function App() {
  //const [token, setToken] = useState();// going fot Storage to store token
  //const token = getToken(); //going as customHook
  const { token, setToken } = useToken(); //CustomHook

  // if(!token) {
  //   return <SignUp setToken={setToken} />
  // }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
        {/* {console.log("Token APP.js,",token)} */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/login" setToken={setToken} element={<Login/>}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" setToken={setToken} element={<Logout/>}/>
          <Route path="/results" element={<Results/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;