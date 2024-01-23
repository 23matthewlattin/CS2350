

window.addEventListener("load", function(){
	//onchange is used on the functions so that way every time
	//something changes the proper value updates.
	document.getElementById("weight").onchange = updateWeight;
	updateCost();
	document.getElementById("days").onchange = updateDays;
	document.getElementById("sing").onchange = updateTricks;
	document.getElementById("cute").onchange = updateTricks;
	document.getElementById("trick").onchange = updateTricks;
	updateTricks();
	updateDays();
	updateCost();
});
	var petForm = document.forms.petForm;
	var weight = document.querySelector('input[name="weight"]').value;
	
function updateCost(){
	//sets default values to 0
	var registrationCost = 0;
	var numEvents = 0;
	var totalCost = 0;
	//sets the value of the boardingCost so it can find totalCost
	var boardingCost = parseFloat(petForm.elements.boardingFee.value).toFixed(2);
	if(boardingCost === ""){
		boardingCost = parseFloat(0).toFixed(2);
	}

	//adds to event number if the checkbox is checked
	if(document.querySelector('input[name="sing"]:checked')){
		numEvents ++;
	}
	if(document.querySelector('input[name="cute"]:checked')){
		numEvents ++;
	}
	if(document.querySelector('input[name="trick"]:checked')){
		numEvents ++;
	}
	
	//finds the registration cost from price of event 
	//multiplied by total events registerd for
	var registrationCost = parseFloat(numEvents * 120).toFixed(2);
	
	//sets the boarding and registration costs to be floats when they get displayed in the form
	petForm.elements.boardingCost.value = parseFloat(boardingCost).toFixed(2);
	petForm.elements.registrationCost.value = parseFloat(registrationCost).toFixed(2);
	
	//adds the the registration and boarding costs together to get the total 
	//cost and dipslays 2 decimal places in the form
	totalCost = (parseFloat(boardingCost) + parseFloat(registrationCost));
	petForm.elements.totalCost.value = parseFloat(totalCost).toFixed(2);
}

//update weight changes the kennel size based on the weight 
//that the user enters into the form
function updateWeight(){
	var weight = petForm.elements.weight.value;
	if(weight <= 4){
		petForm.elements.size.value = "mini";
	}
	else if((weight > 4) && (weight <= 12)){
		petForm.elements.size.value = "small";
	}
	else if((weight > 12) && (weight <= 50)){
		petForm.elements.size.value = "medium";
	}
	else if(weight > 50){
		petForm.elements.size.value = "large";
	}
	else{
		petForm.elements.size.value = " ";
	}
}//end updateWeight

function updateDays(){
	//var days = document.querySelector('input[name="days"]').value;
	var days = petForm.elements.days.value;
	if(days >= 0){
		petForm.elements.days.value = days;
		//sets the cost to be number of days * 19.99 which is the daily price
		//the cost gets displayed in the proper boxes on the form
		petForm.elements.boardingFee.value = parseFloat(days*19.99).toFixed(2);
		petForm.elements.boardingCost.value = parseFloat(days*19.99).toFixed(2);
	}
	//the else prevents negative values and gives a default value of 0
	else{
		petForm.elements.days.value = 0;
		petForm.elements.boardingFee.value = parseFloat(0).toFixed(2);		
		petForm.elements.boardingCost.value = parseFloat(0).toFixed(2);		
	}	
	//calls updateCost to update the cost whenever the days of boarding are 
	//changed
	updateCost();
}//end updateDays

//function to display div for tricks if the checkbox
//for a trick is selected
function updateTricks(){
	if(document.querySelector('input[name="sing"]:checked')){
		document.getElementById("singAdd").style.display= "block";		
	}
	else{
		document.getElementById("singAdd").style.display= "none";
	}
	if(document.querySelector('input[name="cute"]:checked')){
		document.getElementById("cuteAdd").style.display= "block";
	}
	else{
		document.getElementById("cuteAdd").style.display= "none";
	}
	if(document.querySelector('input[name="trick"]:checked')){
		document.getElementById("trickAdd").style.display= "block";
	}
	else{
		document.getElementById("trickAdd").style.display= "none";
	}
	
	//updateCost called so it updates the cost based on what tricks are
	//selected whenever a trick is checked or unchecked
	updateCost();
}//end updateTricks()

	