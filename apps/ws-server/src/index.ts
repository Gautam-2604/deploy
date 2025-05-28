import { WebSocketServer } from "ws";
import {client} from "db/client"

const wss = new WebSocketServer({port:8080})

wss.on("connection",async(socket)=>{
    await client.user.create({
        data:{
            username:Math.random.toString(),
            password:"123456"
        }
    })
    socket.send("Hi from your ws server")
})