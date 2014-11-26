'use strict';

var gulp           = require('gulp')
,   $              = require('gulp-load-plugins')()
,   browserify     = require('browserify')
,   coffee         = require('gulp-coffee')
,   coffeelint     = require('gulp-coffeelint')
,   mocha          = require('gulp-mocha')
,   mochaPhantomJS = require('gulp-mocha-phantomjs')
,   source         = require('vinyl-source-stream');


var path         = require('../utils/paths')
,   handleErrors = require('../utils/handleErrors');

// Options

var mochaOpts = {
  reporter: 'spec',
  globals: ['module']
};

var phantomOpts = {
  viewportSize: {
    width: 1,
    height: 1
  }
};

var browserifyOpts = {
  debug: true,
  standalone: 'shared'
};

gulp.task('coffee:lint', function () {
    gulp.src('./' + path.test.coffee + '**/*.coffee')
        .pipe(coffeelint({"opt": { "indentation": { "value": 4 }}}))
        .pipe(coffeelint.reporter())
});

gulp.task('test:coffeeify', function() {
    gulp.src('./' + path.test.coffee + '**/*.coffee')
        .pipe(coffee({bare: true})
        .on('error', handleErrors))
        .pipe(gulp.dest('./' + path.test.path))

});

gulp.task('test:unit', function() {
  return gulp.src(path.test.unit + '**/*.js')
    .pipe(mocha(mochaOpts));
});


gulp.task('test:browserify_functional', function () {
  return browserify( './' + path.test.functional + 'spec/index.js', browserifyOpts ).bundle()
    .on('error', handleErrors)
    .pipe(source( './' + path.test.functional + 'spec/index.js' ))
    .pipe($.changed(path.test.functional))
    .pipe($.rename('bundle.js'))
    .pipe(gulp.dest(path.test.functional))
    //.pipe($.rename('bundle.min.js'))
    //.pipe($.streamify($.uglify()))
    .on('error', handleErrors)
    .pipe(gulp.dest(path.test.functional));
});

gulp.task('test:functional', function() {
  return gulp.src(path.test.functional + 'runner.html')
    .pipe(mochaPhantomJS({phantomjs: phantomOpts}));
});

gulp.task('test:watch', ['test'], function() {
  gulp.watch([path.src.js + '**/*.js'], ['test']);
  gulp.watch([path.test.coffee + '**/*.coffee'], ['test:unit']);
  gulp.watch([path.test.functional + '**/*'], ['test:functional']);
});

gulp.task('test', ['coffee:lint', 'test:coffeeify', 'test:browserify_functional', 'test:unit', 'test:functional']);
