import { useState } from 'react';
import { ResetType } from './Interface';

const isEqual:Function = (array:any[]):boolean => array.length===3 ? array.every((a:any)=>a===array[0]):false


export function useBlocks(ARRAY_LENGTH:number = 9){
    const [Blocks, setBlock] = useState(Array(ARRAY_LENGTH).fill(null))
    return { Blocks, setBlock}
}

export function usePlayerisX(){
    const [ isPlayerX, setisPlayerX ] = useState(true)
    return { isPlayerX, setisPlayerX }
}

export function useGameOver(){
    const [gameOver, setgameOver] = useState(false)
    return { gameOver, setgameOver }
}

export function useWinningHand(){
    const [winningHand, setWinningHand] = useState([] as number[])
    return { winningHand, setWinningHand }
}


export const GetWinner = (blocks:string[][],sequence:number[][]) => {
    
    const winner:string[]|undefined = blocks.find(val=>isEqual(val))
    const winningSequence:undefined | number[] = winner && sequence[blocks.indexOf(winner)] 
    
    return { winner,winningSequence }
}
 
export const sequence: number[][] = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
]


export const blockController = (position: number, Blocks: string[], isPlayerX: boolean, setBlock:Function,callback:Function)=>{
    const newBlocks = Blocks.map((i: any, idx: number) => {
        if (idx === position) return isPlayerX ? 'X' : 'O'
        return i
    })
    setBlock(newBlocks)
    callback(newBlocks)
}


export const ResetGame = (obj:{
    setBlock:Function,
    setisPlayerX: Function,
    setgameOver: Function,
    setWinningHand: Function
} )=>{
    obj.setBlock(Array(9).fill(null))
    obj.setisPlayerX(true)
    obj.setgameOver(false)
    const winningHand: number[] = []
    obj.setWinningHand(winningHand)
}