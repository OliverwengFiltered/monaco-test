const getWebpackConfig = function () {
    const path = require('path');
    const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
    const webpackConfig = {
        mode: 'development',
        devtool: 'eval',
        plugins: [
            new MonacoWebpackPlugin()
        ],
        entry: {
            monaco: {
                import: './public/javascripts/monacoLibsLoader.js'
            }
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        }
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    use: ['@svgr/webpack', 'url-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.(mp3|wasm)$/i,
                    type: 'asset/resource'
                }
            ]
        },
        resolve: {
            extensions: ['.js'],
            fallback: {
                fs: false,
                child_process: false,
                net: false,
                crypto: false,
                path: false,
                os: false
            }
        },
        output: {
            filename: '[name].bundle.js',
            chunkFilename: '[chunkhash].bundle.js',
            libraryTarget: 'umd',
            library: '[name]',
            umdNamedDefine: true,
            path: path.join(__dirname, 'public/javascripts/webpack')
        },
        stats: 'normal'
    };
    console.log('building webpack client resources under development mode.');
    return webpackConfig;
};

module.exports = getWebpackConfig;
