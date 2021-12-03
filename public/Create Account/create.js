const socket = io()

const usersname = document.querySelector('.name')
const email = document.querySelector('.room')
const Name = document.querySelector('.username')
const pass = document.querySelector('.password')
const signup = document.querySelector('.create_account')

signup.addEventListener('submit', (event) => {
    event.preventDefault()
    socket.emit('create_account', { name: usersname.value, username: Name.value, email: email.value, password: pass.value })
    console.log("testing account creation")
})

socket.on("create_account", (data) => {
    alert(data.message)
    if (data.status == true) {
        usersname.value = ""
        email.value = ""
        Name.value = ""
        pass.value = ""
        signup.value = ""
    }
})