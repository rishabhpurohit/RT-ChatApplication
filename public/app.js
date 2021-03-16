const socket = io();
const msgText = document.querySelector('#msg');
const btnSend = document.querySelector('#btn-send');
const chatBox = document.querySelector('.chat-content');
const displayMsg = document.querySelector('.message');

let name1;
do{
    name1 = prompt("Enter your name HERE!")
}while(!name1)

document.querySelector('#your-name').textContent = name1
msgText.focus()

btnSend.addEventListener('click', (e) => {
    e.preventDefault()
    sendMsg(msgText.value)
    msgText.value = '';
    msgText.focus()
    chatBox.scrollTop = chatBox.scrollHeight;
})

const sendMsg = message => {
    let msg = {
        user:name1,
        message:message.trim()
    }

    display(msg,'you-message')

    socket.emit('sendMessage',msg)
}

socket.on('sendToAll',msg=>{
    display(msg,'other-message')
    chatBox.scrollTop = chatBox.scrollHeight;
})

const display = (msg,type) =>{
    const msgDiv = document.createElement('div')
    let className = type
    msgDiv.classList.add(className,'message-row')
    let times = new Date().toLocaleDateString()

    let innerText = `
    <div class="message-title">
        👻<span>${msg.user}</span>
    </div>
    <div class="message-text">
        ${msg.message}                            
    </div>
    <div class="message-time">
        ${times}
    </div>
    `;
    msgDiv.innerHTML = innerText;
    displayMsg.appendChild(msgDiv);
}



