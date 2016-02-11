var questionnumber = 0;
var video = document.getElementById('answervid');
var source = document.createElement('source');

function Yes() { //go to the next question and clear the answer area
	switch(questionnumber){	
		case 0:
		document.getElementById('QuestionArea').textContent = "Have you tried restarting the Tablet?";
		document.getElementById('AnswerArea').textContent = " ";
		document.getElementById('HowtoArea').textContent = " ";
		document.getElementById('answerimg1').src= " ";
		document.getElementById('answerimg2').src= " ";
		document.getElementById('answerimg3').src= " ";
		questionnumber = questionnumber + 1;	
		break;
	
		case 1:
		document.getElementById('QuestionArea').textContent = "At the top of the screen does it say 3G or 4G";
		document.getElementById('AnswerArea').textContent = " ";
		document.getElementById('HowtoArea').textContent = " ";
		document.getElementById('answerimg1').src= " ";
		document.getElementById('answerimg2').src= " ";
		document.getElementById('answerimg3').src= " ";
		questionnumber = questionnumber + 1;	
		break;
		
		case 2:
		document.getElementById('QuestionArea').textContent = "Is the Mobile Data icon green?";
		document.getElementById('AnswerArea').textContent = " ";
		document.getElementById('HowtoArea').textContent = " ";
		document.getElementById('answerimg1').src= " ";
		document.getElementById('answerimg2').src= " ";
		document.getElementById('answerimg3').src= " ";
		questionnumber = questionnumber + 1;	
		break;
		
		case 3:
		document.getElementById('QuestionArea').textContent = "is the SIM card in the SIM CARD slot?";
		document.getElementById('AnswerArea').textContent = " ";
		document.getElementById('HowtoArea').textContent = " ";
		document.getElementById('answerimg1').src= " ";
		document.getElementById('answerimg2').src= " ";
		document.getElementById('answerimg3').src= " ";
		questionnumber = questionnumber + 1;	
		break;
		
		case 4:
		document.getElementById('QuestionArea').textContent = "have you gone over your Data Limit?";
		document.getElementById('AnswerArea').textContent = " ";
		document.getElementById('HowtoArea').textContent = " ";
		document.getElementById('answerimg1').src= " ";
		document.getElementById('answerimg2').src= " ";
		document.getElementById('answerimg3').src= " ";
		questionnumber = questionnumber + 1;
		break;
		
		case 5:
		document.getElementById('AnswerArea').textContent = "Contact the Help desk if you haven't already";
		document.getElementById('HowtoArea').textContent = " ";
		document.getElementById('answerimg1').src= " ";
		document.getElementById('answerimg2').src= " ";
		document.getElementById('answerimg3').src= " ";
		break;
		
		case 6:
		document.getElementById('QuestionArea').textContent = "Has anything in the area changed lately";
		document.getElementById('HowtoArea').textContent = " ";
		document.getElementById('answerimg1').src= " ";
		document.getElementById('answerimg2').src= " ";
		document.getElementById('answerimg3').src= " ";
		questionnumber = questionnumber + 1;
		break;
		
		case 7:
		document.getElementById('AnswerArea').textContent = "Try moving to a new area";
		break;
		
		case 8:
		document.getElementById('AnswerArea').textContent = "Your connection might be to weak to use skype";
		break;
		
		case 9:
		document.getElementById('AnswerArea').textContent = "Please try to access google on that device";
		break;
		
		case 10: //to add more questions put the new question above this one and change that to the number that this one is and increase this number by 1
		document.getElementById('QuestionArea').textContent = "is the problem fixed?";
		document.getElementById('AnswerArea').textContent = " ";
		document.getElementById('HowtoArea').textContent = " ";
		document.getElementById('answerimg1').src= " ";
		document.getElementById('answerimg2').src= " ";
		questionnumber = questionnumber + 1;	
		break;
		
		case 11:
		document.getElementById('AnswerArea').textContent = "Great, Have A Nice Day!";	
		break;	
	}
	console.log(questionnumber);
}

