var prevButton = "_0";
var prevprev = "_0";
var happiness = 0;
var totalScore = 0;

var array1 = ["_1", "_2", "_3", "_4","_5", "_6"];
var array2 = ["_4", "_5", "_6", "_3","_2", "_1"];
var array3 = ["_1", "_4", "_3", "_6","_2", "_5"];
var array4 = ["_6", "_5", "_4", "_3","_2", "_1"];

var currArray = array1;

$(".button").on("click", function(e) {
	//console.log(this.id);
	//what happens on click
	changeStatus(this.id)
});

function changeStatus(buttonID){
	var currBotton = buttonID;
	if (happiness >= 10) {
		happiness = 0;
		if (totalScore < 10) {
			totalScore = 10
			currArray = array2;
		}
		else if (totalScore == 10) {
			totalScore = 20;
			currArray = array2;
		}
		else if (totalScore == 20) {
			totalScore = 30;
			currArray = array3;
		}
		else if (totalScore == 30) {
			totalScore = 40;
			//win game!!!
		}

	}
	if (happiness < 8) { //happiness less than 8
		if (currBotton===currArray[0]) {
			if (prevButton===currArray[1]) {
				happiness = happiness + 2;
			}
			else {
				happiness = happiness + 1;
			}
			
		}
		else if (currBotton===currArray[1]) {
			happiness = happiness + 2;
		}
		else if (currBotton===currArray[2]) {
			if (prevButton===currArray[1] && prevprev===currArray[0]) {
				happiness = happiness + 3;
			}
			else {
				happiness = happiness + 2;
			}
		}
		else if (currBotton===currArray[3]) {
			happiness = happiness - 1;
		}
		else if (currBotton===currArray[4]) {
			if (prevButton===currArray[0]){
				happiness = happiness - 1;
			}
			else {
				happiness = happiness - 2;
			}
		}
		else if (currBotton===currArray[5]) {
			if (prevButton ===currArray[4] && prevprev===currArray[3]) {
				happiness = 0;
			}
			else {
				happiness = happiness - 2;
			}	
		}
	}
	else { //happiness between 8 & 10
		if (currBotton===currArray[1] && prevButton===currArray[0]) {
			happiness = happiness + 1;	
		}
		else if ("currBotton"===currArray[2]) {
			if (prevButton===currArray[0] || prevButton===currArray[1]) {
				happiness = happiness + 2;
			}
		}
	}

	prevprev = prevButton;
	prevButton = currBotton;
}
