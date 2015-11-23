const chokidar = require('chokidar')

chokidar.watch('chock-dir').on('all', function (e, path) {
	console.log(e, path)
})
