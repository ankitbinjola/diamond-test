
var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
const { watch, series ,parallel } = require('gulp');
var sass = require('gulp-sass');



//converting scss to css
function convertingsasstocss(){
return gulp.src('./scss/*.scss')
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest('./css'));
}

//uglify css

function uglificss(){
return gulp.src('./css/*.css')
.pipe(uglifycss({
  "uglyComments": true
}))
.pipe(gulp.dest('./dist/'));
}


// //watching changes
function watching(){
  return watch(['./scss/*.scss', './css/*.css'], {interval: 1000}, parallel(convertingsasstocss, uglificss));
}


// exports.default = defaultTask;
exports.convertingsasstocss = convertingsasstocss;
exports.uglificss = uglificss;
exports.default= watching;