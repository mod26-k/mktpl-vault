// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://api.pinata.cloud/data/testAuthentication',
//   headers: { 
//     'Authorization': 'Bearer' + process.env.REACT_APP_PINATA_SECRET_ACCESS_TOKEN
//   }
// };

// export async function connect() {
//     try {
//         const res = await axios(config)
//         console.log(res.data)
//     } catch (error) {
//         console.error(error)
//     }
// }

// const axios = require('axios')
// const FormData = require('form-data')
// const fs = require('fs')
// const JWT = 'Bearer PASTE_YOUR_PINATA_JWT'

// const pinFileToIPFS = async () => {
//     const formData = new FormData();
//     const src = "path/to/file.png";
    
//     const file = fs.createReadStream(src)
//     formData.append('file', file)
    
//     const metadata = JSON.stringify({
//       name: 'File name',
//     });
//     formData.append('pinataMetadata', metadata);
    
//     const options = JSON.stringify({
//       cidVersion: 0,
//     })
//     formData.append('pinataOptions', options);

//     try{
//       const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
//         maxBodyLength: "Infinity",
//         headers: {
//           'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
//           Authorization: JWT
//         }
//       });
//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     }
// }
