function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
}

if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
	$(".clearfix").removeClass("clearfix")
	$(".t13Banner_left h3").after($(".t13Banner_right"))
	window.onload = function(){
	    getRem(750,100)
	};
	window.onresize = function(){
	    getRem(750,100)
	};
}else{
	 
}