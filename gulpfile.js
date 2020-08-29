const gulp = require('gulp');
const sass = require('gulp-sass');
const GulpClient = require('gulp');
const browserSync = require('browser-sync').create();

//compile scss to css
function style() {
    //where is my scss file 
    return gulp.src('./sass/*.scss')
    //pass that file through compiler
    .pipe(sass().on('error', sass.logError))
    //where do i save the compiled css ?
    .pipe(gulp.dest('./css'))
    //stream changes to all browser 
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./sass/*.scss',style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
}



exports.style = style;
exports.watch = watch;
