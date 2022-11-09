const mongoose= require('mongoose');

const connectDatabase= ()=>{
    mongoose.connect(process.env.DB_URI, {

    }).then(con=>{
        console.log(`mongoDB database connected with HOST: ${con.connection.host}`)
    })

}

module.exports= connectDatabase;