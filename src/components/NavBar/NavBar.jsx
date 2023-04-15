import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, updateUser}) {

  function handleLogOut(){
    userService.logOut()
    updateUser(null)
  }

  return (
    <nav>
      <Link to="/cids">Stored CIDs</Link>
      &nbsp; | &nbsp;
      <Link to="/cids/new">Add CID</Link>
      <h2>Welcome, {user.name}</h2>
      <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}

