const postcss = require('rollup-plugin-postcss');
const { terser } = require('rollup-plugin-terser');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: true,
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        // Append to <head /> as code running
        inject: true,
        // Keep it as false since we don't extract to css file anymore
        extract: true,
      }),
      terser()
    );
    return config;
  },
};
