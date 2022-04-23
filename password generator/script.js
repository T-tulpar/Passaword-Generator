const createButton = document.getElementById("button");
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const password = document.getElementById("password");

createButton.addEventListener("click", pass_create);

function pass_create() 
{
	
	var pass_lenght=get_random(5, 8);
	var chars = "abcdefghijklmnopqrstuvwxyz";
	var chars_lenght = chars.length;	
	var pass= "";
	
	if(check1.checked==true)
	{
		pass_lenght=get_random(8, 10);
	}

	for (var i = pass_lenght; i > 0; i--) 
	{
		var j=get_random(0,chars_lenght);
		pass += chars[j];
	}
	
	if(check2.checked==true)
	{
      for (var i = get_random(1,4); i > 0; i--)
      {
      	j=get_random(0,pass_lenght);
      	pass=pass.replace(pass[j],pass[j].toUpperCase());
      }
	}
	
	if(check3.checked==true)
	{
		i=get_random(0,pass_lenght);
		pass=pass.replace(pass[i],get_random(0,9));

		i=get_random(0,pass_lenght);
		pass=pass.replace(pass[i],get_random(0,9));
		
	}

	if (check4.checked==true) 
	{
		spechars = ".-+=_,!@$#*%<>";
		spechars_lenght = spechars.length;
		i=get_random(0,pass_lenght);
		j=get_random(0,spechars_lenght);
      	pass=pass.replace(pass[i],spechars[j]);
	}
	
	password.innerHTML=pass;
}


function get_random(min, max) 
{
  return Math.floor(Math.random() * (max - min) ) + min;
}