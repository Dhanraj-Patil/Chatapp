var online_users = 0;
// io.on('connection', socket => {

//     online_users = online_users + 1;
//     io.emit("online_users", { users_online: online_users })

//     console.log('Some client connected')
//     let room = ''

//     socket.on('login', (data) => {
//         let name = data.username
//         let password = data.password
//         con.query(`SELECT * FROM USERS WHERE BINARY USERNAME=?`, [name], (err, result, fields) => {
//             if (err) throw err;
//             try {
//                 if (result[0].PASSWORD == password) {
//                     socket.emit('login', { status: true, username: result[0].USERNAME, id: socket.id })
//                     socket.emit('user', { username: result[0].USERNAME, id: socket.id })
//                 } else {
//                     socket.emit('login', { status: false, message: "Wrong credentials" })
//                 }
//             } catch (err) {
//                 socket.emit('login', { status: false, message: "User not existing" })
//             }
//         })
//     })

//     socket.on("create_account", (data) => {
//         let name = data.name
//         let username = data.username
//         let email = data.email
//         let password = data.password
//         console.log(data)
//         con.query(`SELECT * FROM USERS WHERE USERNAME=?`, [username], (err, result, fields) => {
//             if (err) throw err;
//             try {
//                 console.log(result)
//                 if (result == "") {
//                     con.query(`INSERT INTO USERS VALUES(?,?,?,?)`, [name, username, email, password], (err, result, fields) => {
//                         if (err) throw err;
//                         console.log(result)
//                         socket.emit("create_account", { message: "created", status: true })
//                     })
//                 } else {
//                     socket.emit("create_account", { message: "Account Exists", status: false })
//                 }
//             } catch (err) {
//                 console.log(err)
//             }
//         })
//     })

//     socket.on('chat', (data) => {
//         console.log(`From client: ${data.ID}, ${data.message}`)
//         socket.emit('chat', { username: data.username, ID: data.ID, message: data.message })
//         socket.broadcast.emit('chat', { username: data.username, ID: data.ID, message: data.message })
//             // io.to(room).emit('chat', { username: data.username, ID: data.ID, message: data.message })
//             // socket.to(room).broadcast.emit('chat', { username: data.username, ID: data.ID, message: data.message })
//     })

//     socket.on('user', (data) => {
//         console.log(data + 'data')
//         socket.emit('user', { ID: socket.id })
//         room = data.Room
//             // socket.join(data.room)
//     })
//     socket.on("disconnect", () => {
//         online_users = online_users - 1;
//         io.emit("online_users", { users_online: online_users })
//     })
// })
