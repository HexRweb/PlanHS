/*
* PlanView Chrome Extension Library
*/

window.pv = pv ||
{
	getOption: function(option)
	{

	},
	updateOption: function(option,value)
	{

	}
	setOption: function(option,value)
	{
		return pv.updateOption(option,value);
	},
	pushChange: function(type,initiator,previous,current,otherInfo)
	{
		/*TODO:Add code to this. I have no idea how I'm going to implement it but it's supposed to basically serve as an undo*/
		return;
	},
	containsDifference: function(before, after)
	{
		return !(after === before)
	}
	email:
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
				pv.pushChange("UPDATE","email.updateBlock",previous,email,{"block":block,{"format":"STRING"}});
				return true;
			}
			return false;
		},
		setBlock: function(block,email)
		{
			return pv.email.updateBlock(block,email);
		},
		resetEmails: function()
		{
			var del = JSON.parse(pv.getOption("emails"));
			for(toDel in del)
			{
				pv.email.updateBlock(toDel,"");
			}
			pv.pushChange("RESET","email.resetEmails",del,pv.JSON.parse(getOption("emails")),{"format":"JSON"});
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

		},
		setBlock: function(block,link)
		{
			return pv.links.updateBlock(block,email);
		},
		resetLinks: function()
		{

		},
		workabale: function(check)
		{
			return ((typeof check !== "undefined") && (check !== "") && (check !== null));
		}
	}
};