import React, {useState} from 'react'
import './AddCidForm.css'
import * as cidAPI from '../../utilities/cids-api';
import { useNavigate } from 'react-router-dom';
// import { getUser } from '../../utilities/users-service';


export default function AddCidForm() {
  const [data, setData] = useState({
    title: '',
    fileType: 'img',
    cid: '',
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

  function handleChange(evt) {
    const updatedState = {...data,
      [evt.target.name]: evt.target.value}
    setData(updatedState)
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newData = await cidAPI.submit(data)
      navigate('/cids')
    }
    catch {
      setError('Request could not be completed - Please try again');
    }
  }
  
  return (
    <div className='form'>
      <h1>Add Cid</h1>
        <form onSubmit={handleSubmit}>
            <label>title:</label>
            <input 
              type='text' 
              name='title' 
              value={data.title} 
              onChange={handleChange} 
              required
            />
            <label>file type:</label>
            <select className='select'
              id='file-type' 
              name='fileType' 
              value={data.fileType}
              onChange={handleChange} 
              required
            >
                <option value='img'>img</option>
                <option value='txt'>txt</option>
                <option value='json'>json</option>
            </select>
            <label>cid:</label>
            <input type='text' 
              name='cid' 
              value={data.cid}
              onChange={handleChange} 
              required
            />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}
