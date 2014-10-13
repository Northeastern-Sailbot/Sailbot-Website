var loadPage = function(url, num) {
	$("#content").load(url);
	$(".currentLink").removeClass("currentLink");
	$("#L0" + num).addClass("currentLink");
};