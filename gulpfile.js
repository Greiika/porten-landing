let preprocessor = 'scss';

// Определяем константы Gulp
const {src, dest, watch, parallel, series} = require('gulp');
// Подключаем модули gulp-sass
const scss         = require('gulp-sass')(require('sass'));
const less         = require('gulp-less')
// Подключаем gulp-concat
const concat       = require('gulp-concat');
// Подключаем Browsersync
const browserSync  = require('browser-sync').create();
// Подключаем gulp-uglify-es
const uglify       = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin     = require('gulp-imagemin');
const del          = require('del');
const rename       = require('gulp-rename');

// Определяем логику работы Browsersync
function browsersync() {
    browserSync.init({   // Инициализация Browsersync
        server: { baseDir: 'app/'}, // Указываем папку сервера
        browser: 'chrome',
        notify: false,  // Отключаем уведомления
        online: true  // Режим работы: true или false
    });
}

function cleanDist() {
    return del ('dist')
}

function images() {
    return src('app/images/**/*')
        .pipe(imagemin(
            [
                imagemin.gifsicle({interlaced: true}),
                imagemin.mozjpeg({quality: 75, progressive: true}),
                imagemin.optipng({optimizationLevel: 5}),
                imagemin.svgo({
                    plugins: [
                        {removeViewBox: true},
                        {cleanupIDs: false}
                    ]
                })
            ]
        ))
        .pipe(dest('dist/images'))
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
        'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function libs() {
    return src ([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/magnific-popup/dist/magnific-popup.css'
    ])
    .pipe(concat('libs.scss'))
    .pipe(dest('app/scss'))
    .pipe(browserSync.stream())
}

function styles() {
    return src('app/' + preprocessor + '/**/*.' + preprocessor + '')
        .pipe(eval(preprocessor)({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function build() {
    return src([
        'app/css/style.min.css',
        'app/fonts/**/*',
        'app/js/*.min.js',
        'app/*.html'
    ], {base: 'app'})
    .pipe(dest('dist'))
}

function watching() {
    watch('app/' + preprocessor + '/**/*', styles);
    watch(['app/js/**/*.js', '!app/js/**/*.min.js'], scripts);
    watch(['app/**/*.html']).on('change', browserSync.reload);
}


exports.styles = styles;
exports.watching = watching; 
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;
exports.libs = libs;

exports.build = series(cleanDist, images, build);
exports.default = parallel(libs, styles, scripts, browsersync, watching);

