import React from 'react';
import Express  from 'express';
import * as dotenv from 'dotenv';
import Grid from '../shared/Grid';
import Path from 'path';
import { GameState } from '../shared/Types';
import { renderToString } from 'react-dom/server'
const Current_File = Path.resolve(__dirname)
dotenv.config()


const app: Express.Application = Express()

const router:Express.Router = Express.Router()



router.get('/',(req:Express.Request,res:Express.Response,next:Express.NextFunction)=>{
    const props: GameState = { _id: '', Blocks: [] as string[], winningHand: [] as number[], gameOver: false, currentPlayerX: false }
    const grid = renderToString(<Grid {...props}/>)
    console.log(grid)
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Document</title>
        </head>
        <body>
            <div id="root">${grid}</div>
            <script src="main.js"></script>
        </body>
        </html>
    `)
})

app.use('/',router)
console.log(__dirname)
app.use(Express.static('./dist'))
const PORT:number = Number(process.env.PORT)|| 3030

app.listen(PORT,()=>console.log(`App is running on port ${PORT}`))

