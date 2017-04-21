"use strict";

const gulp = require('gulp');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('js', function () {
    return gulp.src('probable-waffle/js/custom/*.js')
        .pipe(jshint({
            esversion: 6
        }))
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});

gulp.task('css', function () {
    return gulp.src('probable-waffle/styles/scss/main.scss')
        .pipe(scss({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['last 4 versions', 'Chrome <= 20','Firefox <= 20', 'Opera <= 20', 'Explorer <= 20', 'ie 6-8']
        }))
        .pipe(gulp.dest('probable-waffle/styles/css'));
});

gulp.task('scss:watch', function () {
    gulp.watch('styles/scss/*.scss', ['css']);
});