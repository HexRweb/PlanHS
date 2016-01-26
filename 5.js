window.onload = function(){

	function updateDemo(what)
	{
		document.getElementById("demo").innerHTML = what.five;
	}	
	

	document.getElementById('demo').innerHTML = chrome.storage.sync.get("five",updateDemo);

	document.getElementById('save').onclick = function() {

		var five = document.getElementById('saveLine').value;
//alert(value);

				chrome.storage.sync.set({'five': five}, function() {
          		// Notify that we saved
          			alert('Settings saved');
       			 });

			};

				document.getElementById('get').onclick = function() {

					chrome.storage.sync.get('five',updateDemo);

				}

	}