import React from 'react'
import { useState, useEffect } from 'react';
import './CidStorage.css'
// import * as cidAPI from '../../utilities/cids-api';
// import * as Cid from '../../../models/cid'

export default function CidStorage() {

    // const [data, setData] = useState([]);

    // async function getData() {
    //     const allData = await cidAPI.getAll()
    //      return allData.map(data => {
    //         return data
    //      })
    // }

    // getData()

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await getData()
    //         setData(response)
    //     }
    //     fetchData()
    // }, [])

        // const [showButtons, setShowButtons] = useState(false)

        // const toggleButtons = () => {
        //     setShowButtons(prevState => !prevState)
        // }

 
    //           <div className='forms'>
    //             {showLogIn ? 
    //               <LoginForm setUser={setUser} setShowLogIn={setShowLogIn} />
    //               :
    //               <SignUpForm setUser={setUser}/>
    //             }
    //           </div>
    //         <button onClick={toggleForm}>
    //                 {showLogIn ? 'Sign Up?': 'Log In?'}
    //         </button>
    

  return (
    <div className='container'>
        {/* {console.log(Cid)} */}
        <h1>Cid Storage</h1>
        <table>
            <thead>
                <tr>
                    <th>title</th>
                    <th>file type</th>
                    <th>cid</th>
                </tr>
            </thead>
            <tbody>
                {/* {Cid.map((data) => (
                    <tr key={data.id}>
                        <td>{data.title}</td>
                        <td>{data.fileType}</td>
                        <td>{data.cid}</td>
                    </tr>
                ))} */}
            </tbody>
        </table>
    </div>
  )
}
