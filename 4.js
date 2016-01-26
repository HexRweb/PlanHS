window.onload = function(){

	function updateDemo(what)
	{
		document.getElementById("demo").innerHTML = what.four;
	}	
	

	document.getElementById('demo').innerHTML = chrome.storage.sync.get("four",updateDemo);

	document.getElementById('save').onclick = function() {

		var four = document.getElementById('saveLine').value;
//alert(value);

				chrome.storage.sync.set({'four': four}, function() {
          		// Notify that we saved
          			alert('Settings saved');
       			 });

			};

				document.getElementById('get').onclick = function() {

					chrome.storage.sync.get('four',updateDemo);

				}

	}