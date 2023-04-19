import React from 'react'
import { useState } from 'react'
import CidStorage from '../../components/CidStorage/CidStorage'


export default function AllCidPage( {setToEditData} ) {

  return (
    <>
      <CidStorage setToEditData={setToEditData}/>

    </>
  )
}
