var people = [];
var twitterHandles = ["katyperry", "justinbieber", "barackobama", "taylorswift13", "rihanna", "theellenshow", "ladygaga", "youtube", "cristiano", "jtimberlake", "twitter", "kimkardashian", "britneyspears", "arianagrande", "selenagomez", "cnnbrk", "ddlovato", ""];

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

function Person(twitterhandle){
	// this.firstname = firstname;
	// this.lastname = lastname;
	this.twitterhandle = twitterhandle;
}

function sortPeople(data){
	//console.log(REContainer);
	// var newSrc = 'imgs/'+selectedPerson+'.jpg';
	// $('#dollImg').attr('src', newSrc);
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
			$('.table-row:last-child').append("<td><img src='imgs/voodoo.png' style='width:200px;' /> <p>"+people[i-1].twitterhandle+"</p></td>");
		}
	});
}