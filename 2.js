window.onload = function(){

	function updateDemo(what)
	{
		document.getElementById("demo").innerHTML = what.total2;
	}	
	

	document.getElementById('demo').innerHTML = chrome.storage.sync.get("total2",updateDemo);

	document.getElementById('save').onclick = function() {

		var two = document.getElementById('saveLine').value;
//alert(value);
	var a2 ='<iframe id="cool" src="';
	var b2 = '" width="750" height="725"></iframe>';


var total2 = a2 + two + b2;
				chrome.storage.sync.set({'total2': total2}, function() {
          		// Notify that we saved
          			alert('Settings saved');
       			 });

			};

				document.getElementById('get').onclick = function() {

					chrome.storage.sync.get('total2',updateDemo);

				}


//Bacjgroudn Image

	function updateJpg(whi)
	{
		document.getElementById("updateImg").innerHTML = whi.totalImg;
	}	
	

	document.getElementById('updateImg').innerHTML = chrome.storage.sync.get("totalImg",updateJpg);

	document.getElementById('up').onclick = function() {

        var alpha = '<style>html { background: url(';
		var back = document.getElementById('saveLine4').value;
		var beta = ') no-repeat right center fixed; -webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;overflow-x: hidden; margin-left: -2.5px; } </style>';
		var totalImg = alpha + back + beta;
//alert(value);
	
				chrome.storage.sync.set({'totalImg': totalImg}, function() {
          		// Notify that we saved
//          			alert('Settings saved');
       			 });

			};

				document.getElementById('load').onclick = function() {

					chrome.storage.sync.get('totalImg',updateJpg);

				}



	}
