import React, {useState} from 'react'
import './AddCidForm.css'

export default function AddCidForm() {
  const [data, setData] = useState({
    title: '',
    fileType: '',
    cid: '',
  });

  const [newData, setNewData] = useState('');

  const [error, setError] = useState('');

  function handleChange(evt) {
    const updatedState = {...newData, 
      [evt.target.name]: evt.target.value}
    setNewData(updatedState)
  }

  function addData() {
    setData([...data, newData])
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addData(newData)
    setNewData('');
  }
  
  return (
    <div className='form'>
      <h1>Add Cid</h1>
        <form onSubmit={handleSubmit}>
            <label>title:</label>
            <input 
              type='text' 
              name='title' 
              value={newData.title} 
              onChange={handleChange} 
              required
            />
            <label>file type:</label>
            <select 
              id='file-type' 
              name='fileType' 
              value={newData.fileType}
              onChange={handleChange} 
              required
            >
                <option value='img'>img</option>
                <option value='txt'>.txt file</option>
                <option value='json'>json</option>
            </select>
            <label>cid:</label>
            <input type='text' 
              name='cid' 
              value={newData.cid}
              onChange={handleChange} 
              required
            />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}
