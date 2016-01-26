window.onload = function(){

	function updateDemo(what)
	{
		document.getElementById("demo").innerHTML = what.calender;
	}	
	

	document.getElementById('demo').innerHTML = chrome.storage.sync.get("calender",updateDemo);

	document.getElementById('save').onclick = function() {

		var calender = document.getElementById('saveLine').value;
//alert(value);

				chrome.storage.sync.set({'calender': calender}, function() {
          		// Notify that we saved
          			alert('Settings saved');
       			 });

			};

				document.getElementById('get').onclick = function() {

					chrome.storage.sync.get('calender',updateDemo);

				}



				

	}

