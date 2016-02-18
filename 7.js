window.onload = function(){

	function updateDemo(what)
	{
		document.getElementById("demo").innerHTML = what.total7;
	}	
	

	document.getElementById('demo').innerHTML = chrome.storage.sync.get("total7",updateDemo);

	document.getElementById('save').onclick = function() {

		var seven = document.getElementById('saveLine').value;
//alert(value);
	var a7 ='<iframe id="cool" src="';
	var b7 = '" width="750" height="725"></iframe>';


var total7 = a7 + seven + b7;
				chrome.storage.sync.set({'total7': total7}, function() {
          		// Notify that we saved
          			alert('Settings saved');
       			 });

			};

				document.getElementById('get').onclick = function() {

					chrome.storage.sync.get('total7',updateDemo);

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
