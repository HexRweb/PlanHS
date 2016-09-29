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
	optionExists: function(what)
	{
		return pv.getOption(what) !== null;
	},
	getOrder: function()
	{
		return pv.getOption("order",true);
	},
	util:
	{
		containsDifference: function(before,after)
		{
			return !(after === before)
		},
		generateString: function(length)
		{
			length = parseInt(length ? length : 8);
			var charset = "abcdefghijklmnopqrstuvwxyz";
			var output = [];
			while(length > 0)
			{
				output.push(charset.charAt(Math.floor(Math.random() * charset.length)));
				length --;
			}
			return output.join("");
		},
		generateID: function(length)
		{
			length = length || 8; //No need to check if this is a number - it's verified by the function it's passed to
			var ret = "block-"+pv.util.generateString(length);
			while(pv.optionExists(ret))
				ret = "block-"+pv.util.generateString(length);
			return ret;
		}
	},
	init:
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
			var block = pv.getOption(id);
			if(block === null)
			{
				return {
					success: false,
					error: "The block you requested does not exist",
				};
			}
			else if(block.indexOf("block-") !== 0)
			{
				return {
					success: false,
					error: "The requested block does not follow the block storage scheme"
				}
			}
			else
			{
				return {
					block: block,
					success: true,
					info: ($.inArray(id, pv.getOrder()) >= 0) ? "In order" : "Not in order"
				}
			}
		},
		addBlock:function(name, notes, email, links, order)
		{
			var order = pv.getOrder();
			name = name || "Block " + order.length+1;
			notes = notes || "";
			email = email || "";
			links = links || {};
			order = (!isNaN(order) && order >= 0) ? order : -1;
			id = pv.util.generateID();
		},
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
		}
	},
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
			main:
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
	},
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