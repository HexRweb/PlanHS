window.pv = window.pv ||
{
	getOption: function(option,parse)
	{
		return parse ? JSON.parse(localStorage.getItem(option)) : localStorage.getItem(option);
	},
	updateOption:function()
	{
		var current = localStorage.getItem(option);
		if(pv.util.containsDifference(current,value))
		{
			localStorage.setItem(option,value);
			//chrome.storage.sync.set({option: value});
			//pv.pushChange("UPDATE","pv.updateOption",current,value,{"format":"STRING","syncUpdated":true});
			return true;
		}
		else return false;
	},
	util:
	{
		containsDifference: function(before,after)
		{
			return !(after === before)
		}
	},
	init
	{
		settings: function()
		{

		},
		global: function()
		{

		},
		notes: function()
		{

		}
	},
	block:
	{
		/*
		* Returns an object containing success information, error, info and the block itself
		* @param {string} id - the block's unique ID
		* @return {object}
		*/
		getBlock:function(id)
		{
			var order = , block = pv.getOption(id);
			if(block === null)
			{
				return {
					success: false,
					error: "The block you requested does not exist",
				};
			}
			else
			{
				return {
					block: block,
					success: true,
					info: ($.inArray(id, pv.getOption("order",true)) >= 0) ? "In order" : "Not in order"
				}
			}
		},
		addBlock:function(){},
		removeBlock:function(){},
		attributes:
		{
			notes:
			{
				get:function(){},
				update:function(){}
			},
			email:
			{
				get:function(){},
				update:function(){}
			},
			name:
			{
				ge:function(){},
				update:function(){}
			},
			links:
			{
				get:function(){},
				update:function(){}
			}
		}	},
	theme:
	{
		primary: "",
		secondary: "",
		nav:
		{
			side:
			{
				background:"",
				itemBackground:"",
				itemColor: ""
			},
			main
			{
				background:"",
				color:""
			}
		}
	},
	calendar:
	{
		get:function(){},
		update:function(){},
		getFrame:function(){}
	},
	links:
	{
		get:function(){},
		add:function(){},
		remove:function(){}
	}
	install: function()
	{

	},
	update: function()
	{

	}
}


/*

variables:

autosave
order
<random keys that determine block id>
theme
calendar
version


cordova.file.dataDirectory

*/