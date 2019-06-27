import React, { FC , Fragment } from 'react';
import Block from './Block';
// import State from './utils';
import 
{ 
  sequence , 
  useBlocks, 
  usePlayerisX, 
  useGameOver, 
  useWinningHand, 
  GetWinner,
  blockController,
  ResetGame
} 
from './utils';

// console.log(State)
const Grid:FC = (props)=>{
  
  const { Blocks, setBlock } = useBlocks()
  const {isPlayerX,setisPlayerX} = usePlayerisX()
  const { gameOver,setgameOver } = useGameOver()
  const {winningHand,setWinningHand} = useWinningHand()
  
  const Reset = () => ResetGame({ setBlock, setisPlayerX, setgameOver, setWinningHand})

  const blockClickedController=(position:number):void=>
    blockController(position, Blocks, isPlayerX, setBlock, CheckGameState)   
  
  const CheckGameState=(blocks:string[]):void=>{
    
    const { winner, winningSequence } = GetWinner(sequence.map(seq => blocks.filter((b, idx) => seq.includes(idx) && b)) ,sequence)
    winningSequence && setWinningHand(winningSequence) 
    if (winner) return setgameOver(true)
    if (!winner && blocks.find(val => val === null)===undefined) return setgameOver(true)
    const newPlayer = !isPlayerX
    setisPlayerX(newPlayer)
  }
  
  const Message = gameOver ? 
    (winningHand.length === 0) ? `It's a draw!!`
        :
      `Player ${isPlayerX ? "X" : "O"} wins!!!`
      : 
   `Curent Player : ${isPlayerX ? "X" : "O"}`
 
  return (
    <Fragment>
        <div className="grid">
            <header>
              {
                Message
              }
              
            </header>
            <div className="row" >
              <Block winning={winningHand.includes(0)?true:false} value={Blocks[0]} onClick={!gameOver?blockClickedController:null} position={0} />
              <Block winning={winningHand.includes(1)?true:false} value={Blocks[1]} onClick={!gameOver?blockClickedController:null} position={1} />
              <Block winning={winningHand.includes(2)?true:false} value={Blocks[2]} onClick={!gameOver?blockClickedController:null} position={2} />
            </div>
            <div className="row" >
              <Block winning={winningHand.includes(3)?true:false} value={Blocks[3]} onClick={!gameOver?blockClickedController:null} position={3} />
              <Block winning={winningHand.includes(4)?true:false} value={Blocks[4]} onClick={!gameOver?blockClickedController:null} position={4} />
              <Block winning={winningHand.includes(5)?true:false} value={Blocks[5]} onClick={!gameOver?blockClickedController:null} position={5} />
            </div>
            <div className="row" >
              <Block winning={winningHand.includes(6)?true:false} value={Blocks[6]} onClick={!gameOver?blockClickedController:null} position={6} />
              <Block winning={winningHand.includes(7)?true:false} value={Blocks[7]} onClick={!gameOver?blockClickedController:null} position={7} />
              <Block winning={winningHand.includes(8)?true:false} value={Blocks[8]} onClick={!gameOver?blockClickedController:null} position={8} />
            </div>
            
          </div>
          <button onClick={Reset}> Reset Game </button>
    </Fragment>
  )
}

export default Grid;
