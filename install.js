'use strict';

var path = require('path');
var download = require('download');

var closureToolsUrls = 'https://github.com/google/closure-library/archive/master.zip';
var downloadDir = path.join(__dirname, 'lib');

var closureToolsDownload = download({ mode: '755', extract: true , strip: 1})
	.get(closureToolsUrls)
	.dest(downloadDir);

closureToolsDownload.run(function(err, files){
	if(err) {
		throw new Error('Failed to download "' + closureToolsUrls + '"!\n' + err);
	}
	
	console.log('Successfully downloaded "' + closureToolsUrls + '" to:\n    ' + downloadDir);
});
