import React from 'react';
import { hydrate } from 'react-dom'
import Grid from '../shared/Grid';
import { GameState } from '../shared/Types';
import '../styles/index.scss';
const GlobalState: GameState = { _id: '', Blocks: [] as string[], winningHand: [] as number[], gameOver: false, currentPlayerX: false }

hydrate(<Grid {...GlobalState}/>,document.getElementById('root'))
