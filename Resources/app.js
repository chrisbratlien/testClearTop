Ti.include('lib.js');

var SERVICE_INTERVAL = 1000 * 15;

var intent = Ti.Android.createIntent({ //declared global, no var
	url: 'menu.js'
});
Ti.Android.currentActivity.startActivity(intent);



var serviceIntent = Ti.Android.createServiceIntent({ //declared global, no var
	url: 'testservice.js'
});
serviceIntent.putExtra('interval', SERVICE_INTERVAL);
if (! Ti.Android.isServiceRunning(serviceIntent)) { //only start it if it's not running.
  //console.log('starting up backgroundServiceIntent!');
  Ti.Android.startService(serviceIntent);
}