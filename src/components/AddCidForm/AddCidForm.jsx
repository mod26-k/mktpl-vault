import React from 'react'
import { useState } from 'react'

export default function AddCidForm() {
    function addCid() {

    }

  return (
    <>
        <form>
            <label for='title'>title:</label>
            <input type='text' id='title' name='title'/>
            <label for='file-type'>file type:</label>
            <select id='file-type' name='file-type'>
                <option value='img'>img</option>
                <option value='txt-file'>.txt file</option>
                <option value='json'>json</option>
            </select>
            <label for='cid'>cid:</label>
            <input type='text' id='cid' name='cid'/>
            <input type='submit' value='add' onClick/>
            {/* add function to the onClick */}
            {/* should add the values to table in all cid page */}
        </form>
    </>
  )
}
