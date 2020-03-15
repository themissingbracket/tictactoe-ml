import IO from 'socket.io'
import http from 'http'
import events from './SocketEvents'
import { GameState } from '../shared/Types'
import GameEngine from '../core/GameEngine'


export default (server:http.Server)=>{
	const { USERSUBSCRIBED, UNSUBSCRIBREFROMGAMESESSION, USERPLAYED, UPDATEGAMESTATE } = events
	const io = IO(server)
	io.on('connection',socket=>{
		console.log('New Client connected')
		socket.on(USERSUBSCRIBED,async(client)=>{
			const {_id} = client
			const state = _id?await GameEngine.getGame(_id):await GameEngine.createStore()
			socket.emit(UPDATEGAMESTATE,state)
			socket.join(state._id)
		})
		socket.on(USERPLAYED,async(state)=>{
			const newState = await GameEngine.checkGame(state)
			io.to(newState._id).emit(UPDATEGAMESTATE,newState)
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

