//This file maps my roots to my controlers

const userController=require("../controller/user.controller");

//to be able to root to fastify we will create async function

async function routes(fastify,options){
    fastify.get("/",userController.getAllUsers);
    fastify.get("/:id",userController.getUserById);
    fastify.post("/",userController.createUser);
    fastify.put('/:id',userController.updateUser);
    fastify.delete("/:id",userController.deleteUser)
}

module.exports=routes;