const express=require('express');
const app=express();
const http=require('http');
const server=http.createServer(app);
const socketio=require('socket.io');
const io=socketio(server);
const PORT=process.env.PORT ||4000;
//ws(web socket) is made upon http
app.use('/',express.static(__dirname+'/public'));

io.on('connection',(socket)=>{
    console.log("connection",socket.id);

    socket.on('colorClicked',(data)=>{
        console.log(data.color);
        //socket.emit --> send to the same 
        //io.emit --> send to all
        //socket.broadcast.emit --> everyone except self
        io.emit('colorNow',{color:data.color});
    })
    


})

server.listen(PORT,()=>{
   console.log('server started on http://localhost:40000'); 
})

