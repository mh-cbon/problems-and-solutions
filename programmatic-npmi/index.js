var m = process.argv[2] || 'jshint'

require('child_process')
.spawn('npm', ['i', m, '--save'], {stdio :'inherit'})
.on('error', console.error.bind(console))
.on('close', function () {
  var jshint = require("./tomate/node_modules/" +m).JSHINT;
  console.log("jshint %s", typeof(jshint));
  console.log('all done it this message has displayed');
})
