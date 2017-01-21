var gulp        = require('gulp');
var less        = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
//var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var purify = require('gulp-purifycss');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');

// gulp.task('hello', function() {
//     console.log('Hello Zell');
// });

gulp.task('less', function(){
    return gulp.src('app/less/main.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        //.pipe(cleanCSS({compatibility: 'ie8'}))
        //.pipe(purify(['app/**/*.js', 'app/**/*.html']))
        // .pipe(purify(['app/**/*.js', 'app/**/*.html']))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('useref', function(){
    return gulp.src('app/index.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest(''))
});


gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});

/*
 manage images
 */

gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
        .pipe(gulp.dest('images'))
});




/*
manage fonts
 */


gulp.task('fontawesome', function() {
    return gulp.src('app/components/font-awesome/fonts/*')
        .pipe(gulp.dest('fonts'))
});

gulp.task('fontawesomedev', function() {
    return gulp.src('app/components/font-awesome/fonts/*/**')
        .pipe(gulp.dest('fonts'))
});

gulp.task('slick', function() {
    return gulp.src('app/components/slick-carousel/slick/fonts/*')
        .pipe(gulp.dest('fonts'))
});

gulp.task('slickdev', function() {
    return gulp.src('app/components/slick-carousel/slick/fonts/*')
        .pipe(gulp.dest('fonts'))
});

gulp.task('bootstrapfont', function() {
    return gulp.src('app/components/bootstrap/fonts/**/*')
        .pipe(gulp.dest('fonts'))
});

gulp.task('bootstrapfontdev', function() {
    return gulp.src('app/components/bootstrap/fonts/**/*')
        .pipe(gulp.dest('fonts'))
});

/*
watcher for dev
 */

gulp.task('watch', ['browserSync', 'less'], function (){
    gulp.watch('app/less/**/*.less', ['less']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

/*
clean css for dist
 */

gulp.task('cleancss', function(){
    return gulp.src('css/main.min.css')
        .pipe(purify(['*.html']))
        .pipe(gulp.dest('css'))
});

/*
build dist
 */
