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

//
const userRoutes = require('./routes/user.routes')

//api routes
app.get('/', (req,res)=>{
   res.send('hello world')
})

app.post('/user',(req,res)=>{
    const user = req.body;
    console.log(user);
})

app.use('/api/v1/user/', userRoutes)

app.listen(port,()=>{
    console.log('server running on port', port);
})
