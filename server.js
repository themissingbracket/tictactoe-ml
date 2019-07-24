const express = require('express');

const uuid = require('uuid/v4')
const app = express()
// const session = require('express-session');
const logger = require('./Logger');
app.use(require('express-winston').logger(logger))

const http  = require('http').createServer(app)
const socket = require('socket.io')(http)

const db = new (require('nedb'))({
    filename:"session.db"
})
db.loadDatabase(err=>err&&console.log(err))


const CurrentGame={}
const createGame = ()=>(
    {
        Blocks:Array(9).fill(null),
        winningHand:[],
        gameOver:false,
        currentPlayerX:false
    }
)

socket.on('connect',client=>{
    client.on('UserSubscribed',sock=>{
        logger.debug(`User Subscibed`)
        // console.log(sock)
        // const {gameid} = sock
        if (!sock || !sock.gameId){
            // console.log("gameid")
            const _id = uuid()
            const game = createGame()
            CurrentGame[_id] = { ...game,players: [client.id] ,_id}
            logger.debug("Socket Emit")
            socket.emit("UpdateState",{_id,...game})
        }else{
            const game = {...CurrentGame[sock.gameId]}||createGame()
            // delete game['players']
            // console.log(CurrentGame[sock.gameId])
            CurrentGame[sock.gameId].players.push(client.id)
            logger.debug("Socket Emit")
            socket.emit("UpdateState", CurrentGame[sock.gameId])
        }
        
        // client.br
    })
    client.on('UnSubScribeFromGameSession',socket=>{
        logger.debug(`${client.id} has unsubscribed`)
        // client.leave()
    })
    client.on('disconnect',sock=>{
        logger.debug('A user has disconnected');
    })
    client.on('User Played', ({ _id, blocks }) => {
        logger.debug("User Has Played")        
        CurrentGame[_id] = CheckGame({ ...CurrentGame[_id], Blocks: blocks })
        // console.log(CurrentGame[_id])
        // CurrentGame[_id].currentPlayerX = !CurrentGame[_id].currentPlayerX
        socket.emit("UpdateState", CurrentGame[_id])
    })
    
})

const CheckGame = ({
    Blocks,
    winningHand,
    gameOver,
    currentPlayerX,...rest})=>{
    const sequence= [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    const blocks = sequence.map(seq=>Blocks.filter((b,idx)=>seq.includes(idx)&&b))
    const winner= blocks.find(val => isEqual(val))
    const winningSequence = winner && sequence[blocks.indexOf(winner)] 
    return {
        Blocks,
        winningHand:winningSequence||[],
        gameOver:winningSequence?true:false,
        currentPlayerX:!currentPlayerX,
        ...rest
    }
    
}
// express.

const isEqual= (array) => array.length === 3 ? array.every((a) => a === array[0]) : false

const Router = express.Router()
Router.get('/',(req,res,next)=>{

    const {_id} = req.query
    res.status(200).json(CurrentGame)
})

app.use('/',Router)

// const createStore = ()=>(
//     {
//         grid:Array(9).fill(null)
//     }
// )


const PORT = 3030


http.listen(PORT,()=>logger.info(`APP is running on PORT ${PORT}`))