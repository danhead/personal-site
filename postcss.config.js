module.exports = ctx => ({
  map: ctx.options.map,
  plugins: {
    'postcss-import': {},
    'postcss-custom-properties': {},
    'postcss-pxtorem': {
      'rootValue': 18,
      'selectorBlackList': [
        /^body$/,
      ],
      'propList': [
        'font',
        'font-size',
        'margin*',
        'padding*',
      ],
    },
    'autoprefixer': {},
    'cssnano': ctx.env === 'production' ? {} : false,
  },
});
