/*
* PlanView Chrome Extension Library
*/

window.pv = window.pv ||
{
	getOption: function(option)
	{
		return localStorage.getItem(option);
	},
	updateOption: function(option,value,callback)
	{
		var current = localStorage.getItem(option);
		if(pv.containsDifference(current,value))
		{
			localStorage.setItem(option,value);
			chrome.storage.sync.set({option: value});
			pv.pushChange("UPDATE","pv.updateOption",current,value,{"format":"STRING","syncUpdated":true});
			return true;
		}
		else return false;
	},
	setOption: function(option,value)
	{
		return pv.updateOption(option,value);
	},
	pushChange: function(type,initiator,previous,current,otherInfo)
	{
		/*TODO:Add code to this. I have no idea how I'm going to implement it but it's supposed to basically serve as an undo*/
		console.log("Change received:",type,initiator,previous,current,otherInfo);
		return;
	},
	containsDifference: function(before, after)
	{
		return !(after === before)
	},
	emails:
	{

		getBlock: function(block)
		{
			return JSON.parse(pv.getOption("emails"))[block];
		},
		updateBlock: function(block,email)
		{
			var current = JSON.parse(pv.getOption("emails")), previous = current[block];
			if(pv.containsDifference(previous,email))
			{
				current[block] = email;
				pv.updateOption("emails",JSON.stringify(current));
				pv.pushChange("UPDATE","email.updateBlock",previous,email,{"block":block,"format":"STRING"});
				return true;
			}
			return false;
		},
		setBlock: function(block,email)
		{
			return pv.emails.updateBlock(block,email);
		},
		resetEmails: function()
		{
			var del = JSON.parse(pv.getOption("emails"));
			for(toDel in del)
			{
				pv.emails.updateBlock(toDel,"");
			}
			pv.pushChange("RESET","email.resetEmails",del,JSON.parse(pv.getOption("emails")),{"format":"JSON"});
		},
		workabale: function(check)
		{
			return ((typeof check !== "undefined") && (check !== "") && (check !== null));
		},
		create: function()
		{
			var old = pv.getOption("emails");
			pv.updateOption("emails","{}");
			for(var i = 1; i <= 8; i++)
			{
				pv.emails.setBlock(i,""); //Even though set is deprecated it's more definitive of what we're doing
			}
			pv.pushChange("REBUILD","email.create",JSON.parse(old),JSON.parse(pv.getOption("emails")),{"format":"JSON"})
		}
	},
	links:
	{
		getBlock: function(block)
		{
			return JSON.parse(pv.getOption("links"))[block];
		},
		updateBlock: function(block,link)
		{
			var current = JSON.parse(pv.getOption("links")), previous = current[block];
			if(pv.containsDifference(previous,link))
			{
				current[block] = link;
				pv.updateOption("links",JSON.stringify(current));
				pv.pushChange("UPDATE","links.updateBlock",previous,link,{"block":block,"format":"STRING"});
				return true;
			}
			return false;
		},
		setBlock: function(block,link)
		{
			return pv.links.updateBlock(block,link);
		},
		resetLinks: function()
		{
			var del = JSON.parse(pv.getOption("links"));
			for(toDel in del)
			{
				pv.links.updateBlock(toDel,"");
			}
			pv.pushChange("RESET","links.resetLinks",del,JSON.parse(pv.getOption("links")),{"format":"JSON"});
		},
		workabale: function(check)
		{
			return ((typeof check !== "undefined") && (check !== "") && (check !== null));
		},
		create: function()
		{
			var old = pv.getOption("links");
			pv.updateOption("links","{}");
			for(var i = 1; i <= 8; i++)
			{
				pv.links.setBlock(i,""); //Even though set is deprecated it's more definitive of what we're doing
			}
			pv.pushChange("REBUILD","links.create",JSON.parse(old),JSON.parse(pv.getOption("emails")),{"format":"JSON"})
		}
	}
};