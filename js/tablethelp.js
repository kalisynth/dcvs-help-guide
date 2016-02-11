var questionnumber = 0;

function Yes(){
	questionnumber = questionnumber + 1;
	switch(questionnumber){
		case 1:
		document.getElementById('QuestionArea').textContent = "Is the tablet phyiscally damaged?";
		document.getElementById('AnswerArea').textContent = " ";
		document.getElementById('answerimg1').src= " ";
		document.getElementById('answerimg2').src= " ";
		break;
		
		case 2:
		document.getElementById('AnswerArea').textContent = "Please contact the help desk with details of the damage";
		document.getElementById('answerimg1').src= " ";
		document.getElementById('answerimg2').src= " ";
		break;
	}
}

function No(){
	switch(questionnumber){
		case 1:
		document.getElementById('AnswerArea').textContent = "Please contact the help desk with details on what the issue is with the tablet"
		break;
	
		default:	
		document.getElementById('AnswerArea').textContent = "Plug into a charger and wait for a few minutes and then try to turn it on again, if it still does not turn on, please contact help desk";
	}
}

function Restart() {
	questionnumber = 0;
	document.getElementById('QuestionArea').textContent = "Can the Tablet be turned on?";
	document.getElementById('AnswerArea').textContent = " ";
	document.getElementById('answerimg1').src= " ";
	document.getElementById('answerimg2').src= " ";
	console.log(questionnumber);
}