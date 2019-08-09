import React , { FC } from 'react';
import { render } from 'react-dom'
import Grid from '../shared/Grid';
// import { GameState } from '../shared/Types';
import '../styles/index.scss';
// import queryString from 'query-string';
// declare global {
//     interface Window {
//         __InitalState__: GameState,
//     }
// }

// function updateQuery(GameID: string) {
//     const parsed = queryString.parse(location.search)

//     const { _id: id } = parsed
//     if (!id && id!==GameID) {
//         // console.log({id,_id})
//         const qs = queryString.stringify({ _id: GameID })
//         location.search=qs
        
//     }

// }

// const App:FC = ()=>{
//     return (<Grid{...GlobalState}/>)
// }


render(<Grid/>,document.getElementById('root'))
