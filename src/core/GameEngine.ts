import nedb from 'nedb'
import { v4 } from 'uuid'
// import { GameState } from '../shared/Types';
import Database from './DB'
import { DATABASE } from '../types/Database'
import { GameState } from '../types/GameState'
import Block from '../shared/Block'
// const db = new (require('nedb'))({
//     filename: "session.db"
// })
// db.loadDatabase(err => err && console.log(err))


// export const getGame = (_id:string)=>{
    
// }
const sequence: number[][] = [
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 4, 8],
	[2, 4, 6]
]

const isEqual = (array:string[]) => array.length === 3 ? array.every((a) => a === array[0]) : false


class GameEngine {
	// private db:nedb<any>
    
	public getGame(_id: string): Promise<GameState>{
		return Database.FindOne({_id})
			.then((docs:DATABASE.DocStruct)=>{
				return docs as GameState
			})
			.catch((err)=>{throw new Error(err)})
        
	}

	public createStore(): Promise<GameState>{
		const newGame: DATABASE.DocStruct = {
			// _id:v4(),
			Blocks:Array(9).fill(null) as string[],
			winningHand:[] as number[],
			gameOver:false,
			currentPlayerX:false
		}
		return Database.Insert(newGame)
			.then((docs: DATABASE.DocStruct)=>{
				// const gameState = {...docs}
				// delete gameState.Players
				return docs as GameState
			})
			.catch(err=>{throw new Error(err)})
	}
	// AddPlayer(gameID:string,playerID:string):Promise<boolean>{
	//     console.log("AddPlayer")
	//     return Database.Update(gameID,{
	//         $push:{
	//             Players:{
	//                 $each:[playerID]
	//             }
	//         }
	//     }).then(()=>true)
	//     .catch(err=>{throw new Error(err)})
        
	// }
	checkGame(state: GameState): Promise<GameState>{
		return new Promise((resolve,reject)=>{
			const blocks:string[][] = sequence.map(seq=>state.Blocks.filter((b:string,idx:number)=>seq.includes(idx)&&b))
			const winningHand:string[]|undefined= blocks.find(val=>isEqual(val))
			const winningSequence:number[] = winningHand?sequence[blocks.indexOf(winningHand)]:[] as number[]
			const newGameState:GameState = {
				Blocks:state.Blocks,
				winningHand:winningSequence,
				currentPlayerX:!state.currentPlayerX,
				gameOver:winningSequence.length?true:false,
				_id:state._id
			}
			Database.Update(state._id, newGameState as DATABASE.DocStruct)
			resolve(newGameState)
		})
	}
}

export default new GameEngine()