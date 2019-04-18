var path = require('path');

module.exports = {
    

    entry: "./js/app.js",

    output: {

        filename: "out.js",

        path: path.resolve(__dirname, 'js')

    },

    mode: 'development',

    watch: true,

    module: {

        rules: [

            {

                test: /\.js$/,

                exclude: /node_modules/,

                use: {

                    loader: 'babel-loader',

                    options: {

                        presets: [
                            ['env', {

                                targets: {

                                    browsers: [

                                        '> 1%',

                                        'last 2 versions'

                                    ]

                                }

                            }]

                        ]
                    }

                }

            }

        ]

    }



}