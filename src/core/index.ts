import nedb from 'nedb'
import { v4 } from 'uuid'
import { GameState } from '../shared/Types';
// const db = new (require('nedb'))({
//     filename: "session.db"
// })
// db.loadDatabase(err => err && console.log(err))


// export const getGame = (_id:string)=>{
    
// }

interface GameStateTempate{
    Blocks: string[]
    winningHand: number[]
    gameOver: boolean
    currentPlayerX: boolean 
}

class GameEngine {
    private db:nedb<any>
    private gameTemplate: GameStateTempate = {
        Blocks: [] as string[],
        winningHand: [] as number[],
        gameOver: false,
        currentPlayerX: false 
    }
    constructor(){
        this.db = this.createDB()
        this.db.loadDatabase()
        
    }

    private createDB(){
        return new nedb({
            filename:`${process.cwd()}/gameStore.db`
        })
        
    }
    public getGame(_id:string):Promise<GameState>{
        return new Promise((resolve,reject)=>{
            this.db.findOne({_id},(err,docs:GameState)=>{
                resolve(docs)
            })
        })
    }

    public createStore(): Promise<GameState>{
        return new Promise((resolve,reject)=>{
            const newGame = { _id: v4(), ...this.gameTemplate } as GameState
            this.db.insert(newGame, (err, docs: GameState)=>{
                resolve(docs)
            })
        })
    }


}

export default new GameEngine()