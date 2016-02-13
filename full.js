$(document).ready(function()
{
	$(".block-selector").click(function(e)
	{
		e.preventDefault();
		$(".main").removeClass("main").addClass("tab1");
		$(this).addClass("main").removeClass("tab1");
		var block = $(this).children().attr("href").split(".html")[0];
		setFrame(get(block));
		$(".teacher-url").css("display","block");
		$("#settings-container").css("display","none");
	});
	$("#save").click(function()
	{
		var block = $(".block-selector.main").children().attr("href").split(".html")[0];
		set(block, $(this).val());
		toast("Saved",2500);
		setFrame(get(block));
	});
	$("#save-settings").click(function()
	{
		set("1-url",$("#block-1-url").val());
		set("1-notes",$("#block-1-notes").val());
		set("2-url",$("#block-2-url").val());
		set("2-notes",$("#block-2-notes").val());
		set("3-url",$("#block-3-url").val());
		set("3-notes",$("#block-3-notes").val());
		set("4-url",$("#block-4-url").val());
		set("4-notes",$("#block-4-notes").val());
		set("5-url",$("#block-5-url").val());
		set("5-notes",$("#block-5-notes").val());
		set("6-url",$("#block-6-url").val());
		set("6-notes",$("#block-6-notes").val());
		set("7-url",$("#block-7-url").val());
		set("7-notes",$("#block-7-notes").val());
		set("8-url",$("#block-8-url").val());
		set("8-notes",$("#block-8-notes").val());
		set("calendarID",$("#calendar-username").val());
		toast("All settings updated",2500);
	});
	$("#settings").click(function(e)
	{
		e.preventDefault();
		$("#demo").html("");
		$(".teacher-url").css("display","none");
		$("#settings-container").css("display","block");
		$(".main").removeClass("main").addClass("tab1");
		$("#block-1-url").val(get(1));
		$("#block-1-notes").val(get(1,"notes"));
		$("#block-2-url").val(get(2));
		$("#block-2-notes").val(get(2,"notes"));
		$("#block-3-url").val(get(3));
		$("#block-3-notes").val(get(3,"notes"));
		$("#block-4-url").val(get(4));
		$("#block-4-notes").val(get(4,"notes"));
		$("#block-5-url").val(get(5));
		$("#block-5-notes").val(get(5,"notes"));
		$("#block-6-url").val(get(6));
		$("#block-6-notes").val(get(6,"notes"));
		$("#block-7-url").val(get(7));
		$("#block-7-notes").val(get(7,"notes"));
		$("#block-8-url").val(get(8));
		$("#block-8-notes").val(get(8,"notes"));
		$("#calendar-username").val(get(-1,"calendarID"));
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

function get(which,what)
{
	if(what === "notes")
		return which + " notes";
	if(what == "calendarID")
		return "test";
	return "https://google.com/" + which; // testing only; returns 404 with pathname.
}

function set(what,value)
{
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