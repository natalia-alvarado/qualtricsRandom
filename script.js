var numChoice = 3;

// Vectors containing all attribute levels:\
	// Vectors displayed in the conjoint table:\
var nameArray = ["Spanish Male","Spanish Male","Spanish Female","Spanish Female","Arabic Male","Arabic Female","Catalan Male","Catalan Female"];

var educationArray = ["Bachelor degree", "Master degree", "Doctoral degree"];
var qualificationArray = ["Sufficient", "Good", "Excellent"];
var pubexperienceArray = ["2 years", "8 years", "14 years"];
var priexperienceArray = ["2 years", "8 years", "14 years"];
	
// Fisher-Yates shuffle:\
function shuffle(array){
for (var i = array.length - 1; i > 0; i--){ 
  var j = Math.floor(Math.random() * (i + 1));
  var temp = array[i]; array[i] = array[j];
  array[j] = temp; 
}
return array; }

// Shuffle a vector, choose the first entry:\
function shuffle_one(theArray){ 
	var out = shuffle(theArray);
	var out = out [0]; 
	return(out)
};

// Shuffle but get me a non-repeated name
function shuffle_special(theArray, name1){
  var shuffledArray = shuffle(theArray);
  
  if (name1 != shuffledArray[0]) {
    var name2 = shuffledArray[0];
  } else if (name1 != shuffledArray[1]) {
    var name2 = shuffledArray[1];
  } else {
    var name2 = shuffledArray[2];
  }
  
  return(name2)
};

// Education shuffle with unequal probability (60% = BA, 30% = MA, 10% = PhD):\
function return_education(){
	var num = Math.random();
	if(num < .6) {
		var out = "Bachelor degree"
		} else if(num < .9) {
			var out = "Master degree" 
		} else {var out = "Doctoral degree"
		}; return out
};
	
// Ethnicity-specific name shuffle with unequal probability (50% = Spanish, 25% = Arabic, 25% = Catalan):\
							 
	
                                  
function randomMe(){
  for(i = 1; i <= numChoice; i++) {
    var myDiv = document.createElement('div');
    
    var name1 = shuffle_one(nameArray);
    myDiv.innerHTML += "choice"+i+"_name1: "+ name1 + "<br>";
    myDiv.innerHTML += "choice"+i+"_name2: "+shuffle_special(nameArray, name1) + "<br><br>";
    myDiv.innerHTML += "choice"+i+"_qualification1: "+shuffle_one(qualificationArray) + "<br>";
	  myDiv.innerHTML += "choice"+i+"_qualification2: "+shuffle_one(qualificationArray) + "<br><br>";
	  myDiv.innerHTML += "choice"+i+"_pubexperience1: "+shuffle_one(pubexperienceArray) + "<br>";
	  myDiv.innerHTML += "choice"+i+"_pubexperience2: "+shuffle_one(pubexperienceArray) + "<br><br>";
	  myDiv.innerHTML += "choice"+i+"_priexperience1: "+shuffle_one(priexperienceArray) + "<br>";
	  myDiv.innerHTML += "choice"+i+"_priexperience2: "+shuffle_one(priexperienceArray) + "<br><br>";
	
	  myDiv.innerHTML += "choice"+i+"_education1: "+return_education() + "<br>";
	  myDiv.innerHTML += "choice"+i+"_education2: "+return_education() + "<br><br>";
    document.getElementById("info1").appendChild(myDiv);
  };
};

function cleanMe(){
  document.getElementById("info1").innerHTML = "";
};
