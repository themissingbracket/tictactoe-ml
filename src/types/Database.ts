
export namespace DATABASE {
    export interface query {
        _id?: string
    }
    export interface DocStruct {
        _id?: string
        Blocks: string[]
        winningHand: number[]
        gameOver: boolean
        currentPlayerX: boolean
    }

}