import IO from 'socket.io-client';
import events from './SocketEvents';

const { USERSUBSCRIBED, UNSUBSCRIBREFROMGAMESESSION, USERPLAYED } = events

const io = IO()
console.log(io)

export const SubscribeToGame = (id:string)=>{
    io.emit(USERSUBSCRIBED,{_id:id})
}

