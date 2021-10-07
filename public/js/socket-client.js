// Elementos del dom

const spanOnline = document.querySelector('#spanOnline');
const spanOffline = document.querySelector('#spanOffline');
const mensajeTxt = document.querySelector('#mensajeTxt');
const btnEnviar = document.querySelector('#btnEnviar');


const socket = io();

socket.on('connect', ()=>{
    spanOnline.style.display = '';
    spanOffline.style.display = 'none'
})

socket.on('disconnect', ()=>{
    spanOnline.style.display = 'none';
    spanOffline.style.display = ''
})

socket.on('enviar-mensaje', (payload)=>{
    console.log(payload);
})

btnEnviar.addEventListener('click', ()=>{

    const mensaje = mensajeTxt.value;

    let payload = {
        mensaje,
        usuario: 'Gonzalo Moreno',
        id: 'ABC123'
    }
    socket.emit('enviar-mensaje', payload, (id) =>{
        console.log('Desde el servidor', id);
    });
})
