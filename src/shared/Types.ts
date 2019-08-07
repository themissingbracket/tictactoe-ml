export interface GameState {
    _id: string
    Blocks: string[]
    winningHand: number[]
    gameOver: boolean
    currentPlayerX:boolean
}

// export interface GameStateClient extends GameState{
//     currentPlayerX:boolean
// }

