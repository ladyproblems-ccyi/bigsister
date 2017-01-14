import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production'),
    __DEV__: false
};

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: true,
    entry: './src/index',
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
        // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
        new webpack.DefinePlugin(GLOBALS),

        // Eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),

        // Minify JS
        new webpack.optimize.UglifyJsPlugin(),

        new ExtractTextPlugin("styles.css"),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
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
            { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' }, {
                test: /(\.css|\.scss)$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
            }
        ]
    }
};
