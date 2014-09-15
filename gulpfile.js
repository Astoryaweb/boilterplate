var fs   = require('fs');
var less = require('less');
var gulp = require('gulp');
	gulp.task('build', function(){
		
	});
	gulp.task('push', function(){
		
	});
	gulp.task('dump', function(){
		
	});
	gulp.task('debug', function(){
		
	});
	gulp.task('info', function(){
		
	});
	gulp.task('watch', function(){
		var input  = 'less/main.less';
		var output = 'css/style.css';

		// Watch the file
		fs.watchFile(input, function(){
			// Ask to render the file content
			less.render(fs.readFileSync(input, {encoding: "UTF-8"}), function(err, css){
				if(err) console.error(err);
				// Write css compiled to the file
				fs.writeFile(output, css, function(err){
					if(err) console.error(err);
				})
			});
		});
	});