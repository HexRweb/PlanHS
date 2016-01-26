window.onload = function(){

	function updateDemo(what)
	{
		document.getElementById("demo").innerHTML = what.six;
	}	
	

	document.getElementById('demo').innerHTML = chrome.storage.sync.get("six",updateDemo);

	document.getElementById('save').onclick = function() {

		var six = document.getElementById('saveLine').value;
//alert(value);

				chrome.storage.sync.set({'six': six}, function() {
          		// Notify that we saved
          			alert('Settings saved');
       			 });

			};

				document.getElementById('get').onclick = function() {

					chrome.storage.sync.get('six',updateDemo);

				}

	}