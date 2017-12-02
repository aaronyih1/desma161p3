var people = [];
var twitterHandles = ["katyperry", "justinbieber", "barackobama", "taylorswift13", "rihanna", "theellenshow", "ladygaga", "youtube", "cristiano", "jtimberlake", "twitter", "kimkardashian", "britneyspears", "arianagrande", "selenagomez", "cnnbrk", "ddlovato", "trump", "Trump", "POTUS"];
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

function Person(twitterhandle, tweets){
	// this.firstname = firstname;
	// this.lastname = lastname;
	this.twitterhandle = twitterhandle;
	this.tweets = [];

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
	//console.log(msg);
	$('#'+people[i].twitterhandle).empty();
	var counter=0;
	for(var f = 0; f < people[i].tweets.length; f++){
		if(people[i].tweets[f].score < 0){
			counter++;
			$('#'+people[i].twitterhandle).append("<li><img id='"+people[i].twitterhandle+"pins"+counter+"' style='-ms-transform-origin: 100% 100%; -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; width:50px; position: relative;"+positionPins(counter, people[i])+"' src='imgs/pin.png' /></li>");
			//$("#"+people[i].twitterhandle+"pins"+counter).css("transform", "rotate("+Math.random()*360+"deg)");
		}
		else if(people[i].tweets[f].score > 0){
			//console.log(people[i].tweets[f].score);
			//$('body').css("background-color", "red");
			$('#'+people[i].twitterhandle+'heart').css("transform", 'scale('+people[i].tweets[f].score.map(0,10, 1, 2.5)+','+people[i].tweets[f].score.map(0,10, 1, 2.5)+')');
			//$('#'+people[i].twitterhandle+'heart').css("width", '"'+50*people[i].tweets[f].score+'px !important"');
			//$('#'+people[i].twitterhandle+'container').append("<img style='position: relative; right:0px; bottom:270px; width:50px;' src='imgs/heart.png' />");
		}
	}
	//console.log("THIS IS PEOPLE " + people[i].twitterhandle);
	
	// for(var j = 0; j<people[i].length; j++){
	// 	$('"#'+people[i].twitterhandle+'"').append("<li>woooo</li>");
	// }
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
			$('.table-row:last-child').append("<td id='"+people[i-1].twitterhandle+"container'><img src='imgs/voodoo.png' style='width:200px; display:block; margin:0 auto;' /><img id='"+people[i-1].twitterhandle+"heart' style='position: relative; right:0px; bottom:190px; width:30px;' src='imgs/heart.png' /> <p>"+people[i-1].twitterhandle+"</p><ul id='"+people[i-1].twitterhandle+"' style='height:0px; margin:0px;'></ul></td>");
			// $('.table-row:last-child').append("<td id='"+people[i-1].twitterhandle+"container'><img src='imgs/"+people[i-1].twitterhandle+".png' style='width:200px; display:block; margin:0 auto;' /><img id='"+people[i-1].twitterhandle+"heart' style='position: relative; right:0px; bottom:200px; width:50px;' src='imgs/heart.png' /> <p>"+people[i-1].twitterhandle+"</p><ul id='"+people[i-1].twitterhandle+"'></ul></td>");
			$('#index').append("<li><a href='"+"#"+people[i-1].twitterhandle+'container'+"'>"+indexCalc(i)+". "+people[i-1].twitterhandle+"</a></li>");
		}
	});
}
function positionPins(pins, person){
		//console.log(pins);
		console.log(pins);
		switch (pins){
			case 1: 
			//$("#Trumppins").css("transform", "rotate(90deg)");
			// $("#Trumppins").css("width", "200px");
			// $("#"+person.twitterhandle+"pins").css("transform", "rotate(90deg)");
			return("left:15px; bottom:120px;");
			break;
			case 2: 
			return("left:35px; bottom:175px;");
			break;
			case 3: 
			return("left:30px; bottom:325px;");
			break;
			case 4: 
			return("left:-100px; bottom:225px;");
			break;
			case 5: 
			return("left:-20px; bottom:320px;");
			break;
			case 6: 
			return("left:0px; bottom:360px;");
			break;
			default:
			$('#extrapincount').remove();
			$('#'+person.twitterhandle+'container').append("<div id='extrapincount'><img style='width:30px;' src='imgs/pin.png' /><p>+"+(pins-6)+"</p></div>");
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