module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    require('postcss-import')({
      plugins: [
        require('stylelint')
      ]
    }),
    require('postcss-mixins'),
    require('postcss-normalize')({
      forceImport: true,
      browsers: 'last 2 versions'
    }),
    require('postcss-utilities'),
    require('postcss-custom-properties'),
    require('postcss-custom-media'),
    require('postcss-nesting'),
    require('autoprefixer'),
    require('cssnano')
  ]
});
