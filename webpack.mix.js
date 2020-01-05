
const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const glob = require('glob-all');
require('laravel-mix-purgecss');

mix.js('resources/js/app.js', 'public/javascripts/')
   .sass('resources/scss/app.scss', 'public/stylesheets/')
   .purgeCss({
      enabled: true,
      extensions: ['pug', 'vue'],
      paths: () => glob.sync([
        path.join(__dirname, 'views/**/*.pug'),
        path.join(__dirname, 'resources/js/**/*.vue'),
      ])
    })
   .options({
      processCssUrls: false,
      postCss: [ tailwindcss('./tailwind.config.js') ],
    });
