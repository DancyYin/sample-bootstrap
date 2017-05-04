
function init()
{
	if(rememberedName!=''){
		$("input#username").val(rememberedName);
		$("input#rememberme").attr("checked", true);
	}

	$(".oip-login form input").blur(function(){
		$(".oip-login form").find(".form-group.has-error").removeClass("has-error");
		$(".oip-login form").find("span.error.red").removeClass("red").text("");
	});
	
	$(".oip-login form input").focus(function(){
		$("body.oip").find("#warningmsg.alert").remove();
	});
	
	$("#warningmsg button.close").click(function(){
		$("#warningmsg.alert").remove();
	});
}

function login()
{
	var form = $(".oip-login form");
	var username = $(form).find("#username");
	var password = $(form).find("#password");
	if(isEmpty(username))
	{
		hasError(username);
		displayErrorMsg($(form).find("#username-error"), "Required!");
		return;
	}
	if(isEmpty(password))
	{
		hasError(password);
		displayErrorMsg($(form).find("#password-error"), "Required!");
		return;
	}
	
	//$(form).submit();
	return openPage("welcome.html");
}

function displayErrorMsg(input, msg)
{
	return displayErrorMessage(input, "red", msg)
}

init();