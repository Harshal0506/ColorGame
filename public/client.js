
const socket=io();
socket.on('connect',()=>{
    $('#socketId').text(`${socket.id}`);
})

function colorTheBox(color){
    $(`.${color}`).css('background-color',`${color}`)
    setTimeout(()=>{
        $(`.${color}`).css('background-color','white')
    },2000)

}

$('#colorIt').click(()=>{
    const color=$('#selectedColor').val();
    socket.emit('colorClicked',{color});
})

socket.on('colorNow',(data)=>{
    colorTheBox(data.color);

})

