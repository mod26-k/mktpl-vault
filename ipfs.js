import axios from 'axios'
const FormData = require('form-data')
const fs = require('fs')
const JWT = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwNzIyZDIzMy1iOTYxLTRlNDgtYTA5NS04Zjg5ZGEyMTk3OWUiLCJlbWFpbCI6ImtlbGxpcmluYXdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjM1ZGY2MTYwMTU1ZTZlZjdiZjIxIiwic2NvcGVkS2V5U2VjcmV0IjoiNGY0NTU2OGM4ODA1ZjYyMGQ3NjdlMTJmNjY3YmI4MjBmY2MyODc1Y2QyNTQ4MzRjOTYxODA0ZWIxODBjZmUyZSIsImlhdCI6MTY4MTgzNTQwMX0.F2KTySdVYjfXPaTTWkKIuV1WPQXP5X66o1c3445XW_E'

var config = {
  method: 'get',
  url: 'https://api.pinata.cloud/data/testAuthentication',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwNzIyZDIzMy1iOTYxLTRlNDgtYTA5NS04Zjg5ZGEyMTk3OWUiLCJlbWFpbCI6ImtlbGxpcmluYXdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjM1ZGY2MTYwMTU1ZTZlZjdiZjIxIiwic2NvcGVkS2V5U2VjcmV0IjoiNGY0NTU2OGM4ODA1ZjYyMGQ3NjdlMTJmNjY3YmI4MjBmY2MyODc1Y2QyNTQ4MzRjOTYxODA0ZWIxODBjZmUyZSIsImlhdCI6MTY4MTgzNTQwMX0.F2KTySdVYjfXPaTTWkKIuV1WPQXP5X66o1c3445XW_E'
  }
};

export async function connect() {
    try {
        const res = await axios(config)
        console.log(res.data)
    } catch (error) {
        console.error(error)
    }
}

const pinFileToIPFS = async () => {
    const formData = new FormData();
    const src = "path/to/file.png";
    
    const file = fs.createReadStream(src)
    formData.append('file', file)
    
    const metadata = JSON.stringify({
      name: 'File name',
    });
    formData.append('pinataMetadata', metadata);
    
    const options = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', options);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
}
