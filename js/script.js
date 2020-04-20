function RegistrationPage(){
	var	result = true;
	var a = document.forms.RegistrationPage.email.value;
	var	b = document.forms.RegistrationPage.username.value;
	var	c = document.forms.RegistrationPage.password.value;
	var	d = document.forms.RegistrationPage.repassword.value;

//
	var	email_v = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var	username_v = /^[A-Za-z]+$/;
	var password_v = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,22}$/;
//
document.getElementById("email_message").innerHTML = "";
document.getElementById("username_message").innerHTML = "";
document.getElementById("password_message").innerHTML = "";
document.getElementById("repassword_message").innerHTML = "";
//
if (a==null || a=="" || email_v.test(a)==false){
	document.getElementById("email_message").innerHTML = "Email address empty or wrong format";
	result = false;
}
//
if (b==null || b=="" || username_v.test(b)==false){
	document.getElementById("username_message").innerHTML = "Please enter the correct informaton";
	result = false;
}
//
if (c==null || c=="" || password_v.test(c)==false){
	document.getElementById("password_message").innerHTML = "Please enter the correct Password";
	result = false;
}
//
if (d==null || d=="" || password_v.test(d)==false){
	document.getElementById("repassword_message").innerHTML = "Please re-enter password";
	result = false;
}
//
else if (c!=d){
	document.getElementById("checkequal").innerHTML = "Password does not match previous";
	result = false;
}
if (result == true){
	document.getElementById("display").innerHTML = "Email: "+a+"<br>"+"Username: "+b+"<br>"+"Password: "+c+"<br>"+"Confirm Password: "+d;
	document.getElementById("RegistrationPage").reset();
}
}
function ResetForm(){
}