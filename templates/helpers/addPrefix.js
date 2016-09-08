module.exports.addPrefix = function(number,sup)
{
	sup = (typeof sup == "boolean") ? sup : true;
	var prefix = "", suffix ="";
	if(sup == true)
	{
		prefix="<sup>",suffix="</sup>";
	}
	if(number > 3)
		return number + prefix + "th" + suffix;
	switch(number)
	{
		case 1: return number + prefix + "st" + suffix;
		case 2: return number + prefix + "nd" + suffix;
		case 3: return number + prefix + "rd" + suffix;
	}
};