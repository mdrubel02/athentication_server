const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000 ;


//midle ware
app.use(express.json())


app.get('/', (req,res)=>{
    console.log('hello world')
})

app.listen(port,()=>{
    console.log('server running on port', port);
})
