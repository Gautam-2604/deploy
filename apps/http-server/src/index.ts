import express from "express"
import {client} from "db/client"
const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hi there")
})

app.post("/signup",async(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const user = await client.user.create({
        data:{
            username: username,
            password: password
        }
    })
    console.log(user);
    
    res.json({
        message:"User created",
        status:201
    })

    console.log("User Created");
    

})

app.listen(8000,()=>{
    console.log('Listening on Port 8000');
    
})