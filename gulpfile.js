var gulp=require('gulp');
var browserify=require('browserify');
var babelify=require('babelify');
var source=require('vinyl-source-stream');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

var jsSrc = 'source/**/*.js';
var jsDist = 'build/*.js';
 var htmlSrc = './*.html';
 
gulp.task('bianyi',function(){
	return browserify('./source/index.js')
		  .transform(babelify,{presets:['react']})
		  .bundle()
		  .pipe(source('index.js'))
		  .pipe(gulp.dest('./build/'))
		  
})

//定义名为js的任务
gulp.task('js', function () {
   gulp.src(jsSrc)
       .pipe(connect.reload())
});
//定义html任务
 gulp.task('html', function () {
    gulp.src(htmlSrc)
       .pipe(connect.reload());
});
//定义看守任务
gulp.task('watch', function () {

   gulp.watch(htmlSrc, ['html']);
    gulp.watch(jsSrc,['bianyi']);     //
	gulp.watch(jsDist,['js']);
});
//定义livereload任务
gulp.task('connect', function () {
    connect.server({
     livereload: true
   });
});

 //定义默认任务
gulp.task('default', ['bianyi', 'js', 'html','watch', 'connect']);
