
const withPlugins = require('next-compose-plugins')
const sass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images');
const withCss=require('@zeit/next-css')


const transpile = require('next-transpile-modules')(['boostrap'])





const nextConfig = {
  test: /\.svg$/,
  use: ['@svgr/webpack', 'url-loader'],
    webpack: (config, options) => {
  
      // modify the `config` here
  
      return config;
    },
  };

module.exports = withPlugins([

    [sass],

    [withCss],
    
    [transpile],
   
    [optimizedImages,{
        optimizeImagesInDev: true
    }] ,
    
],nextConfig)