const path = require('path');
module.exports = {
  webpack: (config, { isServer }) => {
    // Font file handling
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/fonts/[name].[hash].[ext]',
        },
      },
    });
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.alias['@fonts'] = path.resolve(__dirname, './fonts');

    // Return the modified webpack config
    return config;
  },
};