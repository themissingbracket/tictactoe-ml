##### Description
---

This project is inspired on React [Tutorial](https://reactjs.org/tutorial/tutorial.html).

The idea is to build a similar react application using typescript and the new React Hooks. I Haven't had a look at the code which can be found [here](https://codepen.io/gaearon/pen/gWWZgR?editors=0010).


#### Future Plans 
---
-  Deploy to Heroku.
    - The current master branch has not been deployed. The WebSockets setup is still in protoype stage. 
        - Current dev is now being done on the setup-websocket [branch](https://github.com/themissingbracket/tictactoe/tree/setup-websocket)


    - The application has been deployed on [Heroku](https://mysterious-beach-68846.herokuapp.com/)
- CI/CD (Probably overkill for an app like this). But would help in getting an understanding of how CI/CD works.


#### Getting Started
----
The React App was built using the create-react-app boiler plate for typescript

`
   npx create-react-app tictactoe --typescript
`


##### To start the Development Server

I moved the default start script for create-react-app to start:server, as heroku by default runs the start script in package.json and that has led to some issues.

`
    npm start:server
`
or if you prefer yarn 
`
    yarn start:server
`

#### To deploy 

By default the boiler plate assumes the application is going to be deployed on a static server.

Run 

`
npm build or yarn build
`
to create the production build


#### To run the tests

The boiler plate comes pre-built with jest as the test-runner.
To run the tests
`
    yarn test or npm test
`