function No() {
	switch(questionnumber){
		case 1:
		document.getElementById('AnswerArea').textContent = "Restart the Tablet";
		break;
		
		case 2:
		document.getElementById('AnswerArea').textContent = "Move to a new area and see if 3G or 4G appears";
		break;
		
		case 3:
		document.getElementById('AnswerArea').textContent = "Please press the icon so it turns green";
		break;
		
		case 4:
		document.getElementById('AnswerArea').textContent = "Put the Sim Card back in the slot, if you don't have the SIM card contact help desk if you haven't already";
		break;
		
		case 5:
		document.getElementById('QuestionArea').textContent = "Previously, have you been able to access skype from the spot where you are before?";
		document.getElementById('AnswerArea').textContent = " ";
		document.getElementById('HowtoArea').textContent = " ";
		document.getElementById('answerimg1').src= " ";
		document.getElementById('answerimg2').src= " ";
		document.getElementById('answerimg3').src= " ";
		questionnumber = questionnumber + 1;
		break;
		
		case 6:
		document.getElementById('AnswerArea').textContent = "Try moving to a spot where you were able to access skype from previosuly";
		break;
		
		case 7:
		document.getElementById('QuestionArea').textContent = "Are you able to access google?";
		document.getElementById('AnswerArea').textContent = " ";
		document.getElementById('HowtoArea').textContent = " ";
		document.getElementById('answerimg1').src= " ";
		document.getElementById('answerimg2').src= " ";
		document.getElementById('answerimg3').src= " ";
		questionnumber = questionnumber + 1;
		break;
		
		case 8:
		document.getElementById('QuestionArea').textContent = "Do you have another device that can access the internet?";
		document.getElementById('AnswerArea').textContent = " ";
		document.getElementById('HowtoArea').textContent = " ";
		document.getElementById('answerimg1').src= " ";
		document.getElementById('answerimg2').src= " ";
		document.getElementById('answerimg3').src= " ";
		questionnumber = questionnumber + 1;
		break;
		
		case 9:
		document.getElementById('QuestionArea').textContent = "Could the weather be interfering with the connection?";
		document.getElementById('AnswerArea').textContent = " ";
		document.getElementById('HowtoArea').textContent = " ";
		document.getElementById('answerimg1').src= " ";
		document.getElementById('answerimg2').src= " ";
		document.getElementById('answerimg3').src= " ";
		questionnumber = questionnumber + 1;
		break;
					
		case 10://to add more questions put the new question above this one and change that to the number that this one is and increase this number by 1 and dont forget to add break to the end of the statement
		document.getElementById('AnswerArea').textContent = "Please Contact the Help Desk if you haven't already";
		break;
						
		default:
		document.getElementById('AnswerArea').textContent = "Turn the Tablet On";
	}
	console.log(questionnumber);
}

function How() { //provide the how to instructions for the question if asked
	switch(questionnumber){
		case 1:
		document.getElementById('HowtoArea').textContent = "Hold down the power button located on the edge of the tablet located to the top left of the word SAMSUNG it is the smaller of the two buttons, press that till a box appears on screen asking if you want to restart the device, then press restart which has a blue circle located next to it";
		document.getElementById('answerimg1').src= "pwrbtnloc.jpg";
		document.getElementById('answerimg2').src= "rstbtnloc.jpg";
		break;
		
		case 2:
		document.getElementById('HowtoArea').textContent = "Look at the top right of the screen next/near to the clock";
		document.getElementById('answerimg1').src= "3gor4gbroken.jpg";
		break;
		
		case 3:
		document.getElementById('HowtoArea').textContent = "With the tablet unlocked open the DCVS app located on the main screen, press your finger at the top of the screen below where it says SAMSUNG and drag your finger down so that it opens the tray, and lift your finger off the screen and now where there are a row of buttons you should see the Mobile Data icon";
		document.getElementById('answerimg1').src= "notifyp1.png";
		document.getElementById('answerimg2').src= "notifyp2.png";
		document.getElementById('answerimg3').src= "mobdata.png";
		// video showing how to open mobile data goes here
		break;
		
		case 4:
		document.getElementById('HowtoArea').textContent = "The SIM card slot is located on the right side of the table below the charging cable slot/socket";
		document.getElementById('answerimg1').src= "simslot1.jpg";
		document.getElementById('answerimg2').src= "simslot2.jpg";
		// image showing location of SIM CARD
		break;
		
		case 5:
		document.getElementById('HowtoArea').textContent = "With the tablet unlocked, press your finger on the bar at the top of the screen under the word SAMSUNG and drag your finger down pulling open the notification tray and once it is fully out let go of the screen and is there a notice saying that you have gone over the limit?";
		document.getElementById('answerimg1').src= "notifyp1.png";
		document.getElementById('answerimg2').src= "notifyp2.png";
		document.getElementById('answerimg3').src= "datalimit.png";
		//get contact details for help desk
		break;
		
		case 6:
		document.getElementById('HowtoArea').textContent = "if possible move closer to a window, try the middle of a room or even try going outside";
		break;
		
		case 7:
		document.getElementById('HowtoArea').textContent = "if possible move closer to a window, try the middle of a room or even try going outside";
		break;
		
		case 8:
		document.getElementById('HowtoArea').textContent = "open up a browser/ the internet and go to google.com";
		break;		

		default:
		document.getElementById('HowtoArea').textContent = "Please press the power button on the edge of the tablet located to the top left of the word SAMSUNG it is the smaller of the two buttons";
		document.getElementById('answerimg1').src= "pwrbtnloc.jpg";
	}
}

function Restart() {
	questionnumber = 0;
	document.getElementById('QuestionArea').textContent = "Is the Tablet turned on?";
	document.getElementById('AnswerArea').textContent = " ";
	document.getElementById('HowtoArea').textContent = " ";
	document.getElementById('answerimg1').src= "internetbroke.jpg";
	document.getElementById('answerimg2').src= " ";
	document.getElementById('answerimg3').src= " ";
	console.log(questionnumber);
}