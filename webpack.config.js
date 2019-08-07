const path = require('path');

const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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

            },
            {
                test:/\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    }
}


const ServerConfig = {
    entry:'./src/server/index.tsx',
    externals: [nodeExternals()],
    output:{
        path:path.join(__dirname,'server'),
        filename:'[name].js'
    },
    plugins:[
        new webpack.DefinePlugin(
            {
                __isBrowser__: "false"
            }
        ),

    ],
    target:'node',
    ...BaseConfig
}

const ClientConfig = {
    entry: './src/client/index.tsx',
    output: {
        path: path.join(__dirname,'server', 'dist'),
        filename: '[name].js'
    },
    plugins:[
        new webpack.DefinePlugin(
            {
                __isBrowser__:"true"
            }
        ),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
        })
    ],
    ...BaseConfig
}


module.exports=(env={mode:'development'})=>[ServerConfig, ClientConfig ].map(config=>({...config,mode:env.mode}))

