import IO from 'socket.io';
import http from 'http'
import events from './SocketEvents';
import { GameState } from '../shared/Types';

export default (server:http.Server)=>{
    const { USERSUBSCRIBED,UNSUBSCRIBREFROMGAMESESSION,USERPLAYED } = events
    const io = IO(server)
    io.on('connection',socket=>{
        console.log('New Client connected')
        socket.on(USERSUBSCRIBED,client=>{
            console.log("New User has joined")
        })
        socket.on('disconnected',cl=>{
            console.log('Client has disconnected')
        })
    })
}

export const createStore=()=>(
    {
        Blocks: [] as string[], 
        winningHand: [] as number[],
        gameOver: false, 
        currentPlayerX: false 
    }
)

// const CreateStore = ()=>{
//     {
//         Blocks: Array(9).fill(null),
//         winningHand: [],
//         gameOver: false,
//         currentPlayerX: false
//     }
// }

