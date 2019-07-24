const express = require('express');


const app = express()
// const session = require('express-session');

const http  = require('http').createServer(app)
const socket = require('socket.io')(http)

const db = new (require('nedb'))({
    filename:"session.db"
})
db.loadDatabase(err=>err&&console.log(err))

// app.use(session({
//     secret:'KPKmTwwiAM'
// }))

socket.on('connect',client=>{
    console.log('client')
})
// express.


// const createStore = ()=>(
//     {
//         grid:Array(9).fill(null)
//     }
// )


const PORT = 3030


http.listen(PORT,()=>console.log(`APP is running on PORT ${PORT}`))