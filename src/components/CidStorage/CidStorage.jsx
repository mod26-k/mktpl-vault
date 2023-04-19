import React from 'react'
import { useState, useEffect } from 'react';
import './CidStorage.css'
import * as cidAPI from '../../utilities/cids-api';
import { useNavigate } from 'react-router-dom';

export default function CidStorage() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
        const response = await cidAPI.getAll();
        console.log(response)
        setData(response);
        }
        fetchData();
        }, []);

    async function handleEdit(evt) {
        evt.preventDefault();
        try {
            navigate('/edit/:id')
        } catch {
            setError('Request could not be completed - Please try again');
        }
    }
    
    // async function handleDelete(evt) {
    //     evt.preventDefault();
    //     try {
    //         {cidCtrl.deleteData}
    //     } catch {
    //         setError('Request could not be completed - Please try again');
    //     }
    // }

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
                            <button 
                                type='button'
                                onClick={handleEdit}
                            >
                                Edit
                            </button>
                            <button 
                                type='button'
                                // onClick={handleDelete}
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
