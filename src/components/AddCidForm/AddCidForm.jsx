import React, {useState} from 'react'
import './AddCidForm.css'

export default function AddCidForm() {
  const [newCid, setNewCid] = useState({
    title: '',
    fileType: '',
    cid: '',
  });

  const [error, setError] = useState('');

  function handleChange(evt) {
    const addedCid = {...newCid, 
      [evt.target.title]: evt.target.value, 
      [evt.target.fileType]: evt.target.value, 
      [evt.target.cid]: evt.target.value}
    setNewCid(addedCid)
  }

  async function handleSubmit(newCid) {
    evt.preventDefault();

    setCid([...cids, newCid]);
    // } catch {
    //   setError('something missing?')
    // }
  }
  
  return (
    <div class='form'>
      <h1>Add Cid</h1>
        <form onSubmit={handleSubmit}>
            <label>title:</label>
            <input 
              type='text' 
              name='title' 
              value={newCid.title} 
              onChange={handleChange} 
              required
            />
            <label>file type:</label>
            <select 
              id='file-type' 
              name='file-type' 
              value={newCid.fileType}
              onChange={handleChange} 
              required
            >
                <option value='img'>img</option>
                <option value='txt-file'>.txt file</option>
                <option value='json'>json</option>
            </select>
            <label>cid:</label>
            <input type='text' 
              name='cid' 
              value={newCid.cid}
              onChange={handleChange} 
              required
            />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}
