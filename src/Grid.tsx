import React, { FC, useState, Fragment } from 'react';



interface BlockProps{
  position:number,
  onClick:any,
  value:string,
  winning:boolean
}

const Block: FC<BlockProps> = ({ value,position,onClick,winning})=>{
  
  
  return (
    <div className={`block ${value?"disabled":""} ${winning?'winning':''}`} onClick={()=>onClick(position)}>
      <span>{value}</span>
    </div>
  )
}

const Grid:FC = (props)=>{
  const gridCount = 9
  const [ Blocks, setBlock ] = useState(Array(gridCount).fill(null))
  const [isPlayerX,setisPlayerX] = useState(true)
  const [ gameOver,setgameOver ] = useState(false)
  const [winningHand,setWinningHand] = useState([] as number[])
  // useEffect(() => console.log(Blocks))
  // const [ winninHand , setwinningHand ] = useState([])
  const Reset = ()=>{
    setBlock(Array(gridCount).fill(null))
    setisPlayerX(true)
    setgameOver(false)
    const winningHand:number[] = [] 
    setWinningHand(winningHand)
  }
  const blockClickedController=(position:number):void=>{
      
      const newBlocks = Blocks.map((i:any,idx:number)=>{
        if(idx===position)return isPlayerX ?'X':'O'
        return i
      })
      setBlock(newBlocks)
      
      // console.log(newBlocks)
      // setBlock(newBlocks)
    // if (!newBlocks.find(value => null)) 
    CheckGameState(newBlocks)
    
  }
  const CheckGameState=(blocks:string[]):void=>{

    const sequence:number[][] = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    //Checks the Array only if there are three elements
    // This is to prevent the true value when the first move is made
    const isEqual:Function = (array:string[]):boolean => (array&&array.length===3)? array.every((a:string):boolean => a === array[0]) : false
    
    /**
     * TODO: There has to be better way of doing these checks
     * Dont really like hardcoding the index values like that
     */

     const mappedSeq:string[][] = sequence.map(seq => blocks.filter((value,idx)=>(seq.includes(idx) && value)))

     const winner:boolean = mappedSeq.some(value => isEqual(value))

     const winningHand:string[]|undefined = mappedSeq.find(val=>isEqual(val))
     

    // let winningSeq = sequence[ mappedSeq.indexOf(mappedSeq.find(val=>isEqual(val))) ]

    // const winner:boolean = sequence.map( ( seq:number[] ) => isEqual(blocks.filter((b:string,idx:number) => seq.includes(idx) && b))).some( (val:boolean) => val )
    
    if(winningHand){
      const winningSequence:number[] = sequence[mappedSeq.indexOf(winningHand)]
      setWinningHand(winningSequence)
    }
    if (winner) return setgameOver(true)

    if (!winner && blocks.find(val => val === null)===undefined) return setgameOver(true)
    const newPlayer = !isPlayerX
    setisPlayerX(newPlayer)
      
  }
  // console.log(winningHand.length>0?`winning length : ${winningHand.length}`:`Nope`)
  const Message = gameOver ? 
    (winningHand.length === 0) ? `It's a draw!!`
        :
      `Player ${isPlayerX ? "X" : "O"} wins!!!`
      : 
   `Curent Player : ${isPlayerX ? "X" : "O"}`
   // Blocks.map(i=>console.log(i))
  //  console.log(Blocks)
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

// const App: React.FC = () => {
//   return (
//     <div style={ APP_STYLES } className="App">
      
//     </div>
//   );
// }

export default Grid;
