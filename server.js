const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/public'));

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));

// Load index.html when request is different from /
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

// Start the server
const server = app.listen(3000, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Test front end app listening at http://%s:%s', host, port);
});
