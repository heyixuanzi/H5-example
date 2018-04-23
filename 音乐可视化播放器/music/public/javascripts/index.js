function $(s){
	return document.querySelectorAll(s);
}

var lis = $("")

// 发起ajax请求
var xhr = new XMLHttpRequest();

function load(url){
	// 调用open方法
	xhr.open("GET",url);
	xhr.respomseType = "arraybuffer";
	xhr.onload = function(){
		console.log();
	}
	

}