var thename = "Akshetha VishnuPrasad Dhivya";
var my_info = "cs190 Javascript Lab 2";
var myid = 575;


//Lab6//
function getBreaks971() {
  let numBreaks;

  do 
  {
    numBreaks = prompt("Enter a number between 1 and 5:");
  } while (numBreaks < 1 || numBreaks > 5);
        
  let breakString = "";
  
  for (let i = 0; i < numBreaks; i++) {
    breakString += "<br>";
  }
  
  document.getElementById("breaks971").innerHTML = breakString;
}

function getCards368() {
  
  let numCards;
        
  do 
  {
    numCards = prompt("Enter a number between 2 and 7: ");
  } while (numCards < 2 || numCards > 7);
        
  let cardString = "";
  
  for (let i = 0; i < numCards; i++) {
    cardString += "Card #" + i + " ";
  }
  
  document.getElementById("cards368").innerHTML = cardString;
}


//Lab5//
function getName798() {
        
	answer = prompt("What is your name?");

    if (answer.length < 5) 
    {
  		document.getElementById("name798").innerHTML = "Your name is: " + answer + " You have a short name";
	} 
	else if (answer.length < 10 && answer.length > 5) 
    {
    	document.getElementById("name798").innerHTML = "Your name is: " + answer + " You have a medium name";
  	}
	else (answer.length > 10) 
    {
      document.getElementById("name798").innerHTML = "Your name is: " + answer + " You have a long name";
    }
}


function getAge715 () {
        
	answer = prompt("What is your age?");

    if (answer < 18) 
    {
  		document.getElementById("age715").innerHTML = "Your age is: " + answer + " You are a kid";
	}
    else 
    {
  		if (answer < 50) 
        {
    		document.getElementById("age715").innerHTML = "Your age is: " + answer + " You are an adult";
  		}
  		else {
    		if (answer > 50) 
            {
      			document.getElementById("age715").innerHTML = "Your age is: " + answer + " You are a senior citizen";
    		}
    	}
  	}
}


//Lab4//

function changetype237() {
        
	var thetype = "direct";
        
   	if (thetype == "direct") 
    {
	  alert("advertising");
   	}
   	if (thetype == "advertising")  
    {
	  alert("subscription");
   	}
   	if (thetype == "subscription")  
    {
	  alert("direct");
   	}

}


function displaytype911() {
        
   if (thetype == "direct") 
   {
	  alert("Buy Now! From this web page! My children need new shoes!");
   }
   if (thetype == "advertising")  
   {
	  alert("Support our advertisers! Click on an ad, so I can make money!");
   }
   if (thetype == "subscription")  
   {
	  alert("Renew your subscription today! My children need medicine!");
   }

}



//Lab3//

special = 1;     // selects which item that is "on special"

function displayspecial276() {

  	if (special == 1) 
    {
  		alert("The current special is #1");
  	}
        
   	if (special == 2)  
   	{
	  	alert("The current special is #2");
   	}
        
   	if (special == 3 )  {
	  	alert("The current special is #3");
   	}
        
   	special = special + 1;
   
   	if (special > 3) {
	 	special = 1 ; 
   	}

}

//Lab 2
  
function displayinfo780(){
	alert("My name is " + thename + ". This is my info: " + my_info + ". My id is " + myid + ".");
}


//Lab1
function confirmlink347(linkname) {
	if (confirm("Are you sure you want to jump to " + linkname + "?")) 
    {
    	window.location.href = linkname; 
   	}
}
