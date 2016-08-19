$("#demo1").click(function(e){
	e.preventDefault();
	let prefix="#block-",el=prefix + "{{ID}}-email", newEmail = [];
	for(let i = 1; i <= 8 ; i++)
	{
		let valid = $(el.replace(/{{ID}}/g,i))[0].checkValidity() && $(el.replace(/{{ID}}/g,i)).val() != "";
		if(valid)
			newEmail.push($(el.replace(/{{ID}}/g,i)).val());
		else
		{
			$(el.replace(/{{ID}}/g,i)).addClass("invalid");
			Materialize.toast("There was an error",5000);
			return false;
		}

	}
	for(let i =0 ; i <= 7 ; i++)
	{
		let j=i+1
		pv1.updateOption((prefix+j).replace(/#/g,""),newEmail[i],function(){$(prefix+j).attr("data-location",newEmail[i])});
	}
	pv1.updateOption("autosave",$("#autosave").is(":checked"),function(){});
	Materialize.toast("Settings saved!",5000);
});

function updateInputs()
{
	let prefix="#block-";for(let i=1; i<=8;i++){$(prefix+i+"-email").val(pv1.getOption((prefix+i).replace(/#/g,"")));}
}
$(document).ready(function(){updateInputs()});
