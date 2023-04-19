import React from 'react'
import './EditCidForm.css'

export default function EditCidForm() {

    const [selectedData, setSelectedData] = useState({
        title: {selectedData},
        fileType: 'img',
        cid: '',
      })

  return (
    <form onSubmit={handleSubmit}>
            <label>title:</label>
            {/* <input 
              type='text' 
              name='title' 
              value={data.title} 
              onChange={handleChange} 
              required
            > */}
            <label>file type:</label>
            <select className='select'
              id='file-type' 
              name='fileType' 
              value={data.fileType}
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
              value={data.cid}
              onChange={handleChange} 
              required
            />
            <button type='submit'>Add</button>
        </form>
    )
}


