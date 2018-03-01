var quotesArray1=[
"It's not how much we give but how much love we put into giving. -Mother Teresa",
"No one has ever become poor by giving. -Anne Frank",
"We make a living by what we get, but we make a life by what we give. -Winston Churchill"]


var quotesArray2=["For the love of money is a root of all kinds of evil. Some people, eager for money, have wandered from the faith and pierced themselves with many griefs. -Timothy 6:10",
"The rich rule over the poor, and the borrower is servant to the lender. -Proverbs 22:7",
"Those who believe, and do deeds of righteousness, and establish regular prayers and regular charity, will have their reward with their Lord: on them shall be no fear, nor shall they grieve. - 002/277"]

var usersArray = [{name: "A very good person",contactInfo:"", amount:1000},{name:"A good person",contactInfo:"", amount:500},{name:"Survey corps",contactInfo:"", amount:100}]; 
var quotesArray1=[
"It's not how much we give but how much love we put into giving. -Mother Teresa",
"No one has ever become poor by giving. -Anne Frank",
"We make a living by what we get, but we make a life by what we give. -Winston Churchill"]


var quotesArray2=["For the love of money is a root of all kinds of evil. Some people, eager for money, have wandered from the faith and pierced themselves with many griefs. -Timothy 6:10",
"The rich rule over the poor, and the borrower is servant to the lender. -Proverbs 22:7",
"Those who believe, and do deeds of righteousness, and establish regular prayers and regular charity, will have their reward with their Lord: on them shall be no fear, nor shall they grieve. - 002/277"]

var usersArray = [{name: "A very good person",contactInfo:"", amount:1000},{name:"A good person",contactInfo:"", amount:500},{name:"Survey corps",contactInfo:"", amount:100}]; 
  //1-   Uncomment on the first try then recomment it   
  //localStorage.setItem("usersArray", JSON.stringify(usersArray));
var unShownUsersArray = [];
var totalAmount= usersArray[0].amount+usersArray[1].amount+usersArray[2].amount;
//var colorArray = ["#ffffff","#eff5f5", "#dfecec", "#cfe2e2","#bfd9d9", "#afcfcf", "#9fc6c6", "#8fbcbc", "#80b3b3", "#70a9a9", "#609f9f",		 
// 		 "#568f8f", "#4d8080", "#437070", "#396060","#2f4f4f"]
var colorArray = ["#d9d9d9","#cccccc", "#bfbfbf", "#b3b3b3", "#a6a6a6", "#999999", "#8c8c8c","#808080", "#737373", "#666666", "#595959", "#4d4d4d", "#404040", "#333333", "#262626"]
var colorCounter = colorArray.length-1;
 //2-Uncomment on the first try then recomment it
//localStorage.setItem("colorCounter", JSON.stringify(colorCounter));

$(document).ready(function(){
	function desc(array){
		var maxObj= {};
		var array1=[];
		while(array.length!==0){
			var min=array[0].amount;
			for (j=0;j<array.length;j++){
				if( array[j].amount<=min){
					min=array[j].amount;
					maxObj = array[j]
					var c=j;
				}}
				array.splice(c,1);
				array1.unshift(maxObj);}
				return array1;}

				function showMyName(){
                    if($("#name").val() !== ""){
                    	var obj1=storeValues();
                    
                    var repeated=false;
                    for (var i=0;i<usersArray.length;i++){
                    	if (obj1.name===usersArray[i].name){
                    		usersArray[i].amount=usersArray[i].amount+obj1.amount;
                    		repeated=true;
                    	}
                    }
                    if(!repeated) {
                    	usersArray.push(obj1);
                    }
					usersArray=desc(usersArray);
					topDonors();
					backgroundColor();
					createLink();
					localStorage.setItem("usersArray", JSON.stringify(usersArray));
				}}

				function dShowMyName(){
					if($("#name").val() !== ""){
					unShownUsersArray.push(storeValues());
					backgroundColor();
					createLink();
				}
			}
				function storeValues(){
					var obj = {};
					obj.name= $("#name").val();
					obj.contactInfo= $("#contact").val();
					obj.amount= parseInt($("#amount").val());
					return obj;
				}
				function topDonors(){
					$("#first").text(usersArray[0].name);
					$("#second").text(usersArray[1].name);
					$("#third").text(usersArray[2].name); 	
				}
				function backgroundColor(){
					var totalAmount =0;
					for (var i = usersArray.length - 1; i >= 0; i--) {
						totalAmount+= usersArray[i].amount;
					}
					if (totalAmount >10000){
						$('body').css("background-color", colorArray[colorCounter])
					}
					if (colorCounter>0){
						colorCounter--;
					}

					localStorage.setItem("colorCounter", JSON.stringify(colorCounter));

				}
				
				function createLink(){
					
					$("#anchor").text("Start The Game!");
					$("#anchor").attr("href","HB.html");
					$("body").append(anchor);
				}	

				var usersArray = JSON.parse(localStorage.getItem("usersArray"));
				var colorCounter = JSON.parse(localStorage.getItem("colorCounter"));
				$('body').css("background-color", colorArray[colorCounter])
				
				setInterval(function(){
				 $("#q1").text(quotesArray1[Math.floor(Math.random()*3)])
				 $("#q1").hide();
				 $("#q1").text(quotesArray1[Math.floor(Math.random()*3)])
				 $("#q1").show();
				  },3000);
				setInterval(function(){
				 $("#q2").text(quotesArray2[Math.floor(Math.random()*3)])
				 $("#q2").hide();
				 $("#q2").text(quotesArray2[Math.floor(Math.random()*3)])
				 $("#q2").show();
				  },3000);
				topDonors() ;     
				$("#inputshow").on("click",function(){showMyName()});
				$("#inputdshow").on("click",function(){dShowMyName()});


			})




