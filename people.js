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
	console.log(msg);
	$('#'+people[i].twitterhandle).empty();
	for(var f = 0; f < people[i].tweets.length; f++){
		if(people[i].tweets[f].score < 0){
			$('#'+people[i].twitterhandle).append("<li><img style='width:30px;' src='imgs/pin.png' /></li>");
		}
		else if(people[i].tweets[f].score > 0){
			$('#'+people[i].twitterhandle).append("<li><img style='width:30px;' src='imgs/heart.png' /></li>");
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
		for(var i = 1; i<twitterHandles.length; i++){
			//console.log(twitterHandles[i-1]);
			var newPerson = new Person(twitterHandles[i-1]);
			//console.log(newPerson);
			people.push(newPerson);
			if(i%3==1){
				$('#doll-grid').append("<tr class='table-row'></tr>");
			}
			console.log(people[i-1]);
			$('.table-row:last-child').append("<td><img src='imgs/voodoo.png' style='width:200px;' /> <p>"+people[i-1].twitterhandle+"</p><ul id='"+people[i-1].twitterhandle+"'></ul></td>");
		}
	});
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