import React from 'react'
import './CidStorage.css'

export default function CidStorage() {
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
                <tr>
                    {/* <td>{cid.title}</td>
                    <td>{cid.fileType}</td>
                    <td>{cid.cid}</td> */}
                </tr>
                <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
                <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
