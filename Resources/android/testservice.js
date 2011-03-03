Ti.include('lib.js');
      
var menuIntent = Ti.Android.createIntent({
    url: 'menu.js'
});    

console.log('flag',Titanium.Android.FLAG_ACTIVITY_CLEAR_TOP);

menuIntent.addFlags(Titanium.Android.FLAG_ACTIVITY_CLEAR_TOP);
Ti.Android.currentActivity.startActivity(menuIntent);                
