module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      // Only add optimizations in production
      if (env === 'production') {
        // Add compression plugin for production builds
        try {
          const CompressionPlugin = require('compression-webpack-plugin');
          webpackConfig.plugins.push(
            new CompressionPlugin({
              algorithm: 'gzip',
              test: /\.(js|css|html|svg)$/,
              threshold: 8192,
              minRatio: 0.8,
            })
          );
        } catch (error) {
          console.warn('CompressionPlugin not available:', error.message);
        }

        // Optimize chunks for production
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                priority: 10,
                chunks: 'all',
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
      }

      return webpackConfig;
    },
  },
};
