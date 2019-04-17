window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };

window.addEventListener("load", function() {
  if (getBrowserVersion('MSIE') <= 9) {
    var elements = document.getElementsByClassName("backward-compatibility");
    for (var i = 0; i < elements.length; i++) {
      var className = elements[i].getAttribute("class");
      elements[i].setAttribute(
        "class",
        className + " enable-backward-compatibility"
      );
    }
  }
});

function getBrowserVersion(browser) {
  var appVersion = navigator.appVersion.split("; ");

  for (var i = 0; i < appVersion.length; i++) {
    if (appVersion[i].indexOf(browser) !== -1) {
      var version = appVersion[i].split(" ");
      if (version.length !== 2) {
        for (var j = 0; j < version.length; j++) {
          if (version[j].indexOf(browser) !== -1) {
            version = version[j].split("/");
            break;
          }
        }
      }
      return parseFloat(version[1]);
    }
  }
}
