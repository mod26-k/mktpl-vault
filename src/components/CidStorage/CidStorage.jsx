import React from 'react'
import { useState, useEffect } from 'react';
import './CidStorage.css'
import * as cidAPI from '../../utilities/cids-api';
import { useNavigate } from 'react-router-dom';

export default function CidStorage( {setToEditData} ) {

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState('');


    useEffect(() => {
        async function fetchData() {
        const response = await cidAPI.getAll();
        setData(response);
        }
        fetchData();
        }, []);

    async function handleEdit(evt, data) {
        try {
            setToEditData(data)
            navigate('/edit')
        } catch {
            setError('Request could not be completed - Please try again');
        }
    }
    
    async function handleDelete(evt, _id) {
       try {
            await cidAPI.deleteData(_id);
            const updatedData = await cidAPI.getAll();
            console.log(updatedData)
            setData(updatedData);
       } catch (error) {
            setError('Request could not be completed - Please try again')
       }
    }

  return (
    <div className='container'>
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
                {data.map((data) => (
                    <tr key={data.id}>
                        <td>{data.title}</td>
                        <td>{data.fileType}</td>
                        <td>{data.cid}</td>
                        <td className='options'>
                            {/* {if (user?._id.equals(item.creator)){ */}
                            {/* {if {req.user) {
                                return 
                                <button 
                                type='button'
                                onClick={handleEdit}
                            }}}
                         */}
                            <button 
                                type='button'
                                onClick={(evt) => handleEdit(evt, data)}
                            >
                                Edit
                            </button>
                            <button 
                                type='button'
                                onClick={(evt) => handleDelete(evt, data._id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
