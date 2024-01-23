/*

Name: Matthew Lattin
Date: 03/17/2021

*/

 var firstNames = ["Michael", "Steve", "Laura", "Connor",
 "Harland", "Dave","Ryan"]
 var relationship = ["Brother", "Uncle", "Aunt", "Cousin", 
 "Father", "Uncle", "Cousin"]
 var tableHTML = "<table><tr><th>Name</th><th>Relationship</th></tr>";
 for(var i = 0; i < firstNames.length; i++){
	 tableHTML += "<tr><td>" + firstNames[i] + "</td><td>" +
	 relationship[i] + "</td></tr>";
 }	
 tableHTML += "</table>";
 document.getElementById("family").innerHTML = tableHTML;
 
 var colorArray = [];
 
 colorArray.push("purple");
 colorArray.unshift("red", "green");
 colorArray.splice(4,0, "brown", "yellow", "pink", "blue");
 
 var unorderedList = "<ul>";
 for(let x of colorArray){
	unorderedList += "<li>" + x + "</li>";
 }
 unorderedList += "</ul>";
 document.getElementById("allColors").innerHTML = unorderedList;
 
 var pColors = "<ul>";
 for(let x of colorArray){
	 
	 if(x[0] === "p"){
		 pColors += "<li>" + x + "</li>";	 
	 }
 }
  pColors += "</ul>";
 document.getElementById("pColors").innerHTML = pColors;
 
  var nonBColors = "<ul>";
 for(let x of colorArray){
	 
	 if(x[0] === "b"){
		 nonBColors += "";	 
	 }
	 else {
		nonBColors += "<li>" + x + "</li>"
	 }
 }
  nonBColors += "</ul>";
 document.getElementById("nonBColors").innerHTML = nonBColors;
 var colorsWithNList = "<ul>"; 
 function colorsWithN(colorArray){

	for(let x of colorArray){
		for(var i = 0; i <= x.length; i++){
			if(x[i] === "n"){
				colorsWithNList +=  "<li>" +  
				x + "</li>" 					
			}
		}
	}
	return colorsWithNList;
 }
  colorsWithNList += colorsWithN(colorArray) + "</ul>";
 document.getElementById("filterColors").innerHTML = colorsWithNList;
 
 var randomArray = ["food", "school", "walking", "store", "death",
 "vacation"];
 var numbersArray = [4,48,-56,102, 45, 20141];
 
 var arrayStrings = "<p>" + randomArray.toString() + "</p></p>" +
 numbersArray.toString() + "</p>";
 document.getElementById("twoArrays").innerHTML = arrayStrings;
 
 randomArray.sort();
 numbersArray.sort();
 var sortedArrays = "<p>" + randomArray.toString() + "</p></p>" +
 numbersArray.toString() + "</p>";
 document.getElementById("sortedArrays").innerHTML = sortedArrays;
 
 numbersArray.sort(function(a, b){return a - b});
 var sortedNumberArray = "<p>" + numbersArray.toString() + "</p>";
 document.getElementById("sortedNumberArray").innerHTML = sortedNumberArray;
 
 var lastModified = document.lastModified;
 var date = new Date();
 
 var footer = "<h4> Last Modified: " + lastModified + 
 "</h4><h4>Current Date: " + date + "</h4>";
 document.getElementById("dates").innerHTML = footer;
 
 
