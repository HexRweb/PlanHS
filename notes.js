window.onload = function(){

	function updateDemo(hi)
	{
		document.getElementById("demo").innerHTML = hi.notes;
	}	
	

	document.getElementById('demo').innerHTML = chrome.storage.sync.get("twonotesnotes",updateDemo);

	document.getElementById('save').onclick = function() {

		var twonotes = document.getElementById('saveLine').value;
//alert(value);

				chrome.storage.sync.set({'twonotes': twonotes}, function() {
          		// Notify that we saved
          			alert('Settings saved');
       			 });

			};

				document.getElementById('get').onclick = function() {

					chrome.storage.sync.get('twonotes',updateDemo);

				}

	}