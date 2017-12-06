var people = [];
var twitterHandles = ["katyperry", "justinbieber", "BarackObama", "taylorswift13", "rihanna", "TheEllenShow", "ladygaga", "YouTube", "Cristiano", "jtimberlake", "Twitter", "KimKardashian", "britneyspears", "ArianaGrande", "selenagomez", "cnnbrk", "ddlovato", "jimmyfallon", "shakira", "JLo", "realDonaldTrump", "BillGates", "nytimes", "Oprah", "KingJames", "instagram", "CNN", "BrunoMars", "MileyCyrus", "narendramodi", "NiallOfficial", "Drake", "BBCBreaking", "neymarjr", "SportsCenter", "KevinHart4real", "espn", "wizkhalifa", "LilTunechi", "onedirection", "SrBachchan", "Pink", "Harry_Styles", "iamsrk", "Louis_Tomlinson", "LiamPayne", "aliciakeys", "KAKA", "Adele", "BeingSalmanKahn"];
var twitterNames = ["Katy Perry", "Justin Bieber", "Barack Obama", "Taylor Swift", "Rihanna", " Ellen Degeneres", "Lady Gaga", "YouTube", "Cristiano Ronaldo", "Justin Timberlake", "Twitter", "Kim Kardashian", "Britney Spears", "Ariana Grande", "Selena Gomez", "CNNbrk", "Demi Lovato", "Jimmy Fallon", "Shakira", "JLo", "Donald Trump", "Bill Gates", "NY times", "Oprah", "Lebron James", "Instagram", "CNN", "Bruno Mars", "Miley Cyrus", "Narendra Modi", "Niall Horan", "Drake", "BBC Breaking", "Neymar Jr", "Sports Center", "Kevin Hart", "ESPN", "Wiz Khalifa", "Lil Wayne", "One Direction", "Amitabh Bachchan", "Pink", "Harry Styles", "Shah Rukh Khan", "Louis Tomlinson", "Liam Payne", "Alicia Keys", "Ricardo KAKA", "Adele", "Salman Kahn"];
var condition = "";
peopleConcat();
// var firstNames = ["katy", "justin", "barackobama", "taylorswift13", "rihanna", "theellenshow", "ladygaga", "youtube", "cristiano", "jtimberlake", "twitter", "kimkardashian", "britneyspears", "arianagrande", "selenagomez", "cnnbrk", "ddlovato", ""];
// var selectedPerson = "voodoo";
// var REContainer = new RegExp(selectedPerson);
// var test = $('#people-input').val();

// $( document ).ready(function() {
//     $("#field-submit").click(function(e){
//     	e.preventDefault();
//     	//console.log(selectedPerson);
//         selectedPerson = $('#people-input').val();
//         REContainer = new RegExp(selectedPerson);
//     });
// });
populatePage();

function Person(twitterhandle, tweets, pins){
	// this.firstname = firstname;
	// this.lastname = lastname;
	this.twitterhandle = twitterhandle;
	this.tweets = [];
	this.pins =[];

}
function Pin(position, rotation){
	this.position=position;
	this.rotation=rotation;
}

function sortPeople(data){
	 //console.log(data);
	//console.log(REContainer);
	// var newSrc = 'imgs/'+selectedPerson+'.jpg';
	// $('#dollImg').attr('src', newSrc);
	// for(var i = 0; i<twitterHandles.length;i++){
	// 	console.log(twitterHandles[i]);
	// 	if(data.text.match(peopleConcat())){
	// 		return(true);
	// 	}
	// 	else
	// 		return(false);
	// }
	//console.log(peopleConcat());
	if(data.text.match(condition)){
		return(true);
	}
	else
		return(false);
	// if(data.text.match(/([T|t]rump|[P|p][O|o][T|t][U|u][S|s])/g)){
	// 	return(true);
	// }
	// else
	// 	return(false);
	// var wordHolder;
	// selectedPerson = getNthWord(selectedPerson, 1);
	// console.log(selectedPerson);
	// console.log(data.text.match(/([T|t]rump|[P|p][O|o][T|t][U|u][S|s])/g));
	// if(data.text.match(REContainer)){
	// 	return(true);
	// }
	// else
	// 	return(false);
}
var getNthWord = function(string, n){
    var words = string.split(" ");
    return words[n-1];
}
function addToPerson(msg){
	for(var i = 0; i < people.length; i++){
		if (msg.text.match(people[i].twitterhandle)){
			people[i].tweets.push(msg);
			//console.log(people[i]);
			updateSentiment(msg,i);
		}
	}
}
function updateSentiment(msg,i){
		if(people[i].tweets[people[i].tweets.length-1].score < 0){
			var pinHolder = new Pin(people[i].pins.length, Math.random()*360)
			people[i].pins.push(pinHolder);
			renderPins(i);
		}
		else if(people[i].tweets[people[i].tweets.length-1].score  > 0){
			//console.log(people[i].tweets[f].score);
			//$('body').css("background-color", "red");
			$('#'+people[i].twitterhandle+'heart').css("transform", 'scale('+people[i].tweets[people[i].tweets.length-1].score.map(0,10, 1, 4)+','+people[i].tweets[people[i].tweets.length-1].score.map(0,10, 1, 4)+')');
			//$('#'+people[i].twitterhandle+'heart').css("width", '"'+50*people[i].tweets[f].score+'px !important"');
			//$('#'+people[i].twitterhandle+'container').append("<img style='position: relative; right:0px; bottom:270px; width:50px;' src='imgs/heart.png' />");
		}
	//console.log(msg);
	// $('#'+people[i].twitterhandle).empty();
	// var counter=0;
	// for(var f = 0; f < people[i].tweets.length; f++){
	// 	if(people[i].tweets[f].score < 0){
	// 		counter++;
	// 		$('#'+people[i].twitterhandle).append("<li><img id='"+people[i].twitterhandle+"pins"+counter+"' style='-ms-transform-origin: 100% 100%; -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; width:50px; position: relative;"+positionPins(counter, people[i])+"' src='imgs/pin.png' /></li>");
	// 		//$("#"+people[i].twitterhandle+"pins"+counter).css("transform", "rotate("+Math.random()*360+"deg)");
	// 	}
	// 	else if(people[i].tweets[f].score > 0){
	// 		//console.log(people[i].tweets[f].score);
	// 		//$('body').css("background-color", "red");
	// 		$('#'+people[i].twitterhandle+'heart').css("transform", 'scale('+people[i].tweets[f].score.map(0,10, 1, 2.5)+','+people[i].tweets[f].score.map(0,10, 1, 2.5)+')');
	// 		//$('#'+people[i].twitterhandle+'heart').css("width", '"'+50*people[i].tweets[f].score+'px !important"');
	// 		//$('#'+people[i].twitterhandle+'container').append("<img style='position: relative; right:0px; bottom:270px; width:50px;' src='imgs/heart.png' />");
	// 	}
	// }
	//console.log("THIS IS PEOPLE " + people[i].twitterhandle);
	
	// for(var j = 0; j<people[i].length; j++){
	// 	$('"#'+people[i].twitterhandle+'"').append("<li>woooo</li>");
	// }
}
function renderPins(i){
	console.log(people[i].pins);
	$('#'+people[i].twitterhandle).append("<li><img id='"+people[i].twitterhandle+"pins' style='-ms-transform-origin: 100% 100%; -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; width:50px; "+"transform:rotate("+people[i].pins[people[i].pins.length-1].rotation+"deg);"+"position: relative;"+positionPins(people[i].pins[people[i].pins.length-1].position, i)+"' src='imgs/pin.png' /></li>");
}
function populatePage() {
	$( document ).ready(function() {
		console.log(twitterHandles.length);
		for(var i = 1; i<=twitterHandles.length; i++){
			//console.log(twitterHandles[i-1]);
			var newPerson = new Person(twitterHandles[i-1]);
			//console.log(newPerson);
			people.push(newPerson);
			if(i%3==1){
				$('#doll-grid').append("<tr class='table-row'></tr>");
			}
			console.log(people[i-1]);
			$('.table-row:last-child').append("<td id='"+people[i-1].twitterhandle+"container'><img src='imgs/"+people[i-1].twitterhandle+".jpg' style='width:250px; display:block; margin:0 auto; clip: rect(0px,300px,60px,0px);' /><img id='"+people[i-1].twitterhandle+"heart' style='position: relative; right:0px; bottom:190px; width:30px;' src='imgs/heart.png' /> <p style='position:relative; top:-35px;'>"+twitterNames[i-1]+"</p><ul id='"+people[i-1].twitterhandle+"' style='height:0px; margin:0px;'></ul></td>");
			// $('.table-row:last-child').append("<td id='"+people[i-1].twitterhandle+"container'><img src='imgs/"+people[i-1].twitterhandle+".png' style='width:200px; display:block; margin:0 auto;' /><img id='"+people[i-1].twitterhandle+"heart' style='position: relative; right:0px; bottom:200px; width:50px;' src='imgs/heart.png' /> <p>"+people[i-1].twitterhandle+"</p><ul id='"+people[i-1].twitterhandle+"'></ul></td>");
			$('#index').append("<li><a href='"+"#"+people[i-1].twitterhandle+'container'+"'>"+indexCalc(i)+". "+twitterNames[i-1]+"</a></li>");
		}
	});
}
function positionPins(pins, i){
		//console.log(pins);
		console.log(pins);
		switch (pins){
			case 0: 
			return("left:25px; bottom:285px;");
			break;
			case 1: 
			//$("#Trumppins").css("transform", "rotate(90deg)");
			// $("#Trumppins").css("width", "200px");
			// $("#"+person.twitterhandle+"pins").css("transform", "rotate(90deg)");
			return("left:-5px; bottom:150px;");
			break;
			case 2: 
			return("left:5px; bottom:165px;");
			break;
			case 3: 
			return("left:-10px; bottom:315px;");
			break;
			case 4: 
			return("left:60px; bottom:240px;");
			break;
			case 5: 
			return("left:14px; bottom:335px;");
			break;
			default:
			$('#'+people[i].twitterhandle+'container '+'.extrapincount').remove();
			$('#'+people[i].twitterhandle+'container').append("<div class='extrapincount'><img style='width:30px;' src='imgs/pin.png' /><p>+"+(pins-5)+"</p></div>");
			return("display:none;");
		}
}
function randomRotation(){

	var rot = Math.random()*360;
	return("-ms-transform: rotate("+rot+"deg); -webkit-transform: rotate("+rot+"deg); transform: rotate("+rot+"deg);");
}
function peopleConcat(){
	//var f = 0;
	for(var i = 0; i<twitterHandles.length;i++){
		//console.log(twitterHandles[i]);
		condition += twitterHandles[i] + "|";
		// if((i == twitterHandles.length-1)){
		// 	condition += "|";
		// }

	}
	condition = condition.substring(0,condition.length-1);
	console.log(condition);
	return(condition);
}
function indexCalc(i){
	if(i<10)
		return("0"+i);
	else
		return(i);

}
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}