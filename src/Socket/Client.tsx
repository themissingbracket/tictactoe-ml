import IO from 'socket.io-client';
import events from './SocketEvents';
import { GameState } from '../types/GameState';

const { USERSUBSCRIBED, UNSUBSCRIBREFROMGAMESESSION, USERPLAYED, UPDATEGAMESTATE } = events

const io = IO()
interface MutateGameState {
    (state: GameState): void
}

export const SubscribeToGame = (callback: MutateGameState, id?: string | null)=>{
    io.emit(USERSUBSCRIBED,{_id:id})
    io.on(UPDATEGAMESTATE,(state:GameState)=>{
        callback(state)
    })
}

export const UpdateGameState = (state:GameState)=>{
    io.emit(USERPLAYED,state)
}