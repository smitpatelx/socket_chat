
const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('resources/js/app.js', 'public/javascripts/')
   .sass('resources/scss/app.scss', 'public/stylesheets/')
   .options({
    processCssUrls: false,
    postCss: [ tailwindcss('tailwind.config.js') ],
  });
