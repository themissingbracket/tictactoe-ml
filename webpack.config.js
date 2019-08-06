const path = require('path');

const BaseConfig = {
    resolve: {
        extensions: ['.ts', '.js', '.json','.tsx']
    },
    module:{
        rules:[
            {
                test:/\.ts(x?)$/,
                use: [
                        {
                        loader: 'ts-loader',
                        }
                ]

            }
        ]
    }
}


const ServerConfig = {
    entry:'./src/server/index.tsx',
    output:{
        path:path.join(__dirname,'server'),
        filename:'[name].js'
    },
    target:'node',
//     module: {
//         rules: [
//             {
//                 test: /\.ts(x?)$/,
//                 use:[
//                     {
//                         loader: 'ts-loader',
//                         options:{configFile:'./tsconfig.server.json'}
//                     }
//                 ]

//             }
//         ]
//     }
// }
    ...BaseConfig
}

const ClientConfig = {
    entry: './src/client/index.tsx',
    output: {
        path: path.join(__dirname,'server', 'dist'),
        filename: '[name].js'
    },
    ...BaseConfig
}


module.exports=(env={mode:'development'})=>[ServerConfig, ClientConfig ].map(config=>({...config,mode:env.mode}))

