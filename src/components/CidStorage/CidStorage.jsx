import React from 'react'
import './CidStorage.css'
// import cid from '../../../models/cid'

export default function CidStorage() {
  return (
    <div>
        <h1>Cid Storage</h1>
        <table>
            <tr>
                <th>title</th>
                <th>file type</th>
                <th>cid</th>
            </tr>
            {/* <tr>
                <td>{cid.title}</td>
                <td>{cid.fileType}</td>
                <td>{cid.cid}</td>
            </tr> */}
        </table>
    </div>
  )
}
