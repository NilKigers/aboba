

const server = require('http').createServer()



const io = require('socket.io')(server, {
    cors:{
        origin: '*'

    }
})
const log = console.log



const onConnection = (socket) =>{


}

io.on('connection', onConnection)

const PORT = process.env.PORT || 5000
server.listen(PORT, ()=>
{ log(`server ready connect. Port: ${PORT}`)
})