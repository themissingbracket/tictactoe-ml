
import React, { Fragment } from 'react';
import Block from './Block';
// import State from './utils';
// import 
// { 
//   sequence , 
//   useBlocks, 
//   usePlayerisX, 
//   useGameOver, 
//   useWinningHand, 
//   GetWinner,
//   blockController,
//   ResetGame,
//   useStore
// } 
// from './utils';
import { SubscribeToGameSession,UpdateGame } from './Api';
import { GameState } from './Types';

class Grid extends React.Component<any, GameState> {
  constructor(props:any){
    super(props)
    this.state = {
      _id:'',
      Blocks : Array(9).fill(null),
      winningHand:[],
      gameOver:false,
      currentPlayerX:false
    }
    this.blockClickedController = this.blockClickedController.bind(this)
  }

  componentDidMount() {
    const _id = window.location.search.substring(1).split('_id=')[1]||null
    SubscribeToGameSession((state:GameState):void=>this.setState({...state}),_id)
  }


  componentWillUnmount() {
    
  }
  blockClickedController(position:number){
    const value = this.state.currentPlayerX?'X':'O'
    const blocks: string[] = this.state.Blocks.map((b, i) => i === position ? value:b)
    this.setState({currentPlayerX:!this.state.currentPlayerX})
    UpdateGame(this.state._id,blocks)
  }
  

  render(){
    
    const { Blocks,winningHand,gameOver } = this.state
    const _id = window.location.search.substring(1).split('_id=')[1] || null
    // const blockClickedController = ():void=>console.log("Clicked")
    const Reset = ():void => console.log("Reset")
    const Message:string = !this.state.gameOver?
      this.state.currentPlayerX?"Player X turn":"Player O turn"
    :
      `Player ${
        this.state.currentPlayerX?'O':'X'
      } Wins !!!!!`
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
                <Block winning={winningHand.includes(0)?true:false} value={Blocks[0]} onClick={!gameOver?this.blockClickedController:null} position={0} />
                <Block winning={winningHand.includes(1)?true:false} value={Blocks[1]} onClick={!gameOver?this.blockClickedController:null} position={1} />
                <Block winning={winningHand.includes(2)?true:false} value={Blocks[2]} onClick={!gameOver?this.blockClickedController:null} position={2} />
              </div>
              <div className="row" >
                <Block winning={winningHand.includes(3)?true:false} value={Blocks[3]} onClick={!gameOver?this.blockClickedController:null} position={3} />
                <Block winning={winningHand.includes(4)?true:false} value={Blocks[4]} onClick={!gameOver?this.blockClickedController:null} position={4} />
                <Block winning={winningHand.includes(5)?true:false} value={Blocks[5]} onClick={!gameOver?this.blockClickedController:null} position={5} />
              </div>
              <div className="row" >
                <Block winning={winningHand.includes(6)?true:false} value={Blocks[6]} onClick={!gameOver?this.blockClickedController:null} position={6} />
                <Block winning={winningHand.includes(7)?true:false} value={Blocks[7]} onClick={!gameOver?this.blockClickedController:null} position={7} />
                <Block winning={winningHand.includes(8)?true:false} value={Blocks[8]} onClick={!gameOver?this.blockClickedController:null} position={8} />
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
              <img style={{ paddingLeft: "5px", color:"#bdc3c7"}} src="assets/github-social.png" alt="" height="20px" width="20px"/>
              </a>
            </span>
            <span>
              {
                !_id && 
                `http://localhost:3000?_id=${this.state._id}`
              }
            </span>
          </footer>
        </div>
    </Fragment>
    )
  }

}

// console.log(State)
// const Grid:FC = (props)=>{
  // const { store,changeState } = useStore()
  // const { Blocks, gameOver } = store
  // console.log(Blocks)
  // console.log(store)
  // const Reset = ():void => {

  // }//ResetGame({ setBlock, setisPlayerX, setgameOver, setWinningHand})
  // const blockClickedController=(position:number):void=>{
  //   const value = store.currenPlayerX?'X':'O'
  //     // console.log(value)
  //   const blocks = store.Blocks.map((block, idx) => idx === position ? value : block)
  //   changeState({ Blocks: blocks,currenPlayerX:!store.currenPlayerX,...store})    
  //   // console.log(state)
  // }
  // const Message = ''
  // const winningHand:number[] =[] as number[]
  // return (
  //   <Fragment>
  //       <div className="gameBoard">
  //         <div className="header">
  //               <header>
  //                 {
  //                   Message
  //                 }
  //               </header>
  //         </div>
  //         <div className="grid">
  //             <div className="row" >
  //               <Block winning={winningHand.includes(0)?true:false} value={Blocks[0]} onClick={!gameOver?blockClickedController:null} position={0} />
  //               <Block winning={winningHand.includes(1)?true:false} value={Blocks[1]} onClick={!gameOver?blockClickedController:null} position={1} />
  //               <Block winning={winningHand.includes(2)?true:false} value={Blocks[2]} onClick={!gameOver?blockClickedController:null} position={2} />
  //             </div>
  //             <div className="row" >
  //               <Block winning={winningHand.includes(3)?true:false} value={Blocks[3]} onClick={!gameOver?blockClickedController:null} position={3} />
  //               <Block winning={winningHand.includes(4)?true:false} value={Blocks[4]} onClick={!gameOver?blockClickedController:null} position={4} />
  //               <Block winning={winningHand.includes(5)?true:false} value={Blocks[5]} onClick={!gameOver?blockClickedController:null} position={5} />
  //             </div>
  //             <div className="row" >
  //               <Block winning={winningHand.includes(6)?true:false} value={Blocks[6]} onClick={!gameOver?blockClickedController:null} position={6} />
  //               <Block winning={winningHand.includes(7)?true:false} value={Blocks[7]} onClick={!gameOver?blockClickedController:null} position={7} />
  //               <Block winning={winningHand.includes(8)?true:false} value={Blocks[8]} onClick={!gameOver?blockClickedController:null} position={8} />
  //             </div>   
  //         </div>
  //         <div className="button-box">
  //             <div className="btn">
  //               <button onClick={Reset}> Reset Game </button>
  //             </div>
  //         </div>
  //         <footer className="footer">
  //           <span>Contribute on 
  //             <a href="https://github.com/themissingbracket/tictactoe" target="_blank" rel="noopener noreferrer"> Github 
  //             <img style={{ paddingLeft: "5px", color:"#bdc3c7"}} src="assets/github-social.png" alt="" height="20px" width="20px"/>
  //             </a>
  //           </span>
  //         </footer>
  //       </div>
  //   </Fragment>
  // )
// }

export default Grid;
