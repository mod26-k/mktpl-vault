import sendRequest from "./send-request";
const BASE_URL = '/api/cids'
  


export function submit(cidData){
    return sendRequest(BASE_URL, 'POST', cidData)
  }

export function getAll(cidData){
    return sendRequest(BASE_URL, 'GET', cidData)
}

export function update(cidData){
    return sendRequest(BASE_URL, 'PUT', cidData)
}

export function deleteData(cidData){
    return sendRequest(`${BASE_URL}/${cidData}`, 'DELETE')
}