var questionnumber = 0;

function Yes() { //go to the next question and clear the answer area
	questionnumber = questionnumber + 1;
	switch(questionnumber){
	
		case 1:
		document.getElementById('QuestionArea').textContent = "Have you tried restarting the Tablet?";
		document.getElementById('AnswerArea').textContent = " ";
		break;
		
		case 2:
		document.getElementById('QuestionArea').textContent = "Have you updated Skype recently?";
		document.getElementById('AnswerArea').textContent = " ";
		break;
		
		case 3: 
		document.getElementById('QuestionArea').textContent = "Have you uninstalled and reinstalled Skype?";
		document.getElementById('AnswerArea').textContent = " ";
		break;
		
		case 4:
		document.getElementById('QuestionArea').textContent = "has the problem been solved";
		document.getElementById('AnswerArea').textContent = " ";
		break;
		
		case 5:
		document.getElementById('AnswerArea').textContent = "Great, Have A Nice Day";
		break;
	}
	
}

function No() { //provide the answer for the question if answered no
	switch(questionnumber){
		case 0:
		document.getElementById('AnswerArea').textContent = "Please install the App by opening the app drawer by pressing the circle with the 6 dots on the bottom of the screen and find the Play store icon and press it, in the new window that pops up touch the word google with your finger then when the keyboard appears on the screen type in Skype and then press the magnifying class on the keyboard, and in the screen that pops up press the skype icon and then hit the install button";
		break;
		
		case 1:
		document.getElementById('AnswerArea').textContent = "Hold down the power button located on the edge of the tablet located to the top left of the word SAMSUNG it is the smaller of the two buttons, press that till a box appears on screen asking if you want to restart the device, then press restart which has a blue circle located next to it";
		break;
		
		case 2:
		document.getElementById('AnswerArea').textContent = "Open the Play store by clicking the circle icon with dots in the middle, and scroll through the icons and find the play store icon, touch that and in the new window that pops up press the 3 horizontal lines next to the word Google, then press my apps & games, and in the new window that appears scroll and find Skype press skypes icon and press the update icon"
		break;
		
		case 3:
		document.getElementById('AnswerArea').textContent = "Open the Apps drawer and find the skype icon, touch the icon and hold your finger there for a few seconds until you are presented with a blank screen then drag your finger across the screen to the top left to where it says Uninstall and lift your finger off the screen";
		break;
								
		default: document.getElementById('AnswerArea').textContent = "Please contact the Help Desk if you haven't already";
	}
	console.log(questionnumber);
	
}

function Restart() {
	questionnumber = 0;
	document.getElementById('QuestionArea').textContent = "Is Skype installed?";
	document.getElementById('AnswerArea').textContent = " ";
	console.log(questionnumber);
}