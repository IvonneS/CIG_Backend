const express = require('express');
//server obj with http methods
const server = express();

//connecting to the database
// const db =({
//     client: "",
//     connection: {
//       host: "", //localhost
//       user: "",
//       password: "",
//       database: ""
//     }
//   });

//GET and POST calls
// server.get('/',(req, res)=>{ //root of site
//     res.send('Hello, this is working');
// // });
// server.post('/login',(req,res)=>{
//    //check if admin 
// });

server.listen(3000, () => console.log('Listening on port 3000'));




