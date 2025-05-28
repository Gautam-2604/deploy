import express from "express"
import {client} from "db/client"
const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hi there")
})

app.post("/signup",(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    client.user.create({
        data:{
            username: username,
            password: password
        }
    })
    res.json({
        message:"User created",
        status:201
    })

    console.log("User Created");
    

})

app.listen(8000,()=>{
    console.log('Listening on Port 8000');
    
})