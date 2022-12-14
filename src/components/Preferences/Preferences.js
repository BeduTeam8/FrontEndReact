import React from 'react';
import Login from '../Login/Login';
import useToken from '../../hooks/useToken';

export default function Preferences() {
  const { token, setToken } = useToken(); //CustomHook
  if(!token) {
    return <Login setToken={setToken} />
  }
  return(
    <h2>Preferences</h2>
  );
}