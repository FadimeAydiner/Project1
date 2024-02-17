const fastify=require('fastify')({logger:true});
const mongoose=require('mongoose');
require('dotenv').config({path:'./.env'});

//Import my routes
const userRoutes=require("./routes/user.routes");
const { schema } = require('./models/user.model');

//Connect to my database
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(()=>{console.log("Connected to the database");
                    mongoose.model('User',schema);})
.catch((e)=>console.log("Error connecting to database",e));

//Start my sever
fastify.register(userRoutes,{prefix:"/api/v1/users"});

const start=async()=>{
    try{
        await fastify.listen(process.env.PORT || 5000);
        fastify.log.info(
            `Server is running on port ${fastify.server.address().port}`
        );
    }
    catch(error){}
};

start();
