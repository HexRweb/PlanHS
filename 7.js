window.onload = function(){

	function updateDemo(what)
	{
		document.getElementById("demo").innerHTML = what.frame;
	}	
	

	document.getElementById('demo').innerHTML = chrome.storage.sync.get("frame",updateDemo);

	document.getElementById('save').onclick = function() {

		var swag = document.getElementById('saveLine').value;
//alert(value);

				chrome.storage.sync.set({'frame': swag}, function() {
          		// Notify that we saved
          			alert('Settings saved');
       			 });

			};

				document.getElementById('get').onclick = function() {

					chrome.storage.sync.get('frame',updateDemo);

				}

	}
