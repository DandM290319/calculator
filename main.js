let elementMenu = document.querySelectorAll(".elementMenu");
let div = document.querySelector(".div");
let box = document.querySelectorAll(".box");
let number = document.querySelectorAll(".number");
let number1 = document.querySelector(".number1");
let number2 = document.querySelector(".number2");
let sign = document.querySelector(".sign");
let stats = document.querySelector(".stats");
let back = document.querySelectorAll(".back");
let backTask = document.querySelector(".backTask");
let task = document.querySelector(".task");
task.style.display = "none";
let answer = document.querySelector(".answer");

let score = document.querySelector(".score");
score.style.display = "none";

let rightAnswer = document.querySelector(".rightAnswer");
rightAnswer.style.display = "none";
let rightAnswerScore = document.querySelector(".rightAnswerScore");

let secondsScore = document.querySelector(".secondsScore");
let milliSecondsScore = document.querySelector(".milliSecondsScore");

let seconds = 0;
let milliSeconds = 0;

let result = 0;

box[0].style.display = "none";


elementMenu[0].onclick = function(){
	div.style.display = "none";
	box[0].style.display = "block";
	seconds = 0;
	milliSeconds = 0;
	result = 0;
	for(let i=0; i<4; i++){
		number[i].onclick = function(){
		box[0].style.display = "none";
		task.style.display = "block";
		if(i == 0){
			seconds = 0;
			milliSeconds = 0;
			result = 0;
			digit1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			number1.innerHTML = digit1;
			sign.innerHTML = " + ";
			digit2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			number2.innerHTML = digit2
			result = digit1 + digit2;
			rightAnswerScore.innerHTML = result;
		}

		if(i == 1){
			seconds = 0;
			milliSeconds = 0;
			result = 0;
			digit1 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
			number1.innerHTML = digit1;
			sign.innerHTML = " + ";
			digit2 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
			number2.innerHTML = digit2
			result = digit1 + digit2;
			rightAnswerScore.innerHTML = result;
		}

		if(i == 2){
			seconds = 0;
			milliSeconds = 0;
			result = 0;
			digit1 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
			number1.innerHTML = digit1;
			sign.innerHTML = " + ";
			digit2 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
			number2.innerHTML = digit2
			result = digit1 + digit2;
			rightAnswerScore.innerHTML = result;
		}

		if(i == 3){
			seconds = 0;
			milliSeconds = 0;
			result = 0;
			digit1 = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
			number1.innerHTML = digit1;
			sign.innerHTML = " + ";
			digit2 = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
			number2.innerHTML = digit2
			result = digit1 + digit2;
			rightAnswerScore.innerHTML = result;
		}

		function sec(){
			seconds = seconds + 1;
			milliSeconds = milliSeconds - 1;
		}
		let secondScore = setInterval(sec, 1000);

		function milliSec(){
			milliSeconds = milliSeconds + 1;
		}
		let milliSecScore = setInterval(milliSec, 1);

		answer.onclick = function(){
			clearInterval(secondScore);
			clearInterval(milliSecScore);

			answer.style.display = "none";
			rightAnswer.style.display = "block";
			score.style.display = "block";

			secondsScore.innerHTML = seconds;
			milliSecondsScore.innerHTML = milliSeconds;
		}
		backTask.onclick = function(){
			task.style.display = "none";
			box[0].style.display = "block";
			score.style.display = "none";
			answer.style.display = "block";
			rightAnswer.style.display = "none";
			seconds = 0;
			milliSeconds = 0;
			result = 0;
		}
	}
	}
	back[0].onclick = function(){
		box[0].style.display = "none";
		div.style.display = "block";		
	}
}



elementMenu[1].onclick = function(){
	div.style.display = "none";
	box[0].style.display = "block";
	seconds = 0;
	milliSeconds = 0;
	result = 0;
	for(let i=0; i<4; i++){
		number[i].onclick = function(){
		box[0].style.display = "none";
		task.style.display = "block";
		if(i == 0){
			seconds = 0;
			milliSeconds = 0;
			result = 0;
			digit1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			number1.innerHTML = digit1;
			sign.innerHTML = " - ";
			digit2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			number2.innerHTML = digit2
			result = digit1 - digit2;
			rightAnswerScore.innerHTML = result;
		}

		if(i == 1){
			seconds = 0;
			milliSeconds = 0;
			result = 0;
			digit1 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
			number1.innerHTML = digit1;
			sign.innerHTML = " - ";
			digit2 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
			number2.innerHTML = digit2
			result = digit1 - digit2;
			rightAnswerScore.innerHTML = result;
		}

		if(i == 2){
			seconds = 0;
			milliSeconds = 0;
			result = 0;
			digit1 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
			number1.innerHTML = digit1;
			sign.innerHTML = " - ";
			digit2 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
			number2.innerHTML = digit2
			result = digit1 - digit2;
			rightAnswerScore.innerHTML = result;
		}

		if(i == 3){
			seconds = 0;
			milliSeconds = 0;
			result = 0;
			digit1 = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
			number1.innerHTML = digit1;
			sign.innerHTML = " - ";
			digit2 = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
			number2.innerHTML = digit2
			result = digit1 - digit2;
			rightAnswerScore.innerHTML = result;
		}

		function sec(){
			seconds = seconds + 1;
			milliSeconds = milliSeconds - 1;
		}
		let secondScore = setInterval(sec, 1000);

		function milliSec(){
			milliSeconds = milliSeconds + 1;
		}
		let milliSecScore = setInterval(milliSec, 1);

		answer.onclick = function(){
			clearInterval(secondScore);
			clearInterval(milliSecScore);

			answer.style.display = "none";
			rightAnswer.style.display = "block";
			score.style.display = "block";

			secondsScore.innerHTML = seconds;
			milliSecondsScore.innerHTML = milliSeconds;
		}
		backTask.onclick = function(){
			task.style.display = "none";
			box[0].style.display = "block";
			score.style.display = "none";
			answer.style.display = "block";
			rightAnswer.style.display = "none";
			seconds = 0;
			milliSeconds = 0;
			result = 0;
		}
	}
	}
	back[0].onclick = function(){
		box[0].style.display = "none";
		div.style.display = "block";		
	}
}



elementMenu[2].onclick = function(){
	div.style.display = "none";
	box[0].style.display = "block";
	seconds = 0;
	milliSeconds = 0;
	result = 0;
	for(let i=0; i<4; i++){
		number[i].onclick = function(){
		box[0].style.display = "none";
		task.style.display = "block";
		if(i == 0){
			seconds = 0;
			milliSeconds = 0;
			result = 0;
			digit1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			number1.innerHTML = digit1;
			sign.innerHTML = " * ";
			digit2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			number2.innerHTML = digit2
			result = digit1 * digit2;
			rightAnswerScore.innerHTML = result;
		}

		if(i == 1){
			seconds = 0;
			milliSeconds = 0;
			result = 0;
			digit1 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
			number1.innerHTML = digit1;
			sign.innerHTML = " * ";
			digit2 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
			number2.innerHTML = digit2
			result = digit1 * digit2;
			rightAnswerScore.innerHTML = result;
		}

		if(i == 2){
			seconds = 0;
			milliSeconds = 0;
			result = 0;
			digit1 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
			number1.innerHTML = digit1;
			sign.innerHTML = " * ";
			digit2 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
			number2.innerHTML = digit2
			result = digit1 * digit2;
			rightAnswerScore.innerHTML = result;
		}

		if(i == 3){
			seconds = 0;
			milliSeconds = 0;
			result = 0;
			digit1 = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
			number1.innerHTML = digit1;
			sign.innerHTML = " * ";
			digit2 = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
			number2.innerHTML = digit2
			result = digit1 * digit2;
			rightAnswerScore.innerHTML = result;
		}

		function sec(){
			seconds = seconds + 1;
			milliSeconds = milliSeconds - 1;
		}
		let secondScore = setInterval(sec, 1000);

		function milliSec(){
			milliSeconds = milliSeconds + 1;
		}
		let milliSecScore = setInterval(milliSec, 1);

		answer.onclick = function(){
			clearInterval(secondScore);
			clearInterval(milliSecScore);

			answer.style.display = "none";
			rightAnswer.style.display = "block";
			score.style.display = "block";

			secondsScore.innerHTML = seconds;
			milliSecondsScore.innerHTML = milliSeconds;
		}
		backTask.onclick = function(){
			task.style.display = "none";
			box[0].style.display = "block";
			score.style.display = "none";
			answer.style.display = "block";
			rightAnswer.style.display = "none";
			seconds = 0;
			milliSeconds = 0;
			result = 0;
		}
	}
	}
	back[0].onclick = function(){
		box[0].style.display = "none";
		div.style.display = "block";		
	}
}



elementMenu[3].onclick = function(){
	div.style.display = "none";
	box[0].style.display = "block";
	seconds = 0;
	milliSeconds = 0;
	result = 0;
	for(let i=0; i<4; i++){
		number[i].onclick = function(){
		box[0].style.display = "none";
		task.style.display = "block";
		if(i == 0){
			seconds = 0;
			milliSeconds = 0;
			result = 0;
			digit1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			number1.innerHTML = digit1;
			sign.innerHTML = " : ";
			digit2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			number2.innerHTML = digit2
			result = digit1 / digit2
			rightAnswerScore.innerHTML = result;
		}

		if(i == 1){
			seconds = 0;
			milliSeconds = 0;
			result = 0;
			digit1 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
			number1.innerHTML = digit1;
			sign.innerHTML = " : ";
			digit2 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
			number2.innerHTML = digit2
			result = digit1 / digit2;
			rightAnswerScore.innerHTML = result;
		}

		if(i == 2){
			seconds = 0;
			milliSeconds = 0;
			result = 0;
			digit1 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
			number1.innerHTML = digit1;
			sign.innerHTML = " : ";
			digit2 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
			number2.innerHTML = digit2
			result = digit1 / digit2;
			rightAnswerScore.innerHTML = result;
		}

		if(i == 3){
			seconds = 0;
			milliSeconds = 0;
			result = 0;
			digit1 = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
			number1.innerHTML = digit1;
			sign.innerHTML = " : ";
			digit2 = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
			number2.innerHTML = digit2
			result = digit1 / digit2;
			rightAnswerScore.innerHTML = result;
		}

		function sec(){
			seconds = seconds + 1;
			milliSeconds = milliSeconds - 1;
		}
		let secondScore = setInterval(sec, 1000);

		function milliSec(){
			milliSeconds = milliSeconds + 1;
		}
		let milliSecScore = setInterval(milliSec, 1);

		answer.onclick = function(){
			clearInterval(secondScore);
			clearInterval(milliSecScore);

			answer.style.display = "none";
			rightAnswer.style.display = "block";
			score.style.display = "block";

			secondsScore.innerHTML = seconds;
			milliSecondsScore.innerHTML = milliSeconds;
		}
		backTask.onclick = function(){
			task.style.display = "none";
			box[0].style.display = "block";
			score.style.display = "none";
			answer.style.display = "block";
			rightAnswer.style.display = "none";
			seconds = 0;
			milliSeconds = 0;
			result = 0;
		}
	}
	}
	back[0].onclick = function(){
		box[0].style.display = "none";
		div.style.display = "block";		
	}
}







