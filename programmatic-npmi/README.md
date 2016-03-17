# programmatic npm i

Problem about module installation with node itself.

## Question
how to programmatically install node modules ?

## Answer
Make use of Node module `child_process` to invoke npm
and ask it to install the module.

###### short answer looks likes this

```js
require('child_process').spawn('npm', ['i', 'MODULE', '--save'], {stdio :'inherit'});
```

- tips : use stdio: inherit option to redirect stdout / stderr

###### longer answer is like that
```js
var m = 'jshint'

require('child_process')
.spawn('npm', ['i', m, '--save'], {stdio :'inherit'})
.on('error', console.error.bind(console))
.on('close', function () {
  var jshint = require(m).JSHINT;
  console.log("jshint %s", typeof(jshint));
  console.log('all done it this message has displayed');
})
```

## Remarks

It won t work if i invoke the script from a different location.

The situation is like,
- the script reside at path `/home/you/a/index.js`
- you invoked it from `/home/you/b/`

The results of its execution would be like this
```
$ node ../index.js
[lots of npm output, but its OK]

module.js:339
    throw err;
    ^

Error: Cannot find module 'jshint'
    at Function.Module._resolveFilename (module.js:337:15)
    at Function.Module._load (module.js:287:25)
    at Module.require (module.js:366:17)
    at require (module.js:385:17)
    ...
```

The module `require` statement would fail and the module wont be loaded as expected.

## Observations

If you carefully study the results of your execution, you ll notice that :
- the `node_modules` folder was created at `/home/you/b/`
- the script path is `/home/you/a/`

# Explanations

As you should already know, the `require` statement resolves
its dependencies paths according to the currently executed script.

In other words, `npm i` correctly installed the dependencies into the current process working directory `/home/you/b/`.
But, when `index.js` called for `require` it resolved it relatively to `/home/you/a/`

# Solution

A quick and dirty work around would be to load the dependency from its absolute path to partially prevent `require` to use its resolution mechanism.

```js
var m = 'jshint'

require('child_process')
.spawn('npm', ['i', m, '--save'], {stdio :'inherit'})
.on('error', console.error.bind(console))
.on('close', function () {

  var jshint = require('../b/node_modules/' + m).JSHINT; // changed HERE

  console.log("jshint %s", typeof(jshint));
  console.log('all done it this message has displayed');
})
```
The good solution to this particular problem depend of the requirement of your module and the way dependencies should be installed for it to run properly.

No perfect answer here.
