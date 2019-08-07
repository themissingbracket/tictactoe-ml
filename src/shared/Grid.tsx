
import React, { Fragment,FC,useEffect,useState } from 'react';
import Block from './Block';
import { GameState } from './Types';





const Grid = (props: GameState)=>{
  const { _id,Blocks,winningHand,gameOver,currentPlayerX } = props

  const [blocks,Updateblocks] = useState(Blocks)
  useEffect(() => {
    
  }, [blocks])
  const blockClickedController = (id:number)=>console.log("blockClicked")
  const Message = "Message"
  const Reset = ()=>"Reset"
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
              <img style={{ paddingLeft: "5px", color: "#bdc3c7" }} src="assets/github-social.png" alt="" height="20px" width="20px" />
            </a>
          </span>
          <span>
            {
              !_id &&
              `http://localhost:3000?_id=${_id}`
            }
          </span>
        </footer>
      </div>
    </Fragment>
  )
}
export default Grid
