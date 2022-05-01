let mix = require('laravel-mix');


mix.js('src/js/app.js', 'js');

mix.sass('src/sass/main.scss', 'css')
   .options({
      processCssUrls: false
   });

mix.copy('src/sass/plugins/modal-box.min.css', 'dist/css');
mix.js('src/js/modal-box.min.js', 'dist/js');
mix.copy('src/sass/plugins/videotube.min.css', 'dist/css');
mix.js('src/js/videotube.min.js', 'dist/js');

mix.copy('src/fonts/*', 'dist/fonts')

mix.copy('src/images/*', 'dist/images');
mix.copy('src/images/collage/*', 'dist/images/collage');
mix.copy('src/images/icons/*', 'dist/images/icons');
mix.version();




mix.setPublicPath('dist');