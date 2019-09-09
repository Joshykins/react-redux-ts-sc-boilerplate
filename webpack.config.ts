import { default as HtmlWebpackPlugin } from 'html-webpack-plugin';
import { Configuration } from 'webpack';

interface HexConfig extends Configuration {
  devServer?: {
    historyApiFallback?: boolean;
  };
}

const config: HexConfig = {
  mode: "development",
  entry: './src/entry/index.tsx',
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/entry/index.html' })],
};

export default config;
