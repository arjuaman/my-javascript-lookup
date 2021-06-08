function loadFile(url,onDone,onError){
	if(!onDone)onDone=function(){
		alert("loaded");
	};
	if(!onError)onError=function(){};
	var xhr=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status==200||xhr.status==0){
				setTimeout(function(){
					try{
						//do some operation
					}catch(e){
						onError(e);
						return;
					}
					onDone();
				}.bind(this),1);
			}else{
				onError(xhr.status);
			}
		}
	}.bind(this);
	try{
		xhr.open("GET",url,true);
		xhr.send();
	}catch(e){
		onError(e);
	}	
}