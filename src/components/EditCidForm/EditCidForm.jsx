import React from 'react'
import './EditCidForm.css'
import { useState } from 'react'
import * as cidAPI from '../../utilities/cids-api';
import { useNavigate } from 'react-router-dom';

export default function EditCidForm({toEditData}) {
    const [selectedData, setSelectedData] = useState({
        title: toEditData.title,
        fileType: toEditData.fileType,
        cid: toEditData.cid,
      })

      const [error, setError] = useState('');
      const navigate = useNavigate()
    
      function handleChange(evt) {
        const updatedState = {...selectedData,
          [evt.target.name]: evt.target.value}
        setSelectedData(updatedState)
      }

      async function handleSubmit(evt) {
        evt.preventDefault();
        try {
          const newData = await cidAPI.update(toEditData.id, selectedData)
          navigate('/cids')
        }
        catch {
          setError('Request could not be completed - Please try again');
        }
      }

  return (
    <form onSubmit={handleSubmit}>
            <label>title:</label>
            <input 
              type='text' 
              name='title' 
              value={selectedData.title} 
              onChange={handleChange} 
              required
            />
            <label>file type:</label>
            <select className='select'
              id='file-type' 
              name='fileType' 
              value={selectedData.fileType}
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
              value={selectedData.cid}
              onChange={handleChange} 
              required
            />
            <button type='submit'>Update</button>
        </form>
    )
}


