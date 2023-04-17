import React, {useState} from 'react'
import './AddCidForm.css'

export default function AddCidForm() {
  const [newCid, setNewCid] = useState({
    title: '',
    fileType: '',
    cid: '',
  });

  const [error, setError] = useState('');

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
              onChange={(evt) => setNewCid(evt.target.value)} 
              required
            />
            <label>file type:</label>
            <select 
              id='file-type' 
              name='file-type' 
              value={newCid.fileType}
              onChange={(evt) => setNewCid(evt.target.value)} 
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
              onChange={(evt) => setNewCid(evt.target.value)} 
              required
            />
            <button type='submit'>Add</button>
            {/* add function to the onClick */}
            {/* should add the values to table in all cid page */}
        </form>
    </div>
  )
}
