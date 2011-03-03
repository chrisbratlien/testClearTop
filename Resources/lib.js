if (typeof QTAGS == "undefined"){
  QTAGS = {};
}

QTAGS.Utils = {};
QTAGS.Utils.log = function() {
  var result = '>>> ';
  for (var i = 0; i < arguments.length; i++) {
  
    if (typeof arguments[i] == "undefined") {
      result += ' undefined';
    }
    else if (arguments[i] == null) {
      result += ' null';
    }
    else {
      result += ' ' + arguments[i].toString();  
    }
  
  }
  Ti.API.info(result);
};

QTAGS.Utils.randomHexColor = function() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

var console = QTAGS.Utils; // so that we can say console.log() //


