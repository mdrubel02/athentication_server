require('dotenv').config()

const mongoose = require('mongoose');

// const uri = "mongodb+srv://user01:<password>@cluster0.zjijswc.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

const bdConnection = async () => {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zjijswc.mongodb.net/?retryWrites=true&w=majority`
    return res = await mongoose.connect(uri,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useUnifiedTopology: true
     })
     console.log('MongDB connection is successful')
    
}

module.exports = bdConnection;