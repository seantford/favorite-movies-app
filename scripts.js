//create array with default objects in it
var mList = [
	{
		"t": "The Life Aquatic With Steve Zissou",
		"v": 10
	}, 
	{
		"t": "Pulp Fiction",
		"v": 3
	}, 
	{
		"t": "Forrest Gump",
		"v": 7
	}
];

//sort array by vote count 
function mListSort() {
	mList.sort(function(a, b){
		return parseFloat(b.v) - parseFloat(a.v);
	});
};

//use array to generate HTML for OL
function genHTML() {
	//erase current HTML
	$("#movieList").empty();
	//for i++ loop
	for (var i = 0; i < mList.length; i++) {
		//array[i][0] for title, array[i][1] for vote count
		//button id is index i value
		$("#movieList").append("<li>" + mList[i].t + "<button id=" + i + " class='vote'>Dig! [" + mList[i].v + " votes]</button></li>");
	}
};

	
//function to create a new object
var newMovie = function() {
	//create new object variable
	var movie = new Object;
	//capture input field
	title = $("#input").val();
	//if there is info in the input field
	if (title.length != 0) { 
		//assign title
		movie.t = title;
		//assign vote count
		movie.v = 0;
		//add to mList array
		mList.push(movie);
		//console.log(movie);
		//console.log(mList);
	}
};

//on ADDBUTTON click
$("#addButton").click(function(){
	//pull in data with newMovie
	newMovie();
	//sort the array with mListSort
	mListSort();
	//generate new HTML on page
	genHTML();
	//clear input field
	$("#input").val("");
});

//on vote button click
$(document).on("click", ".vote", function() {
	//find the mList object with a t value the same as the button's id
	//buttonId value will be index of mList
	var i = this.id;
	//add 1 to vote count to mList[i]
	mList[i].v += 1;
	//log it out
	console.log(mList[i]);
	//sort the array with mListSort
	mListSort();
	//generate new HTML
	genHTML();
});

//when the document is finished loading, genHTML and mListSort
$(document).ready(function(){
	//sort the array with mListSort
	mListSort();
	//generate new HTML
	genHTML();
});