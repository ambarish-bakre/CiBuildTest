var gulp = require('gulp');
var fs = require('fs');
var replace = require('gulp-replace');
var jeditor = require("gulp-json-editor");

// Sets build number in version.dat that can reused as a global version number e.g gulp setBuildVersion --buildno 5
gulp.task('setBuildVersion', function () {
    if (process.argv[4]) {
        var buildNo = process.argv[4];
        var version = fs.readFileSync('./version.dat', 'utf8');
        var versionArray = version.trim().split('.');
        versionArray[versionArray.length - 1] = buildNo;
        version = versionArray.join('.');
        console.log(version);
        fs.writeFileSync('./version.dat', version, 'utf8');
    }
});


// Updates AssemblyInfo.cs/vb in entire project with from version.dat file
gulp.task('setAssemblyVersion', function () {
    var version = fs.readFileSync('./version.dat', 'utf8');
    gulp.src('../**/AssemblyInfo.**')
        .pipe(replace(/AssemblyVersion\("\d\.\d\.\d\.\d"\)/g, 'AssemblyVersion("' + version + '")'))
        .pipe(replace(/AssemblyFileVersion\("\d\.\d\.\d\.\d"\)/g, 'AssemblyFileVersion("' + version + '")'))
        .pipe(gulp.dest('../'));
});

// Updates package.json in the entire project with version.dat file
gulp.task('setNpmPackageVersion', function () {

    gulp.src('./package.json')
        .pipe(jeditor(function (package) {
            var version = fs.readFileSync('./version.dat', 'utf8');
            // npm packages versions are of form Major.Minor.Build
            var versionArray = version.trim().split('.');
            versionArray.splice(2, 1);
            version = versionArray.join('.');
            package.version = version;
            return package;
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('setWixVersion', function () {
    var version = fs.readFileSync('./version.dat', 'utf8');
    gulp.src('../**/Product.wxs')
        .pipe(replace(/Version="\d\.\d\.\d\.\d"/g, 'Version="' + version + '"'))
        .pipe(gulp.dest('../'));
});

// Set WebPortal modules version
gulp.task('setWebPortalModuleVersion', function () {
    var version = fs.readFileSync('./version.dat', 'utf8');
    gulp.src('./Smart/WebPortal/version.json')
        .pipe(jeditor(function (json) {
            for (var i in json) {
                json[i].version = version;
            }
            return json;
        }))
        .pipe(gulp.dest('./Smart/WebPortal/WebPortal/'));
});