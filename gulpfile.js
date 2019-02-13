var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var uncss = require('gulp-uncss');
//tarefa chamada js
//substitui o jquery e bootstrap da web pelo local minificado
gulp.task('js', function () {
    return gulp.src([
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('wwwroot/js/'));
});
//tarefa chamada css
//concatena dois arquivos css em apenas um
gulp.task('css', function () {
    //seleciona os dois arquivos para concatenar
    return gulp.src([
        './styles/site.css',
        './node_modules/bootstrap/dist/css/bootstrap.css'
    ])
        //concatena os arquivos selecionados dentro do novo arquivo
        .pipe(concat('site.min.css'))
        //minimifica o arquivo
        .pipe(cssmin())
        //verifica todas as views e remove o css do arquivo geraado que não for utilizado
        .pipe(uncss({ html: ['Views/**/*.cshtml'] }))
        //destino do arquivo
        .pipe(gulp.dest('wwwroot/css'));
});
//tarefa que fica assistindo quando ocorre alteração no diretório css 
//chama o evento css que atualiza os estilos da página
gulp.task('watch-css', function () {
    gulp.watch('./Styles/**/*.css', ['css']);
});