module.exports.addPrefix = function(number)
{
	if(number > 3)
		return number + "th";
	switch(number)
	{
		case 1: return "1st";
		case 2: return "2nd";
		case 3: return "3rd";
	}
};