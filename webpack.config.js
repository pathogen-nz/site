import path from "path"

import webpack from "webpack"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { phenomicLoader } from "phenomic"
import PhenomicLoaderFeedWebpackPlugin
  from "phenomic/lib/loader-feed-webpack-plugin"
import PhenomicLoaderSitemapWebpackPlugin
  from "phenomic/lib/loader-sitemap-webpack-plugin"

import phenomicLoaderPresetDefault 
  from "phenomic/lib/loader-preset-default"
import phenomicLoaderPluginsMarkdownInitHead 
  from "phenomic/lib/loader-plugin-markdown-init-head.description-property-from-content"
import phenomicLoaderPluginsInitRawBodyPropertyFromContent 
  from "phenomic/lib/loader-plugin-init-rawBody-property-from-content"
import freesewingMarkdownPipeline 
  from "./src/plugins/freesewing-markdown-pipeline/index.js"


import pkg from "./package.json"

export default (config = {}) => {

  return {
    ...config.dev && {
      devtool: "#cheap-module-eval-source-map",
    },
    module: {
      noParse: /\.min\.js/,
      rules: [
        // *.md => consumed via phenomic special webpack loader
        // allow to generate collection and rss feed.
        {
          // phenomic requirement
          test: /\.(md|markdown)$/,
          loader: phenomicLoader,
          query: {
            context: path.join(__dirname, config.source),
            // plugins: [
            //   ...require("phenomic/lib/loader-preset-markdown").default
            // ]
            // see https://phenomic.io/docs/usage/plugins/
               plugins: [ 
                 ...phenomicLoaderPresetDefault,
                 phenomicLoaderPluginsMarkdownInitHead,
                 phenomicLoaderPluginsInitRawBodyPropertyFromContent,
                 freesewingMarkdownPipeline,
               ],
          },
        },

        // *.js => babel + eslint
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, "scripts"),
            path.resolve(__dirname, "src"),
          ],
          loaders: [
            "babel-loader?cacheDirectory",
            "eslint-loader" + (config.dev ? "?emitWarning" : ""),
          ],
        },

        // *.scss => sass
        {
          test: /\.scss$/,
          include: path.resolve(__dirname, "src"),
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [ 
              { loader: "css-loader", },
              { loader: "sass-loader", },
            ],
          }),
          
        },
        
        // copy assets and return generated path in js
        {
          test: /\.(html|ico|jpe?g|png|gif|eot|otf|webp|ttf|woff|woff2)$/,
          loader: "file-loader",
          query: {
            name: "[path][name].[hash].[ext]",
            context: path.join(__dirname, config.source),
          },
        },

        // svg as raw string to be inlined
        {
          test: /\.svg$/,
          loader: "raw-loader",
        },
        {
          test: /\.yml$/,
          loader: "json-loader!yaml-loader",
        },
      ],
    },

    plugins: [
      
      new CopyWebpackPlugin([
        { 
          from: '**/*', 
          context: __dirname + '/content' 
        },
      ], 
        {
          ignore: [ '*.md', ],
        }
      ),

      new CopyWebpackPlugin([
        { 
          from: '_redirects', 
          context: __dirname  
        },
      ], 
      ),

      new PhenomicLoaderFeedWebpackPlugin({
        // here you define generic metadata for your feed
        feedsOptions: {
          title: pkg.name,
          site_url: pkg.homepage,
        },
        feeds: {
          // here we define one feed, but you can generate multiple, based
          // on different filters
          "feed.xml": {
            collectionOptions: {
              filter: { layout: "Post" },
              sort: "date",
              reverse: true,
              limit: 20,
            },
          },
        },
      }),

      new PhenomicLoaderSitemapWebpackPlugin({
        site_url: pkg.homepage,
      }),

      new ExtractTextPlugin({
        filename: "[name].[hash].css",
        disable: config.dev,
      }),

      ...config.production && [
        new webpack.optimize.UglifyJsPlugin(
          { compress: { warnings: false } }
        ),
      ],
    ],

    output: {
      path: path.join(__dirname, config.destination),
      publicPath: config.baseUrl.pathname,
      filename: "[name].[hash].js",
    },

    resolve: { extensions: [ ".js", ".json" ] },
  }
}
