
var system = require('system');
var args = system.args;

if (args.length === 1) {
  console.error('Try to pass some arguments when invoking this script!');
  console.log('Try to pass some arguments when invoking this script!');
} else {
  args.forEach(function(arg, i) {
    console.error(i + ': ' + arg);
    console.log(i + ': ' + arg);
  });
}



throw 'sdfdsfdsf';
console.log('sdfsfsdf');
return;
