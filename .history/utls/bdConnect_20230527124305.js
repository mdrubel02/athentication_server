require('dotenv').config()



// const uri = "mongodb+srv://user01:<password>@cluster0.zjijswc.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

const bdConnection = ()=>{
console.log(process.env.DV-USER)
}

module.exports = bdConnection;