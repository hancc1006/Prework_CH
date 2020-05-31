//When factbutton is clicked
$("#factButton").on("click", function() {
	//generate a random number between 0 and the number of facts in booFacts
	var number = Math.floor((Math.random() * booFacts.length));
	//display the fact from boofacts that is in random position we generated
	$("#factText").text(booFacts[number])
})
//array holds all of boo's facts
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

//When the textPink button is pressed
$("#textPink").on("click", function() {
	//Change funtext to pink"
	$("#funText").css("color", "pink")
})

//when textOrange button is pressed
$("#textOrange").on("click", function() {
	//change funtext to textOrange
	$("#funText").css("color", "orange")
})

//when textGreen button is pressed
$("#textGreen").on("click", function() {
	//change fun test to green
	$("#funText").css("color", "green")
})

//boxgrow button clicked
$("#boxGrow").on("click", function() {
	//increase size of box
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	//decrease size of box
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})