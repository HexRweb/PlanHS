window.onload = function(){

	function updateDemo(what)
	{
		document.getElementById("demo").innerHTML = what.two;
	}	
	

	document.getElementById('demo').innerHTML = chrome.storage.sync.get("two",updateDemo);

	document.getElementById('save').onclick = function() {

		var two = document.getElementById('saveLine').value;
//alert(value);

				chrome.storage.sync.set({'two': two}, function() {
          		// Notify that we saved
          			alert('Settings saved');
       			 });

			};

				document.getElementById('get').onclick = function() {

					chrome.storage.sync.get('two',updateDemo);

				}

	}