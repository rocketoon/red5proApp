/**
 * https://stackoverflow.com/questions/901115/
 */
function getParameterByName(name, defval) {
	var	url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex
			.exec(url);
	if (!results)
		return defval;
	if (!results[2])
		return defval;
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}