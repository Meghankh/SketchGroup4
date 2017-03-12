var prevButton = "_0";
var prevprev = "_0";
var score = 0;
$(".button").on("click", function(e) {
	//console.log(this.id);
	//what happens on click
	changeStatus(this.id)
});

function changeStatus(buttonID){
	var currBotton = buttonID;
	if (score < 8) { //score less than 8
		if (currBotton==="_1") {
			if (prevButton==="_2") {
				score = score + 2;
			}
			else {
				score = score + 1;
			}
			
		}
		else if (currBotton==="_2") {
			score = score + 2;
		}
		else if (currBotton==="_3") {
			if (prevButton==="_2" && prevprev==="_1") {
				score = score + 3;
			}
			else {
				score = score + 2;
			}
		}
		else if (currBotton==="_4") {
			score = score - 1;
		}
		else if (currBotton==="_5") {
			if (prevButton==="_1"){
				score = score - 1;
			}
			else {
				score = score - 2;
			}
		}
		else if (currBotton==="_6") {
			if (prevButton ==="_5" && prevprev==="_4") {
				score = 0;
			}
			else {
				score = score - 2;
			}	
		}
	}
	else { //score between 8 & 10
		if (currBotton==="_2" && prevButton==="_1") {
			score = score + 1;	
		}
		else if ("currBotton"==="_3") {
			if (prevButton==="_1" || prevButton==="_2") {
				score = score + 2;
			}
		}
	}

	prevprev = prevButton;
	prevButton = currBotton;
}