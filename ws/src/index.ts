import {WebSocketServer } from 'ws'

const wss = new WebSocketServer({port: 8081})

wss.on('connection', function(socket) {
    socket.send("user connected")

    socket.on("message", (e)=>{
        const message = e.toString();
        if (message === 'ping') {
            socket.send("pong")
        }
    } )
})