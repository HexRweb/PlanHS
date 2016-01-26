window.onload = function(){

	function updateDemo(what)
	{
		document.getElementById("demo").innerHTML = what.one;
	}	
	

	document.getElementById('demo').innerHTML = chrome.storage.sync.get("one",updateDemo);

	document.getElementById('save').onclick = function() {

		var one = document.getElementById('saveLine').value;
//alert(value);

				chrome.storage.sync.set({'one': one}, function() {
          		// Notify that we saved
          			alert('Settings saved');
       			 });

			};

				document.getElementById('get').onclick = function() {

					chrome.storage.sync.get('one',updateDemo);

				}

	}