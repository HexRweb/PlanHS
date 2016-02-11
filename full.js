$(document).ready(function()
{
	$(".block-selector").click(function(e)
	{
		e.preventDefault();
		$(".main").removeClass("main").addClass("tab1");
		$(this).addClass("main").removeClass("tab1");
		var block = $(this).children().attr("href").split(".html")[0];
		setFrame(get(block));
	});
	$("#save").click(function()
	{
		var block = $(".block-selector.main").children().attr("href").split(".html")[0];
		set(block, $(this).val());
		setFrame(get(block));
	});
	setFrame(get(1));
});

function setFrame(url)
{
	$("#demo").html(
		$("<iframe></iframe>",{
			src: url,
			width: 750,
			height: 725,
			id: "cool",
			frameborder:0
		})
	);
	$("#saveLine").val(url);
}

function get(what)
{
	return "https://google.com/" + what; // testing only
}

function set(what,value)
{
	toast("Saved",5000)
	return true;
}

/*!
 * Materialize [Toast library] v0.97.5 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
function toast(message, displayLength, className, completeCallback) {
	className = className || "";
	var container = document.getElementById('toast-container');
	// Create toast container if it does not exist
	if (container === null) {
		// create notification container
		container = document.createElement('div');
		container.id = 'toast-container';
		document.body.appendChild(container);
	}

	// Select and append toast
	var newToast = createToast(message);

	// only append toast if message is not undefined
	if (message) {
		container.appendChild(newToast);
	}

	newToast.style.top = '35px';
	newToast.style.opacity = 0;

	// Animate toast in
	$(newToast).animate({
		opacity: 1
	});

	// Allows timer to be pause while being panned
	var timeLeft = displayLength;
	var counterInterval = setInterval(function() {


		if (newToast.parentNode === null)
			window.clearInterval(counterInterval);

		// If toast is not being dragged, decrease its time remaining
		if (!newToast.classList.contains('panning')) {
			timeLeft -= 20;
		}

		if (timeLeft <= 0) {
			// Animate toast out
			$(newToast).animate({
				opacity: 0
			}, function() {
				if (typeof(completeCallback) === "function")
					completeCallback();
				// Remove toast after it times out
				$(this).remove();

			});
			window.clearInterval(counterInterval);
		}
	}, 20);



	function createToast(html) {

		// Create toast
		var toast = document.createElement('div');
		toast.classList.add('toast');
		if (className) {
			var classes = className.split(' ');

			for (var i = 0, count = classes.length; i < count; i++) {
				toast.classList.add(classes[i]);
			}
		}
		// If type of parameter is HTML Element
		if (typeof HTMLElement === "object" ? html instanceof HTMLElement : html && typeof html === "object" && html !== null && html.nodeType === 1 && typeof html.nodeName === "string") {
			toast.appendChild(html);
		} else if (html instanceof jQuery) {
			// Check if it is jQuery object
			toast.appendChild(html[0]);
		} else {
			// Insert as text;
			toast.innerHTML = html;
		}
		// Bind hammer
		/*disabled to decrease load time
		var hammerHandler = new Hammer(toast, {prevent_default: false});
		hammerHandler.on('pan', function(e) {
		  var deltaX = e.deltaX;
		  var activationDistance = 80;

		  // Change toast state
		  if (!toast.classList.contains('panning')){
			toast.classList.add('panning');
		  }

		  var opacityPercent = 1-Math.abs(deltaX / activationDistance);
		  if (opacityPercent < 0)
			opacityPercent = 0;

		  Vel(toast, {left: deltaX, opacity: opacityPercent }, {duration: 50, queue: false, easing: 'easeOutQuad'});

		});

		hammerHandler.on('panend', function(e) {
		  var deltaX = e.deltaX;
		  var activationDistance = 80;

		  // If toast dragged past activation point
		  if (Math.abs(deltaX) > activationDistance) {
			Vel(toast, {marginTop: '-40px'}, { duration: 375,
				easing: 'easeOutExpo',
				queue: false,
				complete: function(){
				  if(typeof(completeCallback) === "function") {
					completeCallback();
				  }
				  toast.parentNode.removeChild(toast);
				}
			});

		  } else {
			toast.classList.remove('panning');
			// Put toast back into original position
			Vel(toast, { left: 0, opacity: 1 }, { duration: 300,
			  easing: 'easeOutExpo',
			  queue: false
			});

		  }
		});*/

		return toast;
	}
}