window.onload = function(){

	function updateDemo(what)
	{
		document.getElementById("demo").innerHTML = what.eight;
	}	
	

	document.getElementById('demo').innerHTML = chrome.storage.sync.get("eight",updateDemo);

	document.getElementById('save').onclick = function() {

		var eight = document.getElementById('saveLine').value;
//alert(value);

				chrome.storage.sync.set({'eight': eight}, function() {
          		// Notify that we saved
          			alert('Settings saved');
       			 });

			};

				document.getElementById('get').onclick = function() {

					chrome.storage.sync.get('eight',updateDemo);

				}

		 function registerPostMessageHandler() {
            // Listen to message from child window
            var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
            var eventer = window[eventMethod];
            var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

            eventer(messageEvent,function(e) {
                var key = e.message ? "message" : "data";
                var data = e[key];
                console.log("Message obtained from origin " + e.origin + ' data: ' + data);

                //Insert an AD slot based on the message
            },false);
        }

	}