



document.getElementById("startButton").addEventListener("click", function(){
	var number = document.getElementById("numSymbols").value;
	if(number > 8){
		number = 8;
	}
	document.getElementById("startForm").style.display = "none";
	var symbols = ["!","@","/","*","+","&","^","$"];
	generateBoard(symbols);
});

function generateBoard(symbols){
	//generate random symbols
	var a = symbols[Math.floor(Math.random() * 8)];
	var aIndx = symbols.indexOf(a);
	symbols.splice(aIndx, 1);
	var b = symbols[Math.floor(Math.random() * 7)];
	var bIndx = symbols.indexOf(b);
	symbols.splice(bIndx, 1);
	var c = symbols[Math.floor(Math.random() * 6)];
	var cIndx = symbols.indexOf(c);
	symbols.splice(cIndx, 1);
	var d = symbols[Math.floor(Math.random() * 5)];
	var dIndx = symbols.indexOf(d);
	symbols.splice(dIndx, 1);
	var e = symbols[Math.floor(Math.random() * 4)];
	var eIndx = symbols.indexOf(e);
	symbols.splice(eIndx, 1);
	var f = symbols[Math.floor(Math.random() * 3)];
	var fIndx = symbols.indexOf(f);
	symbols.splice(fIndx, 1);
	var g = symbols[Math.floor(Math.random() * 2)];
	var gIndx = symbols.indexOf(g);
	symbols.splice(gIndx, 1);
	var h = symbols[0];

	
	var cards = document.getElementById("numSymbols").value * 2;
	if(cards > 16){
		cards = 16;
	}
	var table = document.createElement("table");
	table.setAttribute("id", "gameTable");
	document.body.appendChild(table);
	if(cards === 2){
		table.innerHTML = "<tr><td>" + a +
		"</td><td>" + a + "</td></tr>";		
	}
	
	if(cards === 4){
		table.innerHTML = "<tr><td>" + a +
		"</td><td>" + b + "</td></tr><tr><td>" + b +
		"</td><td>" + a + "</td></tr>";		
	}
	if(cards === 6){
		table.innerHTML = "<tr><td>" + c + "</td><td>" 
		+ a + "</td><td>" + c + "</td></tr><tr><td>" + b +
		"</td><td>" + a +"</td><td>" + b + "</td></tr>";		
	}
	if(cards === 8){
		table.innerHTML = "<tr><td>" + d + 
		"</td><td>" + c + "</td><td>" + d + "</td><td>" + a + 
		"</tr><tr><td>" + b + "</td><td>" + a + "</td><td>" + c +
		"</td><td>" + b + "</td></tr>";		
	}
	if(cards === 10){
		table.innerHTML = "<tr><td>" + e + "</td><td>" + a + 
		"</td><td>" + b + "</td><td>"+ c + "</td><td>" + d + "</tr><tr><td>" + a +
		"</td><td>" + b + "</td><td>" + c + "</td><td>" + d + "</td><td>" + e + "</td></tr>";		
	}
	if(cards === 12){
		table.innerHTML = "<tr><td>" + a + "</td><td>" + f + "</td><td>" + b + 
		"</td><td>" + d + "</td><td>" + c + "</td><td>" + e + "</td></tr><tr><td>" + f +
		"</td><td>" + a + "</td><td>" + b + "</td><td>" + c + "</td><td>" + d + "</td><td>"
		+ e + "</td></tr>";		
	}
	if(cards === 14){
		table.innerHTML = "<tr><td>" + b + "</td><td>" + g + "</td><td>" + a + 
		"</td><td>" + d + "</td><td>" + c + "</td><td>" + e + "</td><td>" + f + "</td></tr>\
		<tr><td>" + f + "</td><td>" + a + "</td><td>" + b + "</td><td>" + c + "</td><td>" + d + "</td><td>"
		+ e + "</td><td>" + g + "</td></tr>";			
	}
	if(cards === 16){
		table.innerHTML = "<tr><td>" + b + "</td><td>" + g + "</td><td>" + a + 
		"</td><td>" + d + "</td></tr><tr><td>" + c + "</td><td>" + e + "</td><td>" + f + "</td><td>" + h + "</td></tr>\
		<tr><td>" + f + "</td><td>" + a + "</td><td>" + b + "</td><td>" + c + "</td></tr><tr><td>" + d + "</td><td>"
		+ e + "</td><td>" + g + "</td><td>" + h + "</td></tr>";	
	}
	
	
	
	//set up the game board
	setUpBoard();
	userClick();

}

function setUpBoard(){
	document.getElementById("gameTable").style.backgroundColor= "rgb(100, 100, 100)";
	document.getElementById("gameTable").style.color= "rgb(100, 100, 100)";
	
	var styleSheet = document.createElement("style");
	document.head.appendChild(styleSheet);
	
	document.styleSheets[document.styleSheets.length - 1].insertRule(
		"table td {\
			border: 3px solid white;\
			width: 100px;\
			height: 100px;\
			text-align: center;\
		}", 0);
}

function userClick(){
	var clickCount = 0;
	var guessCount = 0;
	var idNum = 0;
	selectedArray =  new Array();
	var td = document.querySelectorAll("td");
	var guesses = document.createElement("p")
	for(var i = 0; i < td.length; i++)
	{
		td[i].addEventListener("click", function(e){
			e.target.style.backgroundColor = "blue";
			e.target.style.color = "white";
			e.target.setAttribute("id", idNum);
			selectedArray.push(e.target.innerHTML);
			clickCount++;
			idNum++;
		if((clickCount === 2) && (selectedArray[0] === selectedArray[1])){
			clickCount = 0;
			selectedArray.shift();
			selectedArray.shift();
			//idNum++;
			guessCount++;
			var correct = 0;
			var size = document.getElementById("numSymbols").value *2;
			for(var i = 0; i < size; i++){
			if((document.getElementById(i).style.backgroundColor = "blue") &&
				(document.getElementById(i).style.color = "white")){
					correct++;		
				}
			}
			if(correct === size){
				document.getElementById("gameTable").style.display= "none";
				var congrats= document.createElement("p");
				congrats.innerHTML = "You have found all the matches. Good job.";
				document.body.appendChild(congrats);
			}
		}//end if
		if((clickCount === 2) && (selectedArray[0] === selectedArray[1])){
			guessCount++;
			guesses.innerHTML = "Number of guesses: " + guessCount;
		}
		else if((clickCount === 2) && (selectedArray[0] !== selectedArray[1])){
			setTimeout( function(){
			clickCount = 0;	
			document.getElementById(idNum -=1).style.backgroundColor= "rgb(100, 100, 100)";
			document.getElementById(idNum).style.color= "rgb(100, 100, 100)";
			document.getElementById(idNum-=1).style.backgroundColor= "rgb(100, 100, 100)";
			document.getElementById(idNum).style.color= "rgb(100, 100, 100)";
			selectedArray.shift();
			selectedArray.shift();
			idNum+=2;
			guessCount++;
			guesses.innerHTML = "Number of guesses: " + guessCount;
			}, 500);
		}//end else if
		});
	}//end for	
			document.body.appendChild(guesses);	
}//end user click
