var quotesArray1=[
"It's not how much we give but how much love we put into giving. -Mother Teresa",
"No one has ever become poor by giving. -Anne Frank",
"We make a living by what we get, but we make a life by what we give. -Winston Churchill"]
var quotesArray2=["For the love of money is a root of all kinds of evil. Some people, eager for money, have wandered from the faith and pierced themselves with many griefs. -Timothy 6:10",
"The rich rule over the poor, and the borrower is servant to the lender. -Proverbs 22:7",
"Those who believe, and do deeds of righteousness, and establish regular prayers and regular charity, will have their reward with their Lord: on them shall be no fear, nor shall they grieve. - 002/277"]
var usersArray = [{name: "RBK",contactInfo:"", amount:1000},{name:"Al-Omariyeh schools",contactInfo:"", amount:500},{name:"Survey corps",contactInfo:"", amount:100}]; 


$(document).ready(function(){

function asc(array){
	var maxObj= {}
var array1=[];
while(array.length!==0){
var max=array[0].amount;
for (j=0;j<array.length;j++){
if( array[j].amount<=max){
max=array[j].amount;
maxObj = array[j]
var c=j;
}}
array.splice(c,1);
array1.unshift(maxObj);}
return array1;}

function showMyName(){
	
var obj = {};
obj.name= $("#name").val();
obj.contactInfo= $("#contact").val();
obj.amount= parseInt($("#amount").val());
usersArray.push(obj);
usersArray=asc(usersArray);
$("#first").text(usersArray[0].name);
$("#second").text(usersArray[1].name);
$("#third").text(usersArray[2].name);
localStorage.setItem("usersArray", JSON.stringify(usersArray));
}

usersArray = JSON.parse(localStorage.getItem("usersArray"))


$("#q1").text(quotesArray1[Math.floor(Math.random()*3)]);
$("#q2").text(quotesArray2[Math.floor(Math.random()*3)]);
$("#first").text(usersArray[0].name);
$("#second").text(usersArray[1].name);
$("#third").text(usersArray[2].name);
$("#inputshow").on("click",function(){showMyName()});
$("#inputdshow").on("click",function(){dShowMyName()});


})	



