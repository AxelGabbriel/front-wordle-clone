import { io } from "socket.io-client";
const socket=io('http://localhost:8000',{
    transports:[WebSocket],
    jsonp:false
})

export const startsocket=()=>{
    socket.connect()
}

export default socket



