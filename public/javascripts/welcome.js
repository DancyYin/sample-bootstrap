function init()
{
	$(".oip header>nav>span.user-info>date").text(getDate());
	
	$(".oip nav a#logout").bind("click", logout);
	$(".oip nav a#settings").bind("click", changePassword);
	
	$(".oip .oip-welcome a#dailyrecords").bind("click", dailyRecords);
	$(".oip .oip-welcome a#projectaccounts").bind("click", projectAndAccounts);
	$(".oip .oip-welcome a#projectteam").bind("click", projectTeam);
	$(".oip .oip-welcome a#setnameist").bind("click", setNameList);
	$(".oip .oip-welcome a#exportreport").bind("click", exportReport);
}

function getDate(){
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth() + 1;
	var day = today.getDate();
	return month + "/" + day + "/" + year;
}

function submitWelcomeForm(action)
{
	return submitForm($(".oip-welcome form"), action);
}

function logout(){
	//return submitWelcomeForm("#0");
	return openPage("login.html");
}

function changePassword(){
	//return submitWelcomeForm("#1");
	return openPage("settings.html");
}

function dailyRecords()
{
	return submitWelcomeForm("#2");
}

function projectAndAccounts()
{
	return submitWelcomeForm("#3");
}

function projectTeam()
{
	return submitWelcomeForm("#4");
}

function setNameList()
{
	return submitWelcomeForm("#5");
}

function exportReport()
{
	return submitWelcomeForm("#6");
}

init();