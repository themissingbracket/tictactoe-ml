// import React from 'react';
import Express  from 'express'
import * as dotenv from 'dotenv'
// import Grid from '../shared/Grid';
import Path from 'path'
// import { GameState } from '../shared/Types';
// import { renderToString } from 'react-dom/server'
import { createServer } from 'http'
import createSocket from '../Socket/Server'
// import GameEngine from '../core/GameEngine';


dotenv.config()


const app: Express.Application = Express()

const server = createServer(app)
createSocket(server)

const router:Express.Router = Express.Router()



router.get('/',async (req:Express.Request,res:Express.Response)=>{
	res.redirect('index.html')
})

app.use('/',router)

app.use(Express.static('./build/dist'))
const PORT:number = Number(process.env.PORT)|| 3030

server.listen(PORT,()=>console.log(`App is running on port ${PORT}`))

