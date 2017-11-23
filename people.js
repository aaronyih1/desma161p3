var selectedPerson = "voodoo";
var REContainer = new RegExp(selectedPerson);
var test = $('#people-input').val();

$( document ).ready(function() {
    $("#field-submit").click(function(e){
    	e.preventDefault();
    	//console.log(selectedPerson);
        selectedPerson = $('#people-input').val();
        REContainer = new RegExp(selectedPerson);
    });
});


function sortPeople(data){
	//console.log(REContainer);
	var newSrc = 'imgs/'+selectedPerson+'.jpg';
	$('#dollImg').attr('src', newSrc);
	// if(data.text.match(/([T|t]rump|[P|p][O|o][T|t][U|u][S|s])/g)){
	// 	return(true);
	// }
	// else
	// 	return(false);
	// var wordHolder;
	// selectedPerson = getNthWord(selectedPerson, 1);
	// console.log(selectedPerson);
	// console.log(data.text.match(/([T|t]rump|[P|p][O|o][T|t][U|u][S|s])/g));
	if(data.text.match(REContainer)){
		return(true);
	}
	else
		return(false);
}
var getNthWord = function(string, n){
    var words = string.split(" ");
    return words[n-1];
}