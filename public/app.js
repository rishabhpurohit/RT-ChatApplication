const socket = io();
const msgText = document.querySelector('#msg');
const btnSend = document.querySelector('#btn-send');
const chatBOx = document.querySelector('.chat-content');
const msgText = document.querySelector('.message');

let name;
do{
    name = prompt("Enter your name HERE!")
}while(!name)

document.querySelector('#your-name').textContent = name
msgText.focus()

btnSend.addEventListener('click' ()=>{
    sendMsg(msgText.value)
})


