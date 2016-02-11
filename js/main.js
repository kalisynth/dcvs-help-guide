var yescount = 0;
var nocount = 0;

function Yes() {
	yescount = yescount + 1;
	nocount = nocount + 1;
	switch(yescount){
		case 1:
		document.getElementById('QuestionArea').textContent = "Have you tried restarting the Tablet?";
		document.getElementById('AnswerArea').textContent = " ";
		break;
	
		case 2:
		document.getElementById('QuestionArea').textContent = "At the top of the screen does it say 3G or 4G";
		document.getElementById('AnswerArea').textContent = " ";
		break;
		
		case 3:
		document.getElementById('QuestionArea').textContent = "With the device on and unlocked, Pull down the notification panel by touching the top of the screen and drag your finger down, Do you see the Mobile Data icon if not touch where the icons are and drag to the left till you see the icon, is it green?";
		document.getElementById('AnswerArea').textContent = " ";
		break;
		
		case 4:
		document.getElementById('QuestionArea').textContent = "is the problem fixed?";
		document.getElementById('AnswerArea').textContent = " ";
	}
}

function No() {
	switch(nocount){
		case 1:
		document.getElementById('AnswerArea').textContent = "Hold down the power button located on the side of the device till a box appears on screen asking if you want to restart the device, then press restart";
		break;
		case 2:
		document.getElementById('AnswerArea').textContent = "Please try moving to a different spot if possible and look again at the top bar does it now say 3G or 4G";
		break;
		case 3:
		document.getElementById('AnswerArea').textContent = "Please press the icon so it turns green";
		break;
		
		
		case 4:
		document.getElementById('AnswerArea').textContent = "Please Contact the Help Desk if you havent already";
		break;
		default:document.getElementById('AnswerArea').textContent = "Please press the power button on the side of the tablet";
	}
}

function Restart() {
	yescount = 0;
	nocount = 0;
	document.getElementById('QuestionArea').textContent = "Is the Tablet turned on?";
	document.getElementById('AnswerArea').textContent = " ";
	console.log(yescount);
}