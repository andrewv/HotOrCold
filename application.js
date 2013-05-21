$(document).ready(function() {
	

	var num = Math.floor(Math.random()*101);
	var difference = 0
	var previousDifference = 0
	var run = 1
	
	
	$('#submit').on('click',function(){ 
		var guess = ($('#numberbox').val()); //Gets the guess from the input field
		if (guess > 100) {
			alert('Please enter a number between 1 and 100')
			return;
		}
		var difference = Math.abs(guess-num);
		console.log("Previous Difference "+previousDifference + "New difference " + difference + "Guess" + guess + "num" + num);
		if (run === 1) {
			console.log("first")
			if (guess === num) {
				var HTMLInsert = "<p>" + guess + " - Correct on your FIRST guess! Wow!</p>";
				$(HTMLInsert).insertAfter('h2');
			}
			else {
			var HTMLInsert = "<p>" + guess + " - Your first guess!</p>";
			$(HTMLInsert).insertAfter('h2');
			}
		}
		else {
			if (guess = num) {
			$('#canvas-main').find('h3').text("GOT IT!");
			var HTMLInsert = "<p>" + guess + "GOT IT!!</p>";
				$(HTMLInsert).insertAfter('h2');
				document.getElementById('bg').style.background = "url('party.jpg')";
				return;
		}
		if (previousDifference > difference) {
			
			console.log("Hotter!");
			$('#canvas-main').find('h3').text("Getting Hotter");
			document.getElementById('bg').style.background = '-webkit-radial-gradient(50% 50%, ellipse, #A00000, #D00000)';
			var HTMLInsert = "<p>" + guess + " - Hotter!</p>";
			console.log(HTMLInsert);
			$(HTMLInsert).insertAfter('h2');

		}
		if (previousDifference < difference) {
			console.log("Colder!");
			$('#canvas-main').find('h3').text("Getting Colder");
			document.getElementById('bg').style.background = '-webkit-radial-gradient(50% 50%, ellipse, #000066, #0000CC)';
			$('<p>colder</p>').insertAfter('h2');
		}
	
		}
		previousDifference = difference;
		run = run + 1;

	});

		
		
});