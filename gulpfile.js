/*  Requirements    */
const gulp = require('gulp');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const ruby = require('gulp-ruby-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-minify-css');
const mincss = require('gulp-clean-css');
const livereload = require('gulp-livereload');
const reload = browserSync.reload;


//browsersynck
gulp.task('browser-sync', function(){
  browserSync.init({
    server: './'
  });
});

//SASS COMPILER
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

//MINIFY js file
gulp.task('scripts', function() {
  return gulp.src('sass/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

//OPTIMIZE IMAGES
gulp.task('imageMin', function() {
 return gulp.src('./images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/imgs'))
  });


//COPY & minify HTML files
gulp.task('copyHtml', function () {
 return gulp.src('./**.html')
  //comment out the bottom-line to get normal html
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});


 gulp.task('watch', ['browser-sync', 'sass'], function(){
  gulp.watch('sass/**/*.sass', ['sass']);
  gulp.watch('sass/scripts/*.js', ['scripts']);
   gulp.src('./*.html').on('change', reload);
});

  gulp.task('default', ['browser-sync', 'sass', 'scripts', 'imageMin', 'copyHtml', 'watch']);
