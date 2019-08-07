import React from 'react';
import Express  from 'express';
import * as dotenv from 'dotenv';
import Grid from '../shared/Grid';
import Path from 'path';
import { GameState } from '../shared/Types';
import { renderToString } from 'react-dom/server'
import { createServer } from 'http';
import createSocket from '../Socket/Server'
import serialise from 'serialize-javascript';
import GameEngine from '../core/index';

const Current_File = Path.resolve(__dirname)
dotenv.config()


const app: Express.Application = Express()

const server = createServer(app)
createSocket(server)

const router:Express.Router = Express.Router()



router.get('/',async (req:Express.Request,res:Express.Response,next:Express.NextFunction)=>{
    const {_id } = req.query
    const props: GameState = !_id ? await GameEngine.createStore() : await GameEngine.getGame(_id) //{ _id: '', Blocks: [] as string[], winningHand: [] as number[], gameOver: false, currentPlayerX: false }
    const grid = renderToString(<Grid {...props}/>)

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <link rel="stylesheet" type="text/css" href="main.css"/>
            <title>Document</title>
            <script>
                window.__InitalState__ = ${serialise(props)}
            </script>
        </head>
        <body>
            <div id="root">${grid}</div>
            <script src="main.js"></script>
        </body>
        </html>
    `)
})

app.use('/',router)

app.use(Express.static('./server/dist'))
const PORT:number = Number(process.env.PORT)|| 3030

server.listen(PORT,()=>console.log(`App is running on port ${PORT}`))

