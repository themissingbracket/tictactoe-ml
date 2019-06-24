import React,{ FC, useState,Fragment } from 'react';



interface BlockProps{
  position:number,
  onClick:any,
  value:string
}

const Block: FC<BlockProps> = ({ value,position,onClick})=>{
  
  
  return (
    <div className={`block ${!onClick?"disabled":""}`} onClick={()=>onClick(position)}>
      <span>{value}</span>
    </div>
  )
}

const Grid:FC = (props)=>{
  const gridCount = 9
  const [ Blocks, setBlock ] = useState(Array(gridCount).fill(null))
  const [isPlayerX,setisPlayerX] = useState(true)
  const [ gameOver,setgameOver ] = useState(false)

  const Reset = ()=>{
    setBlock(Array(gridCount).fill(null))
    setisPlayerX(true)
    setgameOver(false)
  }
  const blockClickedController=(position:number):void=>{
      
      const newBlocks = Blocks.map((i:any,idx:number)=>{
        if(idx===position)return isPlayerX ?'X':'O'
        return i
      })
      setBlock(newBlocks)
      const newPlayer = !isPlayerX
      setisPlayerX(newPlayer)
      // console.log(newBlocks)
      // setBlock(newBlocks)
    // if (!newBlocks.find(value => null)) 
    CheckGameState(newBlocks)
    
  }
  const CheckGameState=(blocks:string[]):void=>{
    
    const isEqual = (array:string[]):boolean => (array&&array.length===3)?array.every((a:string):boolean=>a===array[0]):false
    
    const winner = (
      /**
       * @Columns
       */
      isEqual(blocks.filter((value, idx) => ([0, 3, 6].includes(idx))&& value )) ||//?
      isEqual(blocks.filter((value, idx) => ([1, 4, 7].includes(idx))&& value )) ||//?
      isEqual(blocks.filter((value, idx) => ([2, 5, 8].includes(idx)) && value)) ||//?
      /**
       * @Rows
       */
      isEqual(blocks.filter((value, idx) => ([0, 1, 2].includes(idx)) && value)) ||//?
      isEqual(blocks.filter((value, idx) => ([3, 4, 5].includes(idx)) && value)) ||//?
      isEqual(blocks.filter((value, idx) => ([6, 7, 8].includes(idx)) && value)) ||//?
      /**
       * @Diagonals
       */
      isEqual(blocks.filter((value, idx) => ([0, 4, 8].includes(idx))&& value )) ||//?
      isEqual(blocks.filter((value, idx) => ([2, 4, 6].includes(idx))&& value ))
    )
    console.log(winner)
    if (winner) return setgameOver(true)
    // blocks.filter(val => val === null).length?console.log(true):console.log(false)
    if (!winner && blocks.find(val => val === null)===undefined) return setgameOver(true)
      
  }
  const Message = gameOver ? 
  (Blocks.find(val => val === null) === undefined)?'Its a draw!!!'
        :
      `Player ${!isPlayerX ? "X" : "O"} wins!!!`
      : 
   `Curent Player : ${isPlayerX ? "X" : "O"}`
  // Blocks.map(i=>console.log(i))
  return (
    <Fragment>
        <div className="grid">
            <header>
              {
                Message
              }
              
            </header>
            <div className="row" >
              <Block value={Blocks[0]} onClick={!gameOver?blockClickedController:null} position={0} />
              <Block value={Blocks[1]} onClick={!gameOver?blockClickedController:null} position={1} />
              <Block value={Blocks[2]} onClick={!gameOver?blockClickedController:null} position={2} />
            </div>
            <div className="row" >
              <Block value={Blocks[3]} onClick={!gameOver?blockClickedController:null} position={3} />
              <Block value={Blocks[4]} onClick={!gameOver?blockClickedController:null} position={4} />
              <Block value={Blocks[5]} onClick={!gameOver?blockClickedController:null} position={5} />
            </div>
            <div className="row" >
              <Block value={Blocks[6]} onClick={!gameOver?blockClickedController:null} position={6} />
              <Block value={Blocks[7]} onClick={!gameOver?blockClickedController:null} position={7} />
              <Block value={Blocks[8]} onClick={!gameOver?blockClickedController:null} position={8} />
            </div>
            
          </div>
          <button onClick={Reset}> Reset Game </button>
    </Fragment>
  )
}

// const App: React.FC = () => {
//   return (
//     <div style={ APP_STYLES } className="App">
      
//     </div>
//   );
// }

export default Grid;
