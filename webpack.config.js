const path = require('path')
const { VueLoaderPlugin} = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    resolve: {
        extensions: ['.vue', '.js'],
        alias: {
            '~': path.resolve(__dirname, 'src')
        }
    },
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({
            template: './src/index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }//{ from: 'static', to: 'dist'} 어디에서 어디로 파일을 복사해서 넣어줄건지, 이미 위에 경로 지정돼있어서 to는 생략
            ]
        })
    ],
    devServer: {
        historyApiFallback: true
    }
}