import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: true,
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/index',
    ],
    target: 'web',
    node: {  //setting these as a workaround for a conflict with the library 'request' https://github.com/request/request/issues/1691
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    output: {
        path: `${__dirname}/dist`,
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({ // Create HTML file that includes references to bundled CSS and JS.
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        })
    ],
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json' },
            { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
            { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=image/svg+xml' },
            { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' },
            { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
            { test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './src'
    }
};
