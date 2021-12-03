const socket = io()

const chat = document.querySelector('.chat-submit')
const input = document.querySelector('.chat_input')

let userName = ''
let id = ''
let room = ''


let admin = JSON.parse(localStorage.getItem('user'))
console.log(admin)
userName = admin.username
console.log(userName)
socket.emit('user', { username: userName, Room: room })


socket.on('user', (data) => {
    id = data.ID;
    console.log(data)
})

chat.addEventListener("click", (event) => {
    event.preventDefault()
    socket.emit('chat', { username: userName, ID: id, message: input.value })
    input.value = ''
})

const chatWindow = document.querySelector('.chat_window')

const renderMessage = (data) => {
    const div = document.createElement('div')
    div.innerText = `${data.username}: ${data.message}`
    chatWindow.appendChild(div)

    if (data.ID == id) {
        div.classList = "render_message right"
        div.style.background = 'rgb(228, 182, 182)'
    } else {
        div.classList = "render_message left"
        div.style.background = 'rgb(186, 186, 228)'
    }

}


socket.on('chat', (data) => {
    console.log(`From Server: ${data.ID}, ${data.message}`)
    renderMessage({ username: data.username, ID: data.ID, message: data.message })
})