var unShownUsersArray = [];
var totalAmount= usersArray[0].amount+usersArray[1].amount+usersArray[2].amount;
//var colorArray = ["#ffffff","#eff5f5", "#dfecec", "#cfe2e2","#bfd9d9", "#afcfcf", "#9fc6c6", "#8fbcbc", "#80b3b3", "#70a9a9", "#609f9f",		 
// 		 "#568f8f", "#4d8080", "#437070", "#396060","#2f4f4f"]
var colorArray = ["#d9d9d9","#cccccc", "#bfbfbf", "#b3b3b3", "#a6a6a6", "#999999", "#8c8c8c","#808080", "#737373", "#666666", "#595959", "#4d4d4d", "#404040", "#333333", "#262626"]
var colorCounter = colorArray.length-1;
//  //2-Uncomment on the first try then recomment it
// localStorage.setItem("colorCounter", JSON.stringify(colorCounter));

$(document).ready(function(){
	function desc(array){
		var maxObj= {};
		var array1=[];
		while(array.length!==0){
			var min=array[0].amount;
			for (j=0;j<array.length;j++){
				if( array[j].amount<=min){
					min=array[j].amount;
					maxObj = array[j]
					var c=j;
				}}
				array.splice(c,1);
				array1.unshift(maxObj);}
				return array1;}

				function showMyName(){
                    if($("#name").val() !== ""){
                    	var obj1=storeValues();
                    
                    var repeated=false;
                    for (var i=0;i<usersArray.length;i++){
                    	if (obj1.name===usersArray[i].name){
                    		usersArray[i].amount=usersArray[i].amount+obj1.amount;
                    		repeated=true;
                    	}
                    }
                    if(!repeated) {
                    	usersArray.push(obj1);
                    }
					usersArray=desc(usersArray);
					topDonors();
					backgroundColor();
					createLink();
					localStorage.setItem("usersArray", JSON.stringify(usersArray));
				}}

				function dShowMyName(){
					if($("#name").val() !== ""){
					unShownUsersArray.push(storeValues());
					backgroundColor();
					createLink();
				}
			}
				function storeValues(){
					var obj = {};
					obj.name= $("#name").val();
					obj.contactInfo= $("#contact").val();
					obj.amount= parseInt($("#amount").val());
					return obj;
				}
				function topDonors(){
					$("#first").text(usersArray[0].name);
					$("#second").text(usersArray[1].name);
					$("#third").text(usersArray[2].name); 	
				}
				function backgroundColor(){
					var totalAmount =0;
					for (var i = usersArray.length - 1; i >= 0; i--) {
						totalAmount+= usersArray[i].amount;
					}
					if (totalAmount >10000){
						$('body').css("background-color", colorArray[colorCounter])
					}
					if (colorCounter>0){
						colorCounter--;
					}

					localStorage.setItem("colorCounter", JSON.stringify(colorCounter));

				}
				
				function createLink(){
					
					$("#anchor").text("Start The Game!");
					$("#anchor").attr("href","HB.html");
					$("body").append(anchor);
				}	

				var usersArray = JSON.parse(localStorage.getItem("usersArray"));
				var colorCounter = JSON.parse(localStorage.getItem("colorCounter"));
				$('body').css("background-color", colorArray[colorCounter])
				
				setInterval(function(){
				 $("#q1").text(quotesArray1[Math.floor(Math.random()*3)])
				 $("#q1").hide();
				 $("#q1").text(quotesArray1[Math.floor(Math.random()*3)])
				 $("#q1").show();
				  },3000);
				setInterval(function(){
				 $("#q2").text(quotesArray2[Math.floor(Math.random()*3)])
				 $("#q2").hide();
				 $("#q2").text(quotesArray2[Math.floor(Math.random()*3)])
				 $("#q2").show();
				  },3000);
				topDonors() ;     
				$("#inputshow").on("click",function(){showMyName()});
				$("#inputdshow").on("click",function(){dShowMyName()});


			})




