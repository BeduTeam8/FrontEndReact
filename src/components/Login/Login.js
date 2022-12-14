import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css';


const base_URL="https://libroverse-production.up.railway.app/";
//const URL="http://localhost:4000"
const endPoint="users/logIn"
const URL=base_URL+endPoint
console.log("URL",URL)

async function userLogIn(credentials) {
    return fetch(URL,{
        method: 'POST',
        withCredentials: true,
        //credentials: 'include',
        mode: "cors",
        headers: {
            'Access-Control-Allow-Credentials':'true',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            },
        body:JSON.stringify(credentials),
        
        
    })
      .then(data => data.json())
   }

export default function Login({setToken}) {
    const [username, setUsername] = useState();
    const [userpass, setUserPass] = useState();  

    const submitLogIn = async e => {
        e.preventDefault();
        const token = await userLogIn({
          "username":username,
          "userpass":userpass
        });
        setToken(token);
      }

    return(
        <div className="login-wrapper">
        <h1>Please Log In</h1>
            <form onSubmit={submitLogIn}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUsername(e.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setUserPass(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}

Login.propTypes={
    setToken: PropTypes.func.isRequired
}