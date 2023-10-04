const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors') 
const http = require("http")
const {Server} =require("socket.io")


connectToMongo();
const app = express()
const port = 5000

const server=http.createServer(app)


app.use(cors())
app.use(express.json())
app.use(express.static('uploads'))
// app.use('/public', express.static('public'));
// app.use(express.static('../MeSaynger/dist'));

app.get('/square/:number', (req, res) => {
  const { number } = req.params;

  // Spawn a Python process to execute the pythonScript.py with the provided number as an argument.
  const pythonProcess = spawn('python', ['./aiml/pythonScript.py', number]);

  let pythonOutput = '';

  pythonProcess.stdout.on('data', (data) => {
    pythonOutput += data.toString();
  });

  pythonProcess.stderr.on('data', (data) => {
    res.status(500).json({ error: data.toString() });
  });

  pythonProcess.on('close', (code) => {
    if (code === 0) {
      res.json({ result: pythonOutput });
    } else {
      res.status(500).json({ error: 'Python script execution failed.' });
    }
  });
});



// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.use('/api/images', require('./routes/images'))
// app.use('/api/chatbot', require('./routes/chatbot'))



const io = new Server(server,{
  cors:{
    origin:"http://127.0.0.1:5173",
    methods:["GET","POST"],

  }
})

io.on("connection",(socket)=>{
  console.log("User connected"+socket.id)


  socket.on("send_message",(data)=>{
    console.log(data);
    socket.broadcast.emit("receive_message",data)
  })


})

server.listen(port, () => {
  console.log(`MeSaynger backend listening at http://localhost:${port}`)
})