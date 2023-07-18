

// console.log("hello world!");

const express = require('express');
const app = express();

app.get('/', (req, res) => {

//     console.log("Hello")
//     res.send("Hello world!");
//     res.sendStatus(500);
//     res.status(500).send("Hello world!");
//     res.status(500).json({message: 'Hello world'})
//     res.json({message: 'Hello world'})
//     res.download("server.js");
  res.sendFile(__dirname + '/index.html');
  
});

// app.get('/users', (req, res) => {
//     res.send("User List")
// })

// app.get('/users/new', (req, res) => {
//     res.send("User New Form")
// })


const userRouter =require('./routes/users')
app.use("/users", userRouter);

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
