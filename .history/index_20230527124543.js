const express = require('express');
const cors = require('cors');
const bdConnection = require('./utls/bdConnect');
const app = express();
const port = 5000 ;



// user name: user01
// password: tZhNvg0ioERfG8TD
//midle ware
app.use(express.json())
app.use(cors())

//mongodb connection
bdConnection()


app.get('/', (req,res)=>{
   res.send('hello world')
})

app.listen(port,()=>{
    console.log('server running on port', port);
})
