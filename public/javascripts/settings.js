function init(){
	var form = $(".oip-settings form");
	$(".oip .oip-settings #savechanges").bind("click", saveChanges);
	$(".oip .oip-settings #cancel").bind("click", backToWelcome);
	
	$(form).find("input").blur(function(){
		$(form).find(".form-group.has-error").removeClass("has-error");
		$(form).find("span.error").removeClass("red").removeClass("green").text("");
	});
	
	if(isNotBlank(changeEmailMsg)){
		var msgClass = changeEmail==true ? "green" : "red";
		hasError($(form).find("#userEmail"));
		displayErrorMessage($(form).find("#email-error"), msgClass, changeEmailMsg);
	}
	
	if(isNotBlank(changePasswordMsg)){
		var msgClass = changePassword==true ? "green" : "red";
		hasError($(form).find("#password"));
		displayErrorMessage($(form).find("#password-error"), msgClass, changePasswordMsg);
	}
}

function validateEmail(email){
	var regx = /^([a-zA-Z])+(.[a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9])+/;
	if(regx.test(email)){
		return true;
	}
	return false;
}

function validatePassword(password){
	var regx = /^([a-zA-Z])+([a-zA-Z0-9!@#$%^&*()_+])/;
	if(password.length >= 6 && regx.test(password)){
		return true;
	}
	
	return false;
}

function backToWelcome() {
	return openPage("welcome.html");
}

function saveChanges() {
	var form = $(".oip .oip-settings form");
	var email = $(form).find("#userEmail");
	var password = $(form).find("#password");
	var cpassword = $(form).find("#confirmedpassword");
	var opassword = $(form).find("#oldpassword");

	if(isNotEmpty(email) && !validateEmail($(email).val())){
		hasError(email);
		displayErrorMessage($(form).find("#email-error"), "red", "Email invalid!");
		return;
	}
	if(isEmpty(opassword))
	{
		hasError(opassword);
		displayErrorMessage($(form).find("#password-error"), "red", "Required!");
		return;
	}
	if(isEmpty(password))
	{
		hasError(password);
		displayErrorMessage($(form).find("#password-error"), "red", "Required!");
		return;
	}
	if(isEmpty(password))
	{
		hasError(password);
		displayErrorMessage($(form).find("#password-error"), "red", "Required!");
		return;
	}
	if(!validatePassword($(password).val())){
		hasError(password);
		displayErrorMessage($(form).find("#password-error"), "red", "Password invalid!");
		return;
	}
	if($(password).val() == $(opassword).val()){
		hasError(password);
		displayErrorMessage($(form).find("#password-error"), "red", "New Password should not be same with the Old Password!");
		return;
	}
	if(isEmpty(cpassword))
	{
		hasError(cpassword);
		displayErrorMessage($(form).find("#password-error"), "red", "Required!");
		return;
	}
	if($(password).val() != $(cpassword).val()){
		hasError(cpassword);
		displayErrorMessage($(form).find("#password-error"), "red", "Passwords do not match!");
		return;
	}
	
	$(form).attr("action", "#1");
	//$(form).submit();
}

function resetPasswordFor(){
	var form = $(".oip .oip-settings form");
	$(form).attr("action", "#2");
	//$(form).submit();
}


init();