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
  <div className='center-button'>
    <div className='flex-container'>
      <div className='container-left'>
        <img className='logo-img' src={logo} alt='Logo' />
          <div className='app-info'>
            <h4>
              The secure storage solution for your decentralized assets. Store and manage all your CIDs in one place with our user-friendly platform.
            </h4>
          </div>
        </div>
      <div className='container-right'>
        <div className='forms'>
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
