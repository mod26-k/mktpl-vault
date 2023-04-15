import React from 'react'
import { useState } from 'react'
// import { checkToken } from '../../utilities/users-service'

export default function AllCidPage() {

  // async function handleCheckToken(){
  //  const expDate = await checkToken()
  //  console.log(expDate)

  const [cids, setCids] = useState({
    title: '',
    fileType: ['.txt', 'img', '.json'],
    cid: ''
  })


  return (
    <>
      
      {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
    </>
  )
}
