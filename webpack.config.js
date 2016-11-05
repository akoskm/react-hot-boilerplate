var path = require("path");

module.exports = {
    entry: ['./src/app.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-react-jsx']
                }
            }
        ]
    }
}