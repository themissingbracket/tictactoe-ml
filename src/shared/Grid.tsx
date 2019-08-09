
import React, { Fragment,FC,useEffect,useState } from 'react';
import Block from './Block';
import { GameState } from './Types';
import { SubscribeToGame, UpdateGameState } from '../Socket/Client';
import { URLSearchParams } from 'url';
import queryString from 'query-string';


const Grid = ()=>{
  
  const [winningHand,updateWinningHand] = useState([] as number[])
  const [blocks,updateBlocks] = useState([] as string[])
  const [gameOver,updateGameOver] = useState(false)
  const [currentPlayerX,setIsCurrentPlayerX] = useState(false)
  const [_id,updateGameID] = useState('')
  const GetGameID = (): string | null => {
    const qs = queryString.parse(location.search) 
    const _id = qs._id ? qs._id as string : null
    return _id
  }
  useEffect(() => {
    if(_id){
      const qs = queryString.stringify({_id})
      history.pushState && history.pushState({},'',`${location.pathname}?${qs}`)
    }
  }, [_id])
  
  const UpdateState = (state:GameState)=>{
    const { _id,Blocks,currentPlayerX,gameOver,winningHand } = state
    console.log("updateState")
    updateBlocks(Blocks)
    updateWinningHand(winningHand)
    updateGameOver(gameOver)
    setIsCurrentPlayerX(currentPlayerX)
    updateGameID(_id)

  }
  
  useEffect(() => {
    SubscribeToGame(UpdateState,GetGameID())
  }, [])
  
  const blockClickedController = (id:number)=>{
    const value = currentPlayerX?'X':'O'
    const state:GameState = {
      _id,
      Blocks:blocks.map((b,idx)=>idx===id?value:b),
      currentPlayerX, 
      gameOver,
      winningHand
    }
    // console.log(state)
    UpdateGameState(state)
  }
  const Message:string = !gameOver ?
    currentPlayerX ? "Player X turn" : "Player O turn"
    :
        `Player ${
        currentPlayerX ? 'O' : 'X'
    } 
    Wins !!!!!`
  const Reset = ()=>{
    const state: GameState = {
      _id,
      Blocks: Array(9).fill(null),
      currentPlayerX:false,
      gameOver:false,
      winningHand:[] as number[]
    }
    // console.log(state)
    UpdateGameState(state)
  }
  return (
    <Fragment>
      <div className="gameBoard">
        <div className="header">
          <header>
            {
              Message
            }
          </header>
        </div>
        <div className="grid">
          <div className="row" >
            <Block winning={winningHand.includes(0) ? true : false} value={blocks[0]} onClick={!gameOver ? blockClickedController : null} position={0} />
            <Block winning={winningHand.includes(1) ? true : false} value={blocks[1]} onClick={!gameOver ? blockClickedController : null} position={1} />
            <Block winning={winningHand.includes(2) ? true : false} value={blocks[2]} onClick={!gameOver ? blockClickedController : null} position={2} />
          </div>
          <div className="row" >
            <Block winning={winningHand.includes(3) ? true : false} value={blocks[3]} onClick={!gameOver ? blockClickedController : null} position={3} />
            <Block winning={winningHand.includes(4) ? true : false} value={blocks[4]} onClick={!gameOver ? blockClickedController : null} position={4} />
            <Block winning={winningHand.includes(5) ? true : false} value={blocks[5]} onClick={!gameOver ? blockClickedController : null} position={5} />
          </div>
          <div className="row" >
            <Block winning={winningHand.includes(6) ? true : false} value={blocks[6]} onClick={!gameOver ? blockClickedController : null} position={6} />
            <Block winning={winningHand.includes(7) ? true : false} value={blocks[7]} onClick={!gameOver ? blockClickedController : null} position={7} />
            <Block winning={winningHand.includes(8) ? true : false} value={blocks[8]} onClick={!gameOver ? blockClickedController : null} position={8} />
          </div>
        </div>
        <div className="button-box">
          <div className="btn">
            <button onClick={Reset}> Reset Game </button>
          </div>
        </div>
        <footer className="footer">
          <span>Contribute on
              <a href="https://github.com/themissingbracket/tictactoe" target="_blank" rel="noopener noreferrer"> Github
              {/* <i className="fab fa-github"></i> */}
              <img style={{ paddingLeft: "5px", color: "#bdc3c7" }} src="github-social.png" alt="" height="20px" width="20px" />
            </a>
          </span>
          <span>            
          </span>
        </footer>
      </div>
    </Fragment>
  )
}
export default Grid
