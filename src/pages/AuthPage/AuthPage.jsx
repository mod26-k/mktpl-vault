import React from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({setUser}) {
  function toggleForm() {

  }
  return (
    <>
      {/* <button onClick={toggleForm}>Sign Up</button>
      <button onClick={toggleForm}>Log In</button> */}
      <SignUpForm setUser={setUser}/>
      <LoginForm setUser={setUser}/>
    </>
  )
}
