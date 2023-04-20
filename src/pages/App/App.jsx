import { useEffect, useState } from 'react'
import './App.css'
import AddCidPage from '../AddCid/AddCidPage'
import AllCidPage from '../AllCid/AllCidPage'
import AuthPage from '../AuthPage/AuthPage'
import HomePage from '../HomePage/HomePage'
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service';
import "tailwindcss/tailwind.css"
import EditCidForm from '../../components/EditCidForm/EditCidForm'

export default function App() {

  const [user, setUser] = useState(getUser())

  const [toEditData, setToEditData] = useState('')

  function updateUser(userState){
    setUser(userState)
  }

  return (
    <main className="App">

      {user ?
        <>
          <NavBar user={user} updateUser={updateUser}/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cids" element={<AllCidPage setToEditData={setToEditData}/>} />
            <Route path="/cids/new" element={<AddCidPage />} />
            <Route path="/edit" element={<EditCidForm toEditData={toEditData}/>} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={updateUser} />
      }
    </main>
  )
}

