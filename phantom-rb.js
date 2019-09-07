var system = require('system');
var env = system.env;
var page = require('webpage').create();
var urlKibana = env.KIBANAURL;
var urlAuth = env.AUTHURL;
var jwt = env.JWT;
page.viewportSize = { width: 1024, height: 1024 };
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
          setTimeout(onPageReady, 2000);
        } else {
          checkReadyState();
        }
      });
    }
    checkReadyState();
  });
}


function onPageReady() {
  page.render('/data/' + new Date().toString() + '.png');
  phantom.exit();
}