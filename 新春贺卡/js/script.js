window.onload = function() {
	var music = document.getElementById('music');
	var audio = document.getElementsByTagName('audio')[0];
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');


    // 当音乐播放结束，光盘旋转效果自动停止
    audio.addEventListener("ended",function(event){
        music.setAttribute("class","");
    },false);

    // 点击音乐图标，控制音乐播放,方法一：click事件
    // music.onclick = function() {
    // 	if (audio.paused) {
    //         audio.play();
    //         // this.setAttribute("class","play");
    //         this.style.animationPlayState = "running";
    //         this.style.webkitAnimationPlayState = "running";
    // 	} else {
	   //     	audio.pause();
	   //     	// this.setAttribute("class"," ");
    //         this.style.animationPlayState = "paused";
	   //     	this.style.webkitAnimationPlayState = "paused";
	   //  }
    // }
    
    // 点击音乐图标，控制音乐播放,方法二：touch事件
    music.addEventListener("touchstart",function(event){
        if (audio.paused) {
            audio.play();
            // this.setAttribute("class","play");
            this.style.animationPlayState = "running";
            this.style.webkitAnimationPlayState = "running";
        } else {
            audio.pause();
            // this.setAttribute("class"," ");
            this.style.animationPlayState = "paused";
            this.style.webkitAnimationPlayState = "paused";
        }
    },false);

    // 页面跳转
     page1.addEventListener("touchstart",function(event){
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top     = "100%";

        setTimeout(function(){
            page2.setAttribute("class","page fadeOut");
            page3.setAttribute("class","page fadeIn");
        },5500);
      },false);
};