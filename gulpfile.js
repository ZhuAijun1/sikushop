/*
 * @Author: your name
 * @Date: 2020-06-20 12:12:41
 * @LastEditTime: 2020-06-22 10:30:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WWWe:\千峰线下\第二阶段\gulpfile.js
 */
const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const sourcemaps = require("gulp-sourcemaps");

// 搭建服务器
gulp.task("server", done => {

  connect.server({
    root: "dist",

    livereload: true
  })

  done();
})
// html文件
gulp.task("copyHtml", done => {

  gulp.src("html/*.html").pipe(
    gulp.dest("dist/html")
  ).pipe(connect.reload());

  done();
})

gulp.task("copyHtmls", done => {

  gulp.src("./pages/*.html").pipe(
    gulp.dest("./dist/pages")
  ).pipe(connect.reload());

  done();
})
// 监听img
gulp.task("copyImg", done => {

  gulp.src("./img/*.*").pipe(
    gulp.dest("./dist/img")
  ).pipe(connect.reload());

  done();
})
gulp.task("copyMp4", done => {

  gulp.src("./mp4/*.mp4").pipe(
    gulp.dest("./dist/mp4")
  ).pipe(connect.reload());

  done();
})
gulp.task("copyshopimg", done => {

  gulp.src("./shopimg/*.*").pipe(
    gulp.dest("./dist/shopimg")
  ).pipe(connect.reload());

  done();
})
gulp.task("copyiconfont", done => {

  gulp.src("./iconfont/*.*").pipe(
    gulp.dest("./dist/iconfont")
  ).pipe(connect.reload());

  done();
})
gulp.task("copyiconfont2", done => {

  gulp.src("./iconfont2/*.*").pipe(
    gulp.dest("./dist/iconfont2")
  ).pipe(connect.reload());

  done();
})
// 监听js文件
gulp.task("copyJs", done => {

  gulp.src("./js/*.js").pipe(
    gulp.dest("./dist/js")
  ).pipe(connect.reload());

  done();
})
// sass转css文件
gulp.task("sass", (done) => {
  gulp.src("./css/*.scss")
    .pipe(sourcemaps.init())
    //nested
    //expanded
    //compact
    //compressed
    .pipe(sass({
      outputStyle: "compressed"
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/css"));

  done();
});

gulp.task("sassa", done => {

  gulp.src("./css/*.scss").pipe(
    gulp.dest("dist/css")
  ).pipe(connect.reload());

  done();
})
/* css文件 */
gulp.task("css", done => {

  gulp
    .src("./css/*.css")
    .pipe(connect.reload())
    .pipe(sass({
      outputStyle: "compressed"
    }))
    .pipe(sourcemaps.write())
    .pipe(
      gulp.dest("./dist/css")
    );

  done();
})
// 文件监听
gulp.task("watch", (done) => {
  gulp.watch("html/*.html", gulp.series("copyHtml"));
  gulp.watch("./js/*.js", gulp.series("copyJs"));
  gulp.watch("./css/*.css", gulp.series("css"));
  gulp.watch("./img/*.*", gulp.series("copyImg"));
  gulp.watch("./shopimg/*.*", gulp.series("copyshopimg"));
  gulp.watch("./iconfont/*.*", gulp.series("copyiconfont"));
  gulp.watch("./iconfont2/*.*", gulp.series("copyiconfont2"));
  gulp.watch("./mp4/*.mp4", gulp.series("copyMp4"));
  done();
});

gulp.task("default", gulp.series("server", "watch"));