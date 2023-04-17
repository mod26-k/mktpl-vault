import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import logo from '/public/images/mktpl vault.png';

export default function NavBar({user, updateUser}) {

  function handleLogOut(){
    userService.logOut()
    updateUser(null)
  }

  return (
    <nav class='flex-container'>
      <div class='logo'>
        <Link to="/">
          <img src={logo} alt='Logo' />
        </Link>
      </div>
      <div class='navbar-links'>
        <Link to="/cids">Stored CIDs</Link>
        &nbsp; | &nbsp;
        <Link to="/cids/new">Add CID</Link>
      </div>
      <div class='user-info'>
        <h2>Welcome, {user.name}</h2>
        <Link to='' onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  )
}

