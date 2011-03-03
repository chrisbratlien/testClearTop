Ti.include('lib.js');

//var win = Ti.UI.createWindow({
//  backgroundColor: QTAGS.Utils.randomHexColor();
//});

var win = Ti.UI.currentWindow;
win.backgroundColor = QTAGS.Utils.randomHexColor();
var label = Ti.UI.createLabel({
  text: 'MENU.JS',
  color: '#fff'
});
win.add(label);
win.open();