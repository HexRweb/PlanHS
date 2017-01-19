/*Initializes the pv object if not already done.
* Notes:
** - we use block as the class object because class can be interpreted as a data structure.
*/
window.pv = window.pv ||
{
	/*constants*/
	CLASS_PREFIX: 'block-',
	/*
	* @type: Object
	* @name: pv.db
	* @description: Functions and objected relating to database driven options
	*/
	db:
	{
		/*
		* @type: function
		* @name: pv.db.init
		* @description: Initializes the databases using the TAFFY API.
		* @param {null}: No parameters taken
		* @return {null}: returns nothing
		* @note the init function is put in place to allow the TAFFY API to load.
		*/
		init:function()
		{
			pv.db.block = pvdb().store('block');
			pv.db.notes = pvdb().store('notes');
			pv.db.links = pvdb().store('links');
		},
		/*
		* @type: function
		* @name: pv.db.block
		* @description: Pointer for the `block` database operations
		* @note Until the databases are initialized, the function is null, afterwards, it returns a TAFFY function
		*/
		block: null,
		/*
		* @type: function
		* @name: pv.db.notes
		* @description: Pointer for the `notes` database operations
		* @note Until the databases are initialized, the function is null, afterwards, it returns a TAFFY function
		*/
		notes: null,
		/*
		* @type: function
		* @name: pv.db.links
		* @description: Pointer for the `links` database operations
		* @note Until the databases are initialized, the function is null, afterwards, it returns a TAFFY function
		*/
		links: null
	},
	/*
	* @type: function
	* @name: pv.getOption
	* @description: Gets the value of an option in the database (localStorage)
	* @param {string} option: The option to request
	* @param {boolean} parse: invoke JSON.parse before returning
	* @return {string || object}: The value of `option` in the database (localStorage)
	* @note options starting with `pvdb_` are databased and can be manipulated through the database object (`pb.db`)
	*/
	getOption: function(option, parse)
	{
		return option.indexOf('pvdb_') >= 0 ?
			{} :
			parse ?
				JSON.parse(localStorage.getItem(option)) :
				localStorage.getItem(option);
	},
	/*
	* @type: function
	* @name: pv.updateOption
	* @description: Updates the value of an option in the database (localStorage)
	* @param {string} option: The option to update
	* @param {string} value: The value to store in the option
	* @return {boolean}: Whether `option` was modified in the database (localStorage)
	* @note attempting to update the databases (`pvdb_*`) via this method will return false
	*/
	updateOption: function(option,value)
	{
		var current = localStorage.getItem(option);
		if (option.indexOf('pvdb_') < 0 &&
			pv.util.containsDifference(current, value))
		{
			localStorage.setItem(option, value);
			//chrome.storage.sync.set({option: value});
			//pv.pushChange("UPDATE","pv.updateOption",current,value,{"format":"STRING","syncUpdated":true});
			return true;
		}
		return false;
	},
	/*
	* @type: function
	* @name: pv.optionExists
	* @description: Checks if an option exists
	* @param {string} what: The option to check existence
	* @return {boolean}: Whether `what` exists in the database (localStorage)
	*/
	optionExists: function(what)
	{
		return pv.getOption(what) !== null;
	},
	/*
	* @type: Object
	* @name: pv.util
	* @description: Utilities that will be used throughout the app
	*/
	util:
	{
		/*
		* @type: function
		* @name: pv.util.containsDifference
		* @description: Checks if there is a difference between the parameters
		* @param {*} before: The current value
		* @param {*} before: The new value - to compare with the current value
		* @return {boolean}: Whether `after` and `before` are equal
		* @todo Threshold for equality - relative equality?
		*/
		containsDifference: function(before, after)
		{
			return !(after == before)
		},
		/*
		* @type: function
		* @name: pv.util.removeDuplicates
		* @description: Removes duplicates from an array
		* @param {*[]} array: The array to modify
		* @return {*[]}: `array` without duplicates
		*/
		removeDuplicates: function(arr)
		{
			return arr.filter(function(elem, pos)
			{
				return arr.indexOf(elem) == pos;
			});
		},
		/*
		* @type: function
		* @name: pv.util.generateString
		* @description: Generates a random string
		* @param {number} length=8: The length of the string
		* @return {string}: A random (lowercase) string of `length`
		*/
		generateString: function(length)
		{
			length = parseInt((!(isNaN(length)) && length > 0)) ? length : 8;
			var chars = "abcdefghijklmnopqrstuvwxyz";
			var ret = [];
			while (length > 0)
			{
				ret.push(chars.charAt(Math.floor(Math.random()*chars.length)));
				length--;
			}
			return ret.join("");
		},
		/*
		* @type: function
		* @name: pv.util.generateID
		* @description: Generates a unique ID for block & @see pv/order
		* @param {number} [length=8]: The length of the string
		* @return {string}: A random (lowercase) string of `length`
		*/
		generateID: function(length,type)
		{
			length = length || 8; //No need to check if this is a number - it's verified by the function it's passed to
			type = typeof pv.db[type] === "function" ? type : 'block';
			var ret = pv.util.generateString(length);
			while (pv.db[type]({id:ret}).first())
				ret = pv.util.generateString(length);
			return ret;
		}
	},
	/*
	* @type: Object
	* @name: pv.init
	* @description: Initialization functions for different pages
	*/
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
	/*
	* @type: Object
	* @name: pv.block
	* @description: Functions to interact with blocks
	*/
	block:
	{
		/*
		* @type: function
		* @name: pv.block.getBlock
		* @description: Gets a block from storage
		* @param {string} id: The unique identifier for block
		* @return {object}: An object containing @todo
		*/
		getBlock: function(id)
		{
			return pv.db.block({id:id}).first();
		},
		/*
		* @type: function
		* @name: pv.block.addBlock
		* @description: Adds a block to storage
		* @param {data}: An object containing the block-specific data
		* @return {string}: The ID for the new block
		*/
		addBlock: function(data)
		{
			if(typeof data.links === "object")
				data.links = data.links.join(",");
			var id = pv.util.generateID();
			pv.db.block.insert(
			{
				name: data.name || "Class " + (order >= 0 ? order : 'unknown'),
				notes: data.notes || "",
				email: data.email || "",
				links: data.links || "",
				order: (!isNaN(order) && order >= 0) ? order : -1,
				id: id
			});
			return id;
		},
		/*
		* @type: function
		* @name: pv.block.removeBlock
		* @description: Removes a block from storage
		* @param {id}: The block identifier
		*/
		removeBlock: function(id)
		{
			if(pv.db.block({id:id}))
			{
				pv.db.block.remove({id:id});
				return true;
			}
			return false;
		},
		/*
		* @type: Object
		* @name: pv.block.get
		* @description: Functions to get block attributes
		*/
		get:
		{
			/*
			* @type: function
			* @name: pv.block.get.notes
			* @description: Gets the notes from the notes database
			* @param {id}: The block identifier
			* @return {string}: The notes associated with the block ID
			*/
			notes: function(blockId)
			{
				return pv.db.notes({parent:blockId}).first();
			},
			/*
			* @type: function
			* @name: pv.block.get.links
			* @description: Gets the links associated with a block
			* @param {id}: The block identifier
			* @return {object}: The links associated with the block ID
			*/
			links: function(blockId)
			{
				var ret =[];
				pv.db.links({parent:blockId}).order("order").each(function(rec)
				{
					ret.push(rec);
				});
				return ret;
			},
			/*
			* @type: function
			* @name: pv.block.get.name
			* @description: Gets the name of the block
			* @param {id}: The block identifier
			* @return {string}: The name of the block
			*/
			name: function(id)
			{
				return pv.block.getBlock(id).name;
			},
			/*
			* @type: function
			* @name: pv.block.get.email
			* @description: Gets the email associated with the block
			* @param {id}: The block identifier
			* @return {string}: The email associated with the block ID
			*/
			email: function(id)
			{
				return pv.block.getBlock(id).email;
			}
		},
		/*
		* @type: Object
		* @name: pv.block.set
		* @description: Functions to update block attributes
		*/
		set:
		{
			/*
			* @type: function
			* @name: pv.block.set.notes
			* @description: Updates the notes ID associated with the block
			* @param {id}: The block identifier
			* @return {boolean}: Was an update made to the database
			*/
			notes: function(blockId,value)
			{
				var current = pv.db.notes({parent:blockId}).first().notes;
				if(pv.util.containsDifference(current,value))
				{
					pv.notes.update(current,{parent:blockId,notes:value});
					return true;
				}
				return false;
			},
			/*
			* @type: function
			* @name: pv.block.set.email
			* @description: Updates the email address associated with the block
			* @param {id}: The block identifier
			* @return {boolean}: Was an update made to the database
			*/
			email: function(id,value)
			{
				var current = pv.block.get.email(id);
				if(pv.util.containsDifference(current,value))
				{
					pv.db.block({id:id}).update("email",value);
					return true;
				}
				return false;
			},
			/*
			* @type: function
			* @name: pv.block.set.name
			* @description: Updates the name associated with the block
			* @param {id}: The block identifier
			* @return {boolean}: Was an update made to the database
			*/
			name: function(id,value)
			{
				var current = pv.block.get.name(id);
				if(pv.util.containsDifference(current,value))
				{
					pv.db.block({id:id}).update("name",value);
					return true;
				}
				return false;
			},
			/*
			* @type: function
			* @name: pv.block.set.links
			* @description: Updates the link IDs associated with the block
			* @param {id}: The block identifier
			* @return {boolean}: Was an update made to the database
			*/
			links: function(blockId,values)
			{
				if(typeof values === 'object')
					values = values.join(',');
				var current = pv.block.getBlock(id).links;
				if(pv.util.containsDifference(current,values))
				{
					pv.db.block({id:id}).update("links",values);
					return true;
				}
				return false;
			}
		}
	},
	/*
	* @type: Object
	* @name: pv.theme
	* @description: Options relating to the default (and later updated) theme
	*/
	theme:
	{
		primary: "",
		secondary: "",
		nav:
		{
			side:
			{
				background: "",
				itemBackground: "",
				itemColor: ""
			},
			main:
			{
				background: "",
				color: ""
			}
		}
	},
	/*
	* @type: Object
	* @name: pv.calendar
	* @description: Functions to interact with the calendar
	*/
	calendar:
	{
		//The template constant
		template: '',
		/*
		* @type: function
		* @name: pv.calendar.get
		* @description: Gets the calendar ID
		* @return {string}: the calendar ID
		*/
		get: function()
		{
			return pv.getOption('calendar-id');
		},
		/*
		* @type: function
		* @name: pv.calendar.update
		* @param {string} newId: The new Calendar ID to save
 		* @description: Sets the calendar ID
		* @return {boolean}: was the calendar ID updated
		*/
		update: function(newId)
		{
			if(pv.containsDifference(newId,pv.calendar.get()))
				return pv.updateOption('calendar-id',newId)
			return false;
		},
		/*
		* @type: function
		* @name: pv.calendar.getFrame
		* @description: Generates the HTML code to embed the calendar
		* @return {string}: The HTML to embed the calendar
		*/
		getFrame: function()
		{
			return template.replace(/{calendar-id}/g,pv.calendar.get());
		}
	},
	/*
	* @type: Object
	* @name: pv.links
	* @description: Functions to interact with links
	*/
	links:
	{
		/*
		* @type: function
		* @name: pv.links.get
		* @param {string} linkID: The link identifier
		* @description: Get the properties of link `linkId`
		* @return {object}: Properties of link `linkId`
		*/
		get: function(linkId)
		{
			return pv.db.links({id:linkId}).first();
		},
		/*
		* @type: function
		* @name: pv.links.update
		* @param {string} linkID: The link identifier
		* @param {object} data: Properties to update
		* @description: Updates the properties of link `linkId`
		* @return {object}: Were there changes to the database
		*/
		update:function(linkId,data)
		{
			current = pv.links.get(linkId);
			data = $.extend(data,current);
			if(linkId !== data.id || !current)
				return false;
			return pv.db.links({id:id}).first().update(
			{
				id: linkId,
				order: data.order,
				parent: data.parent,
				url: data.url,
				title: data.title
			});
		},
		/*
		* @type: function
		* @name: pv.links.add
		* @param {object} data: Properties of the new link
		* @description: Adds a new link to the database
		* @return {string}: The new link identifier
		*/
		add: function(data)
		{
			id = pv.util.generateID(null,"links");
			pv.db.links.insert({
				id: id,
				order: data.order || -1,
				parent: data.parent || -1,
				url: data.url || "https://planview.ml",
				title: data.title || "Unknown Link"
			});
			return id;
		}
	},
	/*
	* @type: object
	* @name: pv.notes
	* @description: Functions to interact with notes
	*/
	notes:
	{
		/*
		* @type: function
		* @name: pv.notes.get
		* @param {string} id: The ID for the notes object
		* @description: Retrieves the notes information for `noteId`
		* @return {object}: The properties relating of note `noteId`
		*/
		get: function(noteId)
		{
			return pv.db.notes({id:noteId}).first();;
		},
		/*
		* @type: function
		* @name: pv.notes.add
		* @param {object} data: Properties of the new note
		* @description: Adds a note to the database
		* @return {string}: The ID of the new note
		*/
		add: function(data)
		{
			var id = pv.util.generateID(null,"notes");
			pv.db.notes.insert({
				id: id,
				parent: data.parent || -1,
				notes: data.notes || ""
			});
			return id;
		},
		/*
		* @type: function
		* @name: pv.notes.update
		* @param {string} noteId: The Note identifier
		* @param {object} data: Properties of the note to update
		* @description: Modifies note `noteId` in the database
		* @return {boolean}: Were the properties of `noteId` updated
		*/
		update: function(noteId,data)
		{
			var current = pv.notes.get(noteId);
			if(data.id !== noteId)
				return false;
			data = $.extend(data,current);
			pv.db.notes({id:noteId}).update({
				parent: data.parent,
				notes: data.notes
			});
		}
	},
	/*
	* @type: function
	* @name: pv.import
	* @param {object} data: The properties to import
	* @description: Imports data into the app
	* @return {unknown}
	*/
	import: function(){},
	/*
	* @type: function
	* @name: pv.export
	* @description: Exports data from the app
	* @return {string}: The data
	*/
	export: function(){},
	/*google:
	{
		pull: function(){},
		push: function(){}
	},*/
	/*
	* @type: function
	* @name: pv.install
	* @description: Creates and populates the required tables and options
	* @return null: Returns nothing
	*/
	install: function()
	{
		pv.db.init();
		pv.db.block.insert({
			id:-1,
			name:"PlaceHolderBlock",
			links:[],
			order:-1,
			email: "support@hexr.org",
			notes: -1,
		});
		pv.db.notes.insert({
			id: -1,
			parent: -1,
			notes: "Placeholder notes"
		});
		pv.db.links.insert({
			id: -1,
			order: -1,
			parent: -1,
			url: "https://planview.ml",
			title: "Placeholder Link"
		});
		pv.updateOption('autosave',true);
		pv.updateOption("theme","{}");
		pv.updateOption("calendar-id",'');
		pv.updateOption("version","2.0");
	},
	/*
	* @type: function
	* @name: pv.update
	* @description: Updates the app from the previous version
	* @todo: based on version number run chronological update
	* @return {unknown}
	*/
	update: function()
	{
		for(var i = 1; i <= 8; i++)
		{
			var notes,links,email,order,name,
				linkId, noteId;
			name = "Class" + i;
			links = pv.getOption("links",true)[i];
			order = i;
			notes = pv.getOption("notes",true)[i];
			email = pv.getOption("emails",true)[i];
			linkId = pv.links.add({order:0,parent:-1})["id"];
			notesId = pv.notes.add({})["id"];
		}
	}
}