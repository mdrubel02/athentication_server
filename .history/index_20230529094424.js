const express = require('express');
const cors = require('cors');
const bdConnection = require('./utls/bdConnect');
const app = express();
const passport = require('passport')
const bodyParser = require('body-parser')
const passportConfig = require('./config/passport')
const port = 5000 ;


//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize())
passportConfig(passport)

//mongodb database connection
bdConnection()

//
const userRoutes = require('./routes/user.routes')
const homeRoutes = require('./routes/home.routes')

//api routes
app.get('/', (req,res)=>{
   res.send('hello world')
})

//
app.use('/api/v1/user/', userRoutes)
app.use('/api/v1/home/', homeRoutes)

app.listen(port,()=>{
    console.log('server running on port', port);
})
