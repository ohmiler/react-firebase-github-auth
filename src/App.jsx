import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useLogin } from "./hooks/useLogin";
import { useLogout } from "./hooks/useLogout";
import { AuthContext } from "./contexts/AuthContext"

import ProfileCard from './components/ProfileCard';

function App() {

  const { login, isPending } = useLogin();
  const { logout } = useLogout();

  const { user, authIsReady } = useContext(AuthContext);
  console.log(user);

  return authIsReady ? (
    <div className="App">
        {user ? (
          <ProfileCard user={user} /> 
        ) : ( 
          <button onClick={login}>Login With GitHub</button>
        )}
    </div>
  ) : (
    <h3>Making your auth ready, please wait for a moment...</h3>
  )
}

export default App
