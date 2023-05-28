const express = require('express');
const cors = require('cors');
const bdConnection = require('./utls/bdConnect');
const app = express();
const bodyParser = require('body-parser')
const port = 5000 ;


//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
//mongodb database connection
bdConnection()


app.get('/', (req,res)=>{
   res.send('hello world')
})

app.listen(port,()=>{
    console.log('server running on port', port);
})
