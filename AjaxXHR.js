var xmlhttp;
if( window.XMLHTTPRequest){
    xmlhttp = new XMLHTTPRequest();
}else{
    xmlhttp = new ActiveXObject("Micorosoft.XMLHTTP");
}
if (xmlhttp==null){
    Return;// no support by Brower    
}

xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        stringText = xmlhttp.responseTEXT;
        xmlDoc=xmlhttp.responseXML;
    }
}

xmlhttp.open("GET","/ajax/test1.txt",true); // true means ajax  ; false means no-ajax 请不要编写 onreadystatechange 函数 - 把代码放到 send() 语句后面
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.setRequestHeader("Cache-Control", "no-cache");
xmlhttp.setRequestHeader("Pragma","no-cache");
xmlhttp.setRequestHeader("Expires","0"); 
xmlhttp.send();//parameter only for post request

// XDomainRequest仅存在于IE中，是IE用于支持CORS请求的方式  
// 检查XMLHttpRequest对象是否有“withCredentials”属性  
