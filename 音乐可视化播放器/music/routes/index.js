var express = require("express");
var router = express.Router();
var mediaPath = 'public/media';


router.get('/', function(req, res){
	var fs = require("fs");
	// readdir 读取目录中文件名
	fs.readdir(mediaPath, function(err, files){
		if(err){
			console.log(err);
		}else{
			// 数据读取成功返回给前端
			res.render('index', {title: 'passionate music', music: files});
		}
	});
});

module.exports = router;