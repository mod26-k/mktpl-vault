import React from 'react'

export default function AddCidForm() {
    async function handleSubmit(evt) {
      evt.preventDefault();
      try{
        const cid = await cidsService.functionName(functionParamter);
        setCid(cid);
      } catch {
        setError('something missing?')
      }
    }
  return (
    <>
        <form method='POST' action='/cids'>
            <label htmlFor='title'>title:</label>
            <input type='text' id='title' name='title'/>
            <label htmlFor='file-type'>file type:</label>
            <select id='file-type' name='file-type'>
                <option value='img'>img</option>
                <option value='txt-file'>.txt file</option>
                <option value='json'>json</option>
            </select>
            <label htmlFor='cid'>cid:</label>
            <input type='text' id='cid' name='cid'/>
            <input type='submit' value='add'/>
            {/* add function to the onClick */}
            {/* should add the values to table in all cid page */}
        </form>
    </>
  )
}
