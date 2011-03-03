Ti.include('lib.js');
      
var menuIntent = Ti.Android.createIntent({
    url: 'menu.js'
});    

console.log('flag value',Titanium.Android.FLAG_ACTIVITY_CLEAR_TOP);

//Use case A: comment out the menuIntent.addFlags Each menu.js launched by the background activity every 15 seconds will stack up on the UI stack above the previous. If you let 4 or 5 cycles happen, you can Back button your way back through each of them.

//Use case B: uncomment menuIntent.addFlags and rerun the app. This time, after 4 or 5 cycles, you can hit Back, but you'll not have a UI history of each prior activity.

menuIntent.addFlags(Titanium.Android.FLAG_ACTIVITY_CLEAR_TOP);

Ti.Android.currentActivity.startActivity(menuIntent);