window.onload = function(){

	function updateDemo(what)
	{
		document.getElementById("demo").innerHTML = what.three;
	}	
	

	document.getElementById('demo').innerHTML = chrome.storage.sync.get("three",updateDemo);

	document.getElementById('save').onclick = function() {

		var three = document.getElementById('saveLine').value;
//alert(value);

				chrome.storage.sync.set({'three': three}, function() {
          		// Notify that we saved
          			alert('Settings saved');
       			 });

			};

				document.getElementById('get').onclick = function() {

					chrome.storage.sync.get('three',updateDemo);

				}

	}