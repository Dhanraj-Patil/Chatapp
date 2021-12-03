const socket = io()

let userName = ''
let id = ''

const Name = document.querySelector('.username')
const pass = document.querySelector('.password')
const login_form = document.querySelector('.sign-in')

login_form.addEventListener("click", (event) => {
    event.preventDefault()
    socket.emit('login', { username: Name.value, password: pass.value })
})


socket.on('login', (data) => {
    console.log("i was here")
    if (data.status == true) {
        id = data.id
        userName = data.username
        user(userName)
        console.log(data)
        window.location = "/chat/chat.html"
    } else {
        alert(data.message)
    }
})

var user = (user) => {
    var User = {
        username: user
    }
    window.localStorage.setItem('user', JSON.stringify(User))
}