const gulp = require('gulp')
gulp.task('hello',done=>{
    console.log('hello')
    done()
})
gulp.task('hello1',done=>{
    console.log('hello world')
    done()
})
gulp.task('default',gulp.series('hello','hello1'))
gulp.task('copyindex',done=>{
    gulp.src('index.html').pipe(gulp.dest('dist'))
    done()
})