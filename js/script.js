window.onload = function() {
	var music = document.getElementById('music');
	var audio = document.getElementsByTagName('audio')[0];


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
}