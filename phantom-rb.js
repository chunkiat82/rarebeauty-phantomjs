var system = require('system');
var page = require('webpage').create();
var env = system.env;
var urlKibana = env.KIBANAURL;
var urlAuth = env.AUTHURL;
var jwt = env.JWT;
var width = env.width;
var height = env.height;
var filename = env.FILENAME;
var filename = env.FILENAME;
var waitTimeout = (env.WAIT_TIMEOUT && NUMBER(env.WAIT_TIMEOUT)) || 2000;
page.viewportSize = { width: width, height: height };

page.open(urlAuth + jwt, function (status) {
  console.log("Status: " + status);
  if (status === "success") {
    open(page, phantom);
  }
});

function open() {
  page.open(urlKibana, function (status) {
    function checkReadyState() {
      setTimeout(function () {
        var readyState = page.evaluate(function () {
          return document.readyState;
        });

        if ("complete" === readyState) {
          setTimeout(onPageReady, waitTimeout);
        } else {
          checkReadyState();
        }
      });
    }
    checkReadyState();
  });
}

function onPageReady() {
  page.render('/data/' + filename + '.png');
  phantom.exit();
}