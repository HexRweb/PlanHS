window.onload = function(){

	function updateDemo(what)
	{
		document.getElementById("demo").innerHTML = what.total;
	}


	document.getElementById('demo').innerHTML = chrome.storage.sync.get("total",updateDemo);

	document.getElementById('save').onclick = function() {

		var calender = document.getElementById('saveLine').value;
//alert(value);
	var a ='<iframe src="https://www.google.com/calendar/embed?src=';
	var b = '%40gmail.com&ctz=America/Chicago" align="center" style="border: 0" width="565" height="500" frameborder="0" scrolling="no" position="relative" class="everything"></iframe>';


var total = a + calender + b;
				chrome.storage.sync.set({'total': total}, function() {
          		// Notify that we saved
//          			alert('Settings saved');
       			 });

			};

				document.getElementById('get').onclick = function() {

					chrome.storage.sync.get('total',updateDemo);

				}


//1st block notes

	function updateDemo1(whos)
	{
		document.getElementById("trial1").innerHTML = whos.notes1;
	}


	document.getElementById('trial1').innerHTML = chrome.storage.sync.get("notes1",updateDemo1);

	document.getElementById('stick1').onclick = function() {

		var notes1 = document.getElementById('saveLine2').value;
//alert(value);

				chrome.storage.sync.set({'notes1': notes1}, function() {
          		// Notify that we saved
          			//alert('Settings saved');
       			 });

			};

				document.getElementById('post').onclick = function() {

					chrome.storage.sync.get('notes1',updateDemo1);
				}

//2nd block notes

	function updateDemo2(whos)
	{
		document.getElementById("trial2").innerHTML = whos.notes2;
	}


	document.getElementById('trial2').innerHTML = chrome.storage.sync.get("notes2",updateDemo2);

	document.getElementById('stick2').onclick = function() {

		var notes2 = document.getElementById('saveLine2').value;
//alert(value);

				chrome.storage.sync.set({'notes2': notes2}, function() {
          		// Notify that we saved
//          			alert('Settings saved');
       			 });

			};

				document.getElementById('post').onclick = function() {

					chrome.storage.sync.get('notes2',updateDemo2);

				}



//3rd block notes

	function updateDemo3(whos)
	{
		document.getElementById("trial3").innerHTML = whos.notes3;
	}


	document.getElementById('trial3').innerHTML = chrome.storage.sync.get("notes3",updateDemo3);

	document.getElementById('stick3').onclick = function() {

		var notes3 = document.getElementById('saveLine2').value;
//alert(value);

				chrome.storage.sync.set({'notes3': notes3}, function() {
          		// Notify that we saved
//          			alert('Settings saved');
       			 });

			};

				document.getElementById('post').onclick = function() {

					chrome.storage.sync.get('notes3',updateDemo3);

				}


//4th block notes

	function updateDemo4(whos)
	{
		document.getElementById("trial4").innerHTML = whos.notes4;
	}


	document.getElementById('trial4').innerHTML = chrome.storage.sync.get("notes4",updateDemo4);

	document.getElementById('stick4').onclick = function() {

		var notes4 = document.getElementById('saveLine2').value;
//alert(value)

				chrome.storage.sync.set({'notes4': notes4}, function() {
          		// Notify that we saved
//          			alert('Settings saved');
       			 });

			};

				document.getElementById('post').onclick = function() {

					chrome.storage.sync.get('notes4',updateDemo4);

				}

//5th block notes

	function updateDemo5(whos)
	{
		document.getElementById("trial5").innerHTML = whos.notes5;
	}


	document.getElementById('trial5').innerHTML = chrome.storage.sync.get("notes5",updateDemo5);

	document.getElementById('stick5').onclick = function() {

		var notes5 = document.getElementById('saveLine2').value;
//alert(value);

				chrome.storage.sync.set({'notes5': notes5}, function() {
          		// Notify that we saved
//          			alert('Settings saved');
       			 });

			};

				document.getElementById('post').onclick = function() {

					chrome.storage.sync.get('notes5',updateDemo5);

				}

//6th block notes

	function updateDemo6(whos)
	{
		document.getElementById("trial6").innerHTML = whos.notes6;
	}


	document.getElementById('trial6').innerHTML = chrome.storage.sync.get("notes6",updateDemo6);

	document.getElementById('stick6').onclick = function() {

		var notes6 = document.getElementById('saveLine2').value;
//alert(value);

				chrome.storage.sync.set({'notes6': notes6}, function() {
          		// Notify that we saved
//          			alert('Settings saved');
       			 });

			};

				document.getElementById('post').onclick = function() {

					chrome.storage.sync.get('notes6',updateDemo6);

				}


//7th block notes

	function updateDemo7(whos)
	{
		document.getElementById("trial7").innerHTML = whos.notes7;
	}


	document.getElementById('trial7').innerHTML = chrome.storage.sync.get("notes7",updateDemo7);

	document.getElementById('stick7').onclick = function() {

		var notes7 = document.getElementById('saveLine2').value;
//alert(value);

				chrome.storage.sync.set({'notes7': notes7}, function() {
          		// Notify that we saved
//          			alert('Settings saved');
       			 });

			};

				document.getElementById('post').onclick = function() {

					chrome.storage.sync.get('notes7',updateDemo7);

				}

//8th block notes

	function updateDemo8(whos)
	{
		document.getElementById("trial8").innerHTML = whos.notes8;
	}


	document.getElementById('trial8').innerHTML = chrome.storage.sync.get("notes8",updateDemo8);

	document.getElementById('stick8').onclick = function() {

		var notes8 = document.getElementById('saveLine2').value;
//alert(value);

				chrome.storage.sync.set({'notes8': notes8}, function() {
          		// Notify that we saved
//          			alert('Settings saved');
       			 });

			};

				document.getElementById('post').onclick = function() {

					chrome.storage.sync.get('notes8',updateDemo8);

				}


//Bacjgroudn Image

	function updateJpg(whi)
	{
		document.getElementById("updateImg").innerHTML = whi.totalImg;
	}


	document.getElementById('updateImg').innerHTML = chrome.storage.sync.get("totalImg",updateJpg);

	document.getElementById('up').onclick = function() {

        var alpha = '<style>html { background: url(';
		var back = document.getElementById('saveLine4').value;
		var beta = ') no-repeat right center fixed; -webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;overflow-x: hidden; margin-left: -2.5px; } </style>';
		var totalImg = alpha + back + beta;
//alert(value);

				chrome.storage.sync.set({'totalImg': totalImg}, function() {
          		// Notify that we saved
//          			alert('Settings saved');
       			 });

			};

				document.getElementById('load').onclick = function() {

					chrome.storage.sync.get('totalImg',updateJpg);

				}

//Link1

	function linkU1(whos)
	{
		document.getElementById("link1").innerHTML = whos.combine;
	}


	document.getElementById('link1').innerHTML = chrome.storage.sync.get("combine",linkU1);

	document.getElementById('savefm1').onclick = function() {


		var aplha2 = ' <a href="';
		var beta2 = '" target="_blank"><button class="button6 button60"><font color="white" size="5">Link 1</font></button></a>';
		var links = document.getElementById('saveLine10').value;

		var combine = aplha2 + links + beta2;
//alert(value);

				chrome.storage.sync.set({'combine': combine}, function() {
          		// Notify that we saved
//          			alert('Settings saved');
       			 });

			};

				document.getElementById('getfm').onclick = function() {

					chrome.storage.sync.get('combine',linkU1);

				}



//Link2

	function linkU2(whos)
	{
		document.getElementById("link2").innerHTML = whos.combine2;
	}


	document.getElementById('link2').innerHTML = chrome.storage.sync.get("combine2",linkU2);

	document.getElementById('savefm2').onclick = function() {


		var aplha3 = ' <a href="';
		var beta3 = '" target="_blank"><button class="button4 button40"><font color="teal" size="5">Link 2</font></button></a>';
		var links1 = document.getElementById('saveLine10').value;

		var combine2 = aplha3 + links1 + beta3;
//alert(value);

				chrome.storage.sync.set({'combine2': combine2}, function() {
          		// Notify that we saved
//          			alert('Settings saved');
       			 });

			};

				document.getElementById('getfm').onclick = function() {

					chrome.storage.sync.get('combine2',linkU2);

				}

//Link 3

	function linkU3(whos)
	{
		document.getElementById("link3").innerHTML = whos.combine3;
	}


	document.getElementById('link3').innerHTML = chrome.storage.sync.get("combine3",linkU3);

	document.getElementById('savefm3').onclick = function() {


		var aplha4 = ' <a href="';
		var beta4 = '" target="_blank"> <button class="button6 button60"><font color="white" size="5">Link 3</button> </a>';
		var links2 = document.getElementById('saveLine10').value;

		var combine3 = aplha4 + links2 + beta4;
//alert(value);

				chrome.storage.sync.set({'combine3': combine3}, function() {
          		// Notify that we saved
//          			alert('Settings saved');
       			 });

			};

				document.getElementById('getfm').onclick = function() {

					chrome.storage.sync.get('combine3',linkU3);

				}
//Link 4

	function linkU4(whos)
	{
		document.getElementById("link4").innerHTML = whos.combine4;
	}


	document.getElementById('link4').innerHTML = chrome.storage.sync.get("combine4",linkU4);

	document.getElementById('savefm4').onclick = function() {




		var aplha5 = ' <a href="';
		var beta5 = '" target="_blank"><button class="button4 button40"><font color="teal" size="5">Link 4</font></button></a>';
		var links3 = document.getElementById('saveLine10').value;

		var combine4 = aplha5 + links3 + beta5;
//alert(value);

				chrome.storage.sync.set({'combine4': combine4}, function() {
          		// Notify that we saved
//          			alert('Settings saved');
       			 });

			};

				document.getElementById('getfm').onclick = function() {

					chrome.storage.sync.get('combine4',linkU4);

				}




}
