var gulp        = require('gulp');
var browserify  = require('gulp-browserify');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');
var livereload  = require('gulp-livereload');
var minifyCSS   = require('gulp-minify-css');
var embedlr     = require('gulp-embedlr');
var notify      = require("gulp-notify");
var include     = require("gulp-include")
var tsc         = require("gulp-typescript");
var connect     = require('gulp-connect');
var npmDist     = require('gulp-npm-dist');

// Copy dependencies to ./public/libs/
gulp.task('copy:libs', function() {
  gulp.src(npmDist({copyUnminified: true}), {base:'./node_modules'})
    .pipe(gulp.dest('./dist/libs'));
});

gulp.task('assets', function() {
    gulp.src(['app/assets/*'])
        .pipe(gulp.dest('dist/assets'))
        .pipe(livereload())
})

gulp.task('requirejs', function() {
    gulp.src(['node_modules/requirejs/require.js'])
        .pipe(gulp.dest('dist/'))
        .pipe(livereload())
})

gulp.task('scripts', function() {
    gulp.src(['app/src/js/**/*.js'])
        .pipe(browserify())
        .pipe(concat('dest.js'))
        .pipe(gulp.dest('dist/build'))
        .pipe(livereload())

    gulp.src(['app/src/root.js'])
        .pipe(gulp.dest('dist/build'))
        .pipe(livereload())

    gulp.src(['app/src/ts/**/*.ts'])
        .pipe(tsc({
            noImplicitAny: true,
            module: 'AMD'
        }))
        .pipe(gulp.dest('dist/build'))
})

gulp.task('styles', function() {
    gulp.src(['app/css/application.scss'])
        .pipe(
          sass().on("error", notify.onError(function(error) {
            return "Error: " + error.message;
          })
        ))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/build'))
        .pipe(livereload())

    gulp.src("app/css/vendor.css")
        .pipe(include({
          extensions: "css",
          hardFail: true,
          includePaths: [
            __dirname + "/node_modules"
          ]
        }))
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest("dist/build"));
})



gulp.task('html', function() {
    gulp.src("app/*.html")
        .pipe(embedlr())
        .pipe(gulp.dest('dist/'))
        .pipe(livereload());
})

gulp.task('webserver', function() {
  connect.server({root: 'dist'});
});

gulp.task('init', ['scripts', 'styles', 'html', 'webserver', 'assets', 'requirejs', 'copy:libs'])

gulp.task('watch', ['init'], function() {
    livereload.listen();

    gulp.watch('app/src/**', ['scripts']);
    gulp.watch('app/css/**', ['styles']);
    gulp.watch('app/**/*.html', ['html']);
    gulp.watch('app/assets/**', ['assets']);
    gulp.watch('package.json', ['copy:libs']);
})

gulp.task('default', ['watch']);
