import React , { FC } from 'react';
import { hydrate } from 'react-dom'
import Grid from '../shared/Grid';
import { GameState } from '../shared/Types';
import '../styles/index.scss';
import queryString from 'query-string';
declare global {
    interface Window {
        __InitalState__: GameState,
    }
}

function updateQuery(GameID: string) {
    const parsed = queryString.parse(location.search)

    const { _id: id } = parsed
    if (!id && id!==GameID) {
        // console.log({id,_id})
        const qs = queryString.stringify({ _id: GameID })
        location.search=qs
        
    }

}

const App:FC = ()=>{
    const GlobalState: GameState = window.__InitalState__//{ _id: '', Blocks: [] as string[], winningHand: [] as number[], gameOver: false, currentPlayerX: false }
    delete window.__InitalState__
    updateQuery(GlobalState._id)
    return (<Grid{...GlobalState}/>)
}


hydrate(<App/>,document.getElementById('root'))
