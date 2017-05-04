
//is input value empty
function isEmpty(input)
{
	return $(input).val() == "";
}

function isNotEmpty(input)
{
	return !(isEmpty(input));	
}

//add has-error style to parent form-group of target input and focus in it
function hasError(input)
{
	$(input).parent().addClass("has-error");
	$(input).focus();
}

//display error/warning message in <span>
function displayErrorMessage(span, msgClass, msg)
{
	$(span).addClass(msgClass).text(msg);
}

//is string null or empty or value equals 'null'
function isNotBlank(str)
{
	return str != null && str != "" && str != "null" ;
}

//submit the form with target action
function submitForm(form, action)
{
	$(form).attr("action", action);
	$(form).submit();
}

function openPage(url)
{
	window.location.href = url;
}