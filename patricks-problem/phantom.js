

// instanciate a webpage
// http://phantomjs.org/quick-start.html
var page = require('webpage').create();


page.open('http://127.0.0.1:3000/page-1.html', screenPage1);
// we ll use onLoadFinished event to trigger the next function (page-2) handler.
//
// http://phantomjs.org/api/webpage/handler/on-load-finished.html
page.onLoadFinished = function(status) {
  console.log('Status: ' + status);
  if (page.url.match(/page-2/)) {
    screenPage2()
  }
};

function screenPage1 () {
  console.log('page-1 open');
  // render page 1 screenshot
  // http://phantomjs.org/screen-capture.html
  page.render('output/page-1-open.png');

  // page.evalute is a blocking function
  page.evaluate(function() {
    document.querySelectorAll('h1')[0].innerHTML += "- evaluate done";
  });
  page.render('output/page-1-evaluate.png');

  // automate page action to trigger the form and move to page 2
  // http://phantomjs.org/page-automation.html
  page.evaluate(function() {
    return document.querySelectorAll('[action="/page-2.html"]')[0].submit();
  });
}


function screenPage2() {
  console.log('page-2 open');
  // render page 1 screenshot
  // http://phantomjs.org/screen-capture.html
  page.render('output/page-2-open.png');

  // page.evalute is a blocking function
  page.evaluate(function() {
    document.querySelectorAll('h1')[0].innerHTML += "- evaluate done";
  });
  page.render('output/page-2-evaluate.png');

  // automate page action to trigger the form and move to page 2
  // http://phantomjs.org/page-automation.html
  page.evaluate(function() {
    // return document.querySelectorAll('[action="/page-1.html"]')[0].submit();
  });

  console.log('\n\n\nAll done');
  console.log('Press ctrl+c to quit');

  page.close();
  phantom.exit();
}

// bind some page events to display on the console
// http://phantomjs.org/api/webpage/
//
// http://phantomjs.org/api/webpage/handler/on-console-message.html
page.onConsoleMessage = function(msg, lineNum, sourceId) {
  console.log('PHANTOM CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
};
//
// http://phantomjs.org/api/webpage/handler/on-error.html
page.onError = function(msg, trace) {
  var msgStack = ['ERROR: ' + msg];
  if (trace && trace.length) {
    msgStack.push('TRACE:');
    trace.forEach(function(t) {
      msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function +'")' : ''));
    });
  }
  console.error(msgStack.join('\n'));
};
//
// http://phantomjs.org/api/webpage/handler/on-navigation-requested.html
page.onNavigationRequested = function(url, type, willNavigate, main) {
  console.log('Trying to navigate to: ' + url);
  console.log('Caused by: ' + type);
  console.log('Will actually navigate: ' + willNavigate);
  console.log('Sent from the page\'s main frame: ' + main);
}
//
// http://phantomjs.org/api/webpage/handler/on-resource-received.html
page.onResourceReceived = function(response) {
  console.log('Response (#' + response.id + ', stage "' + response.stage + '"): ')
};
//
// http://phantomjs.org/api/webpage/handler/on-resource-requested.html
page.onResourceRequested = function(requestData, networkRequest) {
  console.log('Request (#' + requestData.id + '): ')
};
