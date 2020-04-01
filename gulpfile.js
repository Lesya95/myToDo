const { watch, src, dest , series} = require('gulp');

const rename = require('gulp-rename')

const concat = require('gulp-concat')

function copyHtml() {
  return src('*.html')
    .pipe(dest('build/'));
}

function copyCss() {
    return src(['node_modules/bulma/css/*.css', 'node_modules\font-awesome\css\font-awesome.css'])
        .pipe(concat('style.css'))
        .pipe(rename({suffix:".min"}))
        .pipe(dest('build/'))
}

function getJs() {
    return src('dist/*.js')
      .pipe(dest('build/'));
}

exports.build = series(copyHtml, copyCss, getJs);

function getReady() {
    copyHtml()
    copyCss()
    getJs()
}

exports.default = function() {
    getReady()

    watch('*.html', copyHtml);
    watch('dist/*.js', getJs);
    watch(['dist/*.js', '*.html'], series(copyHtml, getJs));
  };