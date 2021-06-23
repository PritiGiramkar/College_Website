function formValidation()
{
var uid = document.registration.uid;
var passid = document.registration.pass;
var uname = document.registration.name;
//var uadd = document.registration.address;
//var ucountry = document.registration.country;
//var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; 
var num=document.registration.mobileno;
var elang=document.registration.en;
var nonlang=document.registration.noen;
var ftype=document.registration.Faculty;
var ptype=document.registration.Parent;
var stype=document.registration.Student;
if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
if(validnumber(num,11))
{
if(validlang(elang,nonlang))
{
if(validtype(ftype,ptype,stype))
{

}
}
}
}  
}
}
}
}
return false;

}
function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}
function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
} function validsex(umsex,ufsex)
{
x=0;
if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
return true;
}
}
function validtype(ftype,ptype,stype)
{
x=0
if(ftype.checked)
{
x++;	
}	
if(ptype.checked)
{
x++;
}
if(stype.checked)
{
	x++;
}
if(x==0)
{
	alert('Select Usertype')
	ftype.focus();
	return false;
}
else
{
	prompt('Form Succesfully Submitted');
	window.location.reload()
return true;
}
}
function validlang(elang,nonlang)
{
	x=0
if(elang.checked)
{
	x++;
}	
if(nonlang.checked)
{
	x++;
}
if(x==0)
{
	alert('select any language type')
	return false;
}
else
{
	return true
}
}
function validnumber(num,x)
{
	var len=num.value.length;
	var letters = /[0-9]/;
	var phone=num.toString();
	if(len==0 || len<x || len>x)
	{
		alert('phone number should not be empty/ length should be 11 numbers')
		return false;
	}
	else if(phone.value.match((letters))
	{
		alert('phone number should be numerical')
		return false;
	}
	else
	{
			return true;
	}
	
}