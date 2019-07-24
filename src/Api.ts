
import io from 'socket.io-client';
import { GameState } from './Types'

interface callbackInterface{
    (state:GameState):void
}
interface gameState{

}
const socket = io()

export const SubscribeToGameSession = (callback: callbackInterface,_id?:string|null)=>{
    socket.emit('UserSubscribed',{gameId:_id})
    socket.on('UpdateState', (gamestate: GameState)=>{console.log("update game")
        callback(gamestate)
    })

}

export const UnSubScribeFromGameSession = ()=>{
    socket.emit('Disconnect')
}

export const UpdateGame = (_id:string,blocks:string[])=>{
    socket.emit("User Played",{_id,blocks})
}