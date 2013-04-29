var solutionFound = false;

$(document).ready(function () {
	$("#q").text("0");
});

$(document).click(function() {
	if (!solutionFound) {
		badAnswer();
	}
});

$(document).keyup(function(key) {
	if (!solutionFound) {
		if (key.which == 97 || key.which == 49) {
			$("#q").text("1");
			$("#info").text("YOU ARE THE BEST");
			$("#info").css("color", "green");		
			solutionFound = true;
			$("#info").fadeTo(0, 1);
		} else {
			badAnswer();
		}
	}
});

function badAnswer() {
	$("#info").text("ERROR");
			$("#info").css("color", "red");
			$("#info").delay(300).fadeOut(100, function () { 
				$("#info").fadeTo(0, 1);
				if (!solutionFound) {
					$("#info").text("");
				} else {
					$("#info").text("YOU ARE THE BEST");
				}
			});
}