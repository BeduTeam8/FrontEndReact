import React, {useState} from 'react';
import PropTypes from 'prop-types';


const base_URL="https://libroverse-production.up.railway.app/";
//const URL="http://localhost:4000/"
const endPoint="users/signup"
const URL=base_URL+endPoint
console.log("URL",URL)

async function userSignUp(credentials) {
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

/*Example
  "username":"admin22",
   "firstname": "22",
   "lastname": "22",
   "address":"22",
   "email": "admin22@localhost.com",
   "userpass": "22222",
   "phonenumber": "2",*/
export default function SignUp({setToken}) {
    const [username, setUsername] = useState();
    const [userpass, setUserPass] = useState();  
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    //const [address, setAddress] = useState();
    const [email, setEmail] = useState();  
    //const [phonenumber, setPhonenumber] = useState();  

    const submitSignUp = async e => {
        e.preventDefault();
        const token = await userSignUp({
          "username":username,
          "userpass":userpass,
          "firstname": firstname,
          "lastname": lastname,
          "email": email
        });
        setToken(token);
      }

    return(
        <div className="login-wrapper">
        <h1>Please SignUp</h1>
            <form onSubmit={submitSignUp}>
            <label>
                <p>Firstname</p>
                <input type="text" onChange={e => setFirstname(e.target.value)}/>
            </label>
            <label>
                <p>Lastname</p>
                <input type="text" onChange={e => setLastname(e.target.value)}/>
            </label>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUsername(e.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setUserPass(e.target.value)}/>
            </label>
            <label>
                <p>Email</p>
                <input type="text" onChange={e => setEmail(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}

SignUp.propTypes={
    setToken: PropTypes.func.isRequired
}