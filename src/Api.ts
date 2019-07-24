'use strict'
import io from 'socket.io-client';



const socket = io()

export const SubscribeToGameSession =()=>{
    socket.emit('UserSubscribed')
}