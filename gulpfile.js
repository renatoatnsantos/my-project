const gulp = require('gulp')
const browserSync = require('browser-sync')






gulp.task('server' , ()=>{
    browserSync.init({
        server : {
            baseDir : 'src' // O mesmo que http://localhost:3000 ou
            //proxy : 'http://localhost:3000' caso queira usar o gulp em conjunto a outro serv
        }
    })
    gulp.watch('src/**/*').on('change' , browserSync.reload ) // Responsável pelo live reload da página
})

gulp.task('default' , gulp.series(gulp.parallel(['server'])))