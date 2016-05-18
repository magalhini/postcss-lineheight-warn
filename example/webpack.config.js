var lineheightWarn = require('../index.js');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'dist.js'
    },
    module: {
        loaders: [
            {
                test:   /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            }
        ]
    },
    postcss: function () {
        return [lineheightWarn];
    }
}
