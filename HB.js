

var arrows=["up","down","right","left"];
var images = ["http://clipground.com/images/up-arrow-in-word-14.png","http://clipground.com/images/arrow-2.png","https://png.icons8.com/windows/1600/long-arrow-right.png","http://cdn.onlinewebfonts.com/svg/img_260555.png"]
var counter=4;
var level=1;
var loser=0;
$(document).ready(function(){
	function start(){
		loser++;
		if (loser<4){
			console.log("hahah")
			$("#level").text("level: "+level);
			var random=[];
			for (var i=0;i<counter;i++){
				random.push(arrows[Math.floor(Math.random()*4)])
			}
			var str=random.join(",");
			$("#game").text(str);
			$("#game").show(200)
			function hide(){
				$("#game").hide(200);
			}
			window.setTimeout(hide,3000);
		}
		else { level=1;
			counter=4;
			loser=0;
			alert("You lost but keep trying!")
		}
	}

	function play(){
		if($("#game").text()===$("#answer").val()){
			level++;
			counter=counter+2;
			loser=0;
			alert("Bravoo! click next to solve a harder level!")
		}
		else {
			if(loser==3){
				start()
			}
			else{
				alert("Click next to try again !")
			}
		}
}





$("#next").on("click",function(){start()})
$("#submit").on("click",function(){play()})

})

