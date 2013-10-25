
var  cookieBar = {};

cookieBar.defaultLang = "en";
cookieBar.currrentLang;
cookieBar.defaultCookieUrl = "http://tools.storn.es/cookies/policy.php";
cookieBar.currrentCookieUrl;
cookieBar.defaultBarPosition = "top";
cookieBar.currentBarPosition;

cookieBar.cookieName = "acceptedUseOfCookies";
cookieBar.cookieTime = 365;

cookieBar.barId = "cookieBar";
cookieBar.scriptId = "script-cookie-bar";

cookieBar.stylesheetURL = "http://tools.storn.es/cookies/alertUser.css";

cookieBar.text = [];

cookieBar.text["es"] = [];
cookieBar.text["es"]["text"] = "Este sitio web utiliza <b>cookies</b> propios y de terceros. Para más información visite la {politica} o puede borrar las cookies pulsando a {borrar}";
cookieBar.text["es"]["linkButton"] = "politica de cookies";
cookieBar.text["es"]["clearButton"] = "borrar las cookies";
cookieBar.text["es"]["messageDeleted"] = "Se han borrado las cookies correctamente";
cookieBar.text["es"]["barTitle"] = "Accepto el uso de cookies en esta página";

cookieBar.text["en"] = [];
cookieBar.text["en"]["text"] = "This website need <b>cookies</b> to work (also third-party cookies). You can get more information at {politica} or you can delete the cookies by clicking {borrar}";
cookieBar.text["en"]["linkButton"] = "cookies policy";
cookieBar.text["en"]["clearButton"] = "delete cookies";
cookieBar.text["en"]["messageDeleted"] = "The cookies have been deleted";
cookieBar.text["en"]["barTitle"] = "I accept the use of cookies in this page";

cookieBar.text["ca"] = [];
cookieBar.text["ca"]["text"] = "Aquesta web utilitza <b>cookies</b> propies y de tercers. Per a més informació visita la {politica} o pots esborrar les cookies clicant a {borrar}";
cookieBar.text["ca"]["linkButton"] = "politica de cookies";
cookieBar.text["ca"]["clearButton"] = "esborrar les cookies";
cookieBar.text["ca"]["messageDeleted"] = "S'han esborrat les cookies correctament";
cookieBar.text["ca"]["barTitle"] = "Accepto l'ús de cookies en aquesta pàgina web";

cookieBar.domains = [];
cookieBar.remoteDomains = [];

cookieBar.init = function(){
	if(this.getCookie(this.cookieName)){
		return;
	}
	this.addCSS();
	this.getParameters();
	this.fillDomains();
	this.addClassBarToHTML();

	var bar = document.createElement("div");
    bar.setAttribute("id",this.barId);
    bar.setAttribute("class", this.currentBarPosition);
    bar.setAttribute("onclick","cookieBar.doClose()");
    bar.setAttribute("title",this.text[this.currrentLang]["barTitle"]);

	    var p = document.createElement("p");
	    var html = this.text[this.currrentLang]["text"];
	    html = html.replace("{politica}", "<a href='"+this.currrentCookieUrl+"?domain="+location.hostname+"' title='' onclick='cookieBar.doPrevent(event)' target='_blank'>"+this.text[this.currrentLang]["linkButton"]+"</a>");
	    html = html.replace("{borrar}", "<a href='#' onclick='cookieBar.doClearCookies(event)' title=''>"+this.text[this.currrentLang]["clearButton"]+"</a>");
	    p.innerHTML = html;

	bar.appendChild(p);

	document.getElementsByTagName("body")[0].appendChild(bar);

	
}

cookieBar.getParameters = function(){
	var script = document.getElementById(cookieBar.scriptId);
	var lang = script.getAttribute("data-lang");
	this.currrentLang = this.defaultLang;
	if(lang && this.text[lang]){
		this.currrentLang = lang;
	}

	var cookieUrl = script.getAttribute("data-cookieUrl");
	this.currrentCookieUrl = this.defaultCookieUrl;
	if(cookieUrl){
		this.currrentCookieUrl = cookieUrl;
	}

	var barPosition = script.getAttribute("data-position");
	this.currentBarPosition = this.defaultBarPosition;
	if(barPosition){
		this.currentBarPosition = barPosition;
	}
}

cookieBar.fillDomains = function(){
	var s = location.hostname.split('.');
	var rootDomain = s[s.length-2]+"."+s[s.length-1];
	this.domains.push(location.hostname);
	if(rootDomain != location.hostname){
		this.domains.push(rootDomain);
	}
	this.remoteDomains.push("http://ads.storn.es/clearCookies.php");
	this.remoteDomains.push("http://anunci.storn.es/clearCookies.php");
}

cookieBar.addCSS = function(){
	var script1 = document.createElement('link');
	script1.rel = 'stylesheet';
	script1.type = 'text/css';
	script1.href = this.stylesheetURL;
	document.getElementsByTagName("head")[0].appendChild(script1);
}

cookieBar.doClose = function(){
	var bar = document.getElementById(cookieBar.barId);
	bar.style.display = "none";
	this.removeClassBarToHTML();
	this.setCookie(this.cookieName, true, this.cookieTime);
}


cookieBar.doPrevent = function(e){
	if (!e) var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
}

cookieBar.doClearCookies = function(e){
	if (!e) var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();

	this.clearListCookies();
}


cookieBar.addClassBarToHTML = function(){
	var html = document.getElementsByTagName("html")[0];
	var currentClass = (html.getAttribute("class"))?html.getAttribute("class"):"";
	currentClass += " hasCookieBar ";
	currentClass += " CookieBar"+this.currentBarPosition+ " ";
	html.setAttribute("class",currentClass);

	
}

cookieBar.removeClassBarToHTML = function(){
	var html = document.getElementsByTagName("html")[0];
	var currentClass = html.getAttribute("class");
	currentClass = currentClass.replace("hasCookieBar","");
	currentClass = currentClass.replace("CookieBar"+this.currentBarPosition,"");
	html.setAttribute("class",currentClass);
}

cookieBar.setCookie = function(c_name,value,exdays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; domain="+location.hostname+"; path=/; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

cookieBar.getCookie = function(c_name){
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1){
		c_start = c_value.indexOf(c_name + "=");
	}
	if (c_start == -1){
		c_value = null;
	}
	else{
		c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1){
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start,c_end));
	}
	return c_value;
}

cookieBar.clearListCookies = function(){   
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++){   
        var spcook =  cookies[i].split("=");
        this.deleteCookie(spcook[0]);
    }
    this.clearAllRemoteCookies();

    alert(this.text[this.currrentLang]["messageDeleted"]);
}

cookieBar.deleteCookie = function(cookiename){
    var d = new Date();
    d.setDate(d.getDate() - 1);
    var expires = ";expires="+d;
    var name = cookiename;
    var value = "";
    for(var i in this.domains){
    	document.cookie = name + "=" + value + expires + "; domain="+this.domains[i]+"; path=/";
    	document.cookie = name + "=" + value + expires + "; domain=."+this.domains[i]+"; path=/";
    	document.cookie = name + "=" + value + expires + "; domain=www."+this.domains[i]+"; path=/";
    }
}

cookieBar.clearAllRemoteCookies = function(){   
    for(var i in this.remoteDomains){
    	this.deleteRemoteCookie(this.remoteDomains[i]);
    }
}


cookieBar.deleteRemoteCookie = function(url){
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", url);
    iframe.style.position = "fixed";
    iframe.style.top = "-100px";
    iframe.style.left = "-100px";
    iframe.style.height = "1px";
    iframe.style.width = "1px";
	document.getElementsByTagName("body")[0].appendChild(iframe);
}

cookieBar.init();