module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      // Ultra-aggressive optimizations for 100% performance
      if (env === 'production') {
        // Add compression plugin
        try {
          const CompressionPlugin = require('compression-webpack-plugin');
          webpackConfig.plugins.push(
            new CompressionPlugin({
              algorithm: 'gzip',
              test: /\.(js|css|html|svg)$/,
              threshold: 1024, // Compress smaller files
              minRatio: 0.6,   // More aggressive compression
            })
          );
        } catch (error) {
          console.warn('CompressionPlugin not available:', error.message);
        }

        // Ultra-aggressive optimizations
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          minimize: true,
          sideEffects: false,
          usedExports: true,
          splitChunks: {
            chunks: 'all',
            minSize: 10000,
            maxSize: 200000,
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                priority: 10,
                chunks: 'all',
                enforce: true,
              },
              react: {
                test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                name: 'react',
                priority: 20,
                chunks: 'all',
                enforce: true,
              },
              icons: {
                test: /[\\/]node_modules[\\/]react-icons[\\/]/,
                name: 'icons',
                priority: 15,
                chunks: 'all',
                enforce: true,
              },
              common: {
                name: 'common',
                minChunks: 2,
                priority: 5,
                chunks: 'all',
                enforce: true,
              },
            },
          },
        };

        // Remove source maps for production
        webpackConfig.devtool = false;
      }

      return webpackConfig;
    },
  },
};
