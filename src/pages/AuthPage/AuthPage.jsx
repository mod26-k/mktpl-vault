import React from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import logo from '/public/images/mktpl vault.png';
import { useState } from 'react';
import './AuthPage.css'

export default function AuthPage({setUser}) {
  const [showLogIn, setShowLogIn] = useState(false)

  const toggleForm = () => {
    setShowLogIn(prevState => !prevState)
  }

return (
  <div class='center-button'>
    <div class='flex-container'>
      <div class='container-left'>
        <img class='logo-img' src={logo} alt='Logo' />
          <div class='app-info'>
            <h4>
              The secure storage solution for your decentralized assets. Store and manage all your CIDs in one place with our user-friendly platform.
            </h4>
          </div>
        </div>
      <div class='container-right'>
        <div class='forms'>
          {showLogIn ? 
            <LoginForm setUser={setUser} setShowLogIn={setShowLogIn} />
            :
            <SignUpForm setUser={setUser}/>
          }
        </div>
      </div>
    </div>
      <button onClick={toggleForm}>
              {showLogIn ? 'Sign Up?': 'Log In?'}
      </button>
  </div>
  )
}
