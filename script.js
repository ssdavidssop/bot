var botTab = document.createElement("a");
var dropdown = document.querySelector("#top-bar-profile-user > div.dropdown");
var logOut = document.querySelector("#top-bar-profile-user > div.dropdown > div")
dropdown.insertBefore(botTab, logOut);
botTab.className = "dropdown-entry profile";
botTab.innerHTML = "Giveaway Bot";
botTab.onclick = function() { botPage() };
cg = 0;
botRunning = false;
var logContent = "";
wlcMessage = false;
var userid = localStorage.getItem('arena-user-id');
var usertoken = localStorage.getItem('arena-user-token');
var language = localStorage.getItem('arena-language');
var lang;
var canStart = false;

var profUsername = document.querySelector("#top-bar-profile-username").textContent;
console.log("%c" + "CSGOArena Bot - Made by David", "color: red; font-weight: bold; font-size: 32px;");
console.log("%c" + "(©) All right reserved by the developer", "color: red; font-weight: bold; font-size: 16px;");
console.log("%c" + "Welcome " + profUsername + ", use the bot at your own risk!" , "color: red; font-weight: bold;");
var xhr = new XMLHttpRequest();
var soundAlertStart = new Audio("https://soundbible.com/mp3/sms-alert-3-daniel_simon.mp3")
var soundAlertEnd = new Audio("https://soundbible.com/mp3/sms-alert-2-daniel_simon.mp3")
var soundAlertWin = new Audio("https://soundbible.com/mp3/Ta Da-SoundBible.com-1884170640.mp3")
var soundAlertFailed = new Audio("https://soundbible.com/mp3/sms-alert-1-daniel_simon.mp3")
var soundAlertNotification = new Audio("https://soundbible.com/mp3/Electronic_Chime-KevanGC-495939803.mp3")
var giveawayTitle = document.querySelector("#chat-giveaway-title");
var coins = document.querySelector("#top-bar-profile-points");
var win = false;
var wins = 0;
var losts = 0;
var winDecimal;
var winPercentage;
var rounds;
var canWrite = false;
var status;
var shutdownCode;
var data;
var usedNumbers = [];
var chat = document.querySelector("#chat-messages")
var msg;
var a;
var c;
var intervalRunning = false;
var phraseNumber;
var phrase;
var seconds = 0;
var minutes;
var isSchedule = false;
var date = new Date();
var sHour;
var sMinute;
var sSecond;
var currentHour;
var currentMinute;
var currentSecond;

var phrase1 = "gg";
var phrase2 = "gg";
var phrase3 = "haha ez";
var phrase4 = ""
var phrase5 = ""
var phrase6 = ""
var phrase7 = ""
var phrase8 = ""
var phrase9 = ""
var phrase10 = ""
var phrase11 = ""
var phrase12 = ""
var phrase13 = ""
var phrase14 = ""
var phrase15 = ""
var phrase16 = ""
var phrase17 = ""
var phrase18 = ""
var phrase19 = ""
var phrase20 = "gg"
var phrase21 = "ez"
var phrase22 = ""

function randomPhrase() {
	phraseNumber = Math.floor((Math.random() * 22) + 1);

	if(phraseNumber == "1") {
		phrase = phrase1;
	}
	if(phraseNumber == "2") {
		phrase = phrase2;
	}
	if(phraseNumber == "3") {
		phrase = phrase3;
	}
	if(phraseNumber == "4") {
		phrase = phrase4;
	}
	if(phraseNumber == "5") {
		phrase = phrase5;
	}
	if(phraseNumber == "6") {
		phrase = phrase6;
	}
	if(phraseNumber == "7") {
		phrase = phrase7;
	}
	if(phraseNumber == "8") {
		phrase = phrase8;
	}
	if(phraseNumber == "9") {
		phrase = phrase9;
	}
	if(phraseNumber == "10") {
		phrase = phrase10;
	}
	if(phraseNumber == "11") {
		phrase = phrase11;
	}
	if(phraseNumber == "12") {
		phrase = phrase12;
	}
	if(phraseNumber == "13") {
		phrase = phrase13;
	}
	if(phraseNumber == "14") {
		phrase = phrase14;
	}
	if(phraseNumber == "15") {
		phrase = phrase15;
	}
	if(phraseNumber == "16") {
		phrase = phrase16;
	}
	if(phraseNumber == "17") {
		phrase = phrase17;
	}
	if(phraseNumber == "18") {
		phrase = phrase18;
	}
	if(phraseNumber == "19") {
		phrase = phrase19;
	}
	if(phraseNumber == "20") {
		phrase = phrase20;
	}
	if(phraseNumber == "21") {
		phrase = phrase21;
	}
	if(phraseNumber == "22") {
		phrase = phrase22;
	}
}

if(language == "EN") {
	lang = "Win";
} else {
	lang = "Vinn"
}

status = giveawayTitle.textContent.includes(lang);
 
function settings(formData, code) {
    data = formData;
	if(code == "") {
		shutdownCode = null;
	} else {
    	shutdownCode = code;
	}
}
 
function checkIfWon() {
    if (win) {
		wins++;
        console.log("You won!")
		saveLog("You won the giveaway")
        soundAlertWin.play();
		winInterval = setInterval(function(){ winMessage(); }, 10000)
    } else {
		losts++;
	}
}

function schedule(setHour, setMinute, setSecond) {
	isSchedule = true;
	sHour = setHour;
	sMinute = setMinute;
	sSecond = setSecond;
}

function help() {
	console.log("-- Help & Commands --")
	console.log("Check how long the script has been running - help()")
	console.log("Check your winrate - winRate()")
	console.log("Note: CSGOArena must be set to Swedish in order to work")
}

function scriptDate() {
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	if (h < 10) {
		h = "0" + h;
	}
	if (m < 10) {
		m = "0" + m;
	}
	if (s < 10) {
		s = "0" + s;
	}
}

function updateLog() {
	txtA = document.querySelector("#tTextArea")
	if (typeof txtA === 'undefined' || txtA === null) {
	} else {
	txtA.innerHTML = logContent;
	}
}

function clearLogs() {
	logContent = "";
	saveLog("Welcome to Insanik's CSGOArena Bot");
}

function saveLog(message) {
	txtA = document.querySelector("#tTextArea")
	scriptDate()
	if (typeof txtA === 'undefined' || txtA === null) {
	logContent += '[' + h + ':' + m + ':' + s + '] ' + message + "&#13;&#10;";
	} else {
	logContent += '[' + h + ':' + m + ':' + s + '] ' + message + "&#13;&#10;";
	updateLog();
	}
}

function winRate() {
	console.log("-- Win Rate --");
	rounds = wins + losts;
	console.log("Wins: " + wins)
	console.log("Losts: " + losts)
	winDecimal = wins / rounds;
	winPercentage = winDecimal * 100;
	winPercentage = parseFloat(winPercentage).toFixed(2);
	console.log("Win Rate: " + winPercentage + "%");
}

function winMessage() {
	canWrite = true;
	randomPhrase()
	write(phrase)
	canWrite = false;
	clearInterval(winInterval)
}
 
function write(message) {
    if(canWrite) {
        xhr.open("POST", "https://api.csgoarena.com/chat/send_message", true);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                var status = xhr.status;
 
                if ((status >= 200 && status < 300) || status === 304) {
                    console.log("Sending message: " + message);
                } else {
                    console.log("Failed to send message: " + message)
					soundAlertFailed.play();
                }
            }
        }
        xhr.send(data + message)
    }
}
 
function clearUsedNumbers() {
    if (usedNumbers.length >= 1) {
        for (var i = usedNumbers.length; i > 0; i--) {
            usedNumbers.pop();
        }
    }
}
 
function printMsg() {
    msg = chat.childNodes[20].childNodes[2].textContent;
	sender = chat.childNodes[20].childNodes[1].textContent;
    if (status == "true") {
        a = parseInt(msg);
        c = isNaN(a);
        if (!c) {
            if (usedNumbers.includes(a)) {} else {
                console.log(a)
                usedNumbers.push(a);
				cg++;
				updateNumbers();
            }
        }
    }
	if(shutdownCode != null) {
    	if (msg.includes(shutdownCode)) {
        	location.reload();
    	}
	}
	if (msg.includes(profUsername)) {
		saveLog(sender + ": " + msg)
        soundAlertNotification.play()
    }
}
 
chat.addEventListener("DOMNodeInserted", printMsg);
 
function coinWin(){
    win = true;
}
 
coins.addEventListener("DOMSubtreeModified", coinWin);
 
function startChecker() {
    console.log("Starting Script...")
	startTimer();
    checkTimer = setInterval(function() {
        checker();
    }, 1000)
}

function startTimer() {
	setInterval(function(){
		seconds++;
		if(isSchedule) {
			currentHour = date.getHours();
			currentMinute = date.getMinutes();
			currentSeconds = date.getSeconds();
			if (currentHour == sHour && currentMinute == sMinute && currentSecond == sSecond) {
				location.reload();
			}
		}			
	}, 1000) 
}

function uptime() {
	console.log("-- Uptime --")
	minutes = seconds / 60;
	minutes = parseFloat(minutes).toFixed(2);
	console.log("Script has been running for " + minutes + " minutes.")
}
 
function checker() {
    status = giveawayTitle.textContent.includes(lang);
    if (status == "true" && !intervalRunning) {
		saveLog("Giveaway has started");
        soundAlertStart.play();
        console.log("Giveaway started!");
        win = false;
        canWrite = true;
        intervalRunning = true;
        executeTimer = setInterval(function() {
            execution();
        }, 3100)
    } else if (status == "false" && intervalRunning) {
        if(win) {
            soundAlertWin.play();
        } else {
        soundAlertEnd.play();
        }
        console.log("Giveaway finished...")
		saveLog("Giveaway finished")
        canWrite = false;
        intervalRunning = false;
        clearInterval(executeTimer);
        clearUsedNumbers();
        checkIfWon();
		setTimeout(function() { cg = 0; updateNumbers();}, 2000);
    } else if (status == "false" && !intervalRunning) {
        console.log("Giveaway not started yet...")
    }
}
 
function execution() {
    var number = Math.floor(Math.random() * 500) + 1;
 
    while (usedNumbers.includes(number)) {
        number = Math.floor(Math.random() * 500) + 1;
    }
    usedNumbers.push(number);
 
    write(number);
    console.log("%c" + "Possible number: " + number, "background: #222; color: #bada55");
}
 


function botPage() {
document.querySelector("#content").innerHTML = '<div class="box-header primary-color center">Status &amp; Information</div><div class="box-content"><div class="input-group"><div class="input-label-group"><label class="input-label">Script version</label><div class="input-descr">Current version of the script</div></div><div class="input-form-group"><div class="input-form selectable">Beta</div></div></div><div class="input-group"><div class="input-label-group"><label class="input-label">Chatbot status</label><div class="input-descr">Status of the chatbot</div></div><div class="input-form-group"><div class="input-form selectable">Inactive</div></div></div><div class="input-group"><div class="input-label-group"><label class="input-label">Possible numbers</label><div class="input-descr">Possible nunbers left on the giveaway</div></div><div class="input-form-group"><div class="input-form selectable" id="numLeft">0/500</div></div></div><div class="input-group"><div class="input-label-group"><label class="input-label">Script logs</label><div class="input-descr">Logs of functions and events</div></div></div><div class="input-group"><div class="input-group"><textarea readonly="" id="tTextArea" class="input-form selectable"></textarea></div><div class="center"><div class="button button-gradient" onclick="clearLogs()">Clear Logs</div></div></div></div><br><div class="box-header primary-color center">Control Panel</div><div class="box-content"><div class="input-group"><div class="input-label-group"><label class="input-label">Message data</label><div class="input-descr">POST Request for chatting</div></div><div class="input-form-group"><input type="text" id="msgData" class="input-form" maxlength="254" placeholder="Insert message data"></div></div><div class="input-group"><div class="input-label-group"><label class="input-label">Shutdown Code</label><div class="input-descr">Enter in chat shutdown code to terminate script</div></div><div class="input-form-group"><input type="text" id="shtCode" class="input-form" maxlength="254" placeholder="Insert shutdown code"></div></div><div class="input-group"><div class="input-label-group"><label class="input-label">Update settings</label><div class="input-descr">Upload your settings to the script</div></div><div class="input-form-group"><div class="button button-gradient" onclick="updateSettings()">Update settings</div></div></div><div class="input-group"><div class="input-label-group"><label class="input-label" id="startLabel">Start Bot</label><div class="input-descr" id="startDesc">Activation of bot</div></div><div class="input-form-group"><div class="button button-gradient" id="startBot">Start Bot</div></div></div></div><br><div id="footer"><div id="footer-left">CSGOArena</div><div id="footer-center"><div id="footer-links"><a class="footer-link" href="/withdraw">Marknad</a><span class="footer-link-separator">•</span><a class="footer-link" href="/about">Om oss</a><span class="footer-link-separator">•</span><a class="footer-link" href="/terms">Användarvillkor</a><span class="footer-link-separator">•</span><a class="footer-link" href="/questions_partners">Frågor/Partners</a><span class="footer-link-separator">•</span><a class="footer-link" href="/provably_fair">Bevisligen Rättvis</a></div><div id="footer-copyright"><!-- react-text: 818 -->Copyright © CSGOArena.com<!-- /react-text --><br><!-- react-text: 820 -->CSGO™ is a registered trademark of Valve Corporation ®. This site is not associated with or endorsed by Valve Corporation ®<!-- /react-text --></div></div><div id="footer-right"><div id="footer-guarantee"></div><div id="footer-analyst"></div></div></div>'

document.querySelector("#msgData").value = "user_id=" + userid + "&token=" + usertoken + "&message=";
textArea = document.querySelector("#tTextArea");
tChatBotStatus = document.querySelector("#content > div:nth-child(2) > div:nth-child(2) > div.input-form-group > div");

function logIt(message) {
	scriptDate()
	logContent += '[' + h + ':' + m + ':' + s + '] ' + message + "&#13;&#10;";
	updateLog();
}

updateLog();

if (!wlcMessage) {
logIt("Welcome to Insanik's CSGOArena Bot");
wlcMessage = true;
}

checkName();

function deactivateButton() {
	document.querySelector("#startBot").innerHTML = "Stop Bot";
	document.querySelector("#startLabel").innerHTML = "Stop Bot";
	document.querySelector("#startDesc").innerHTML = "Deactivation of bot";
	document.querySelector("#msgData").setAttribute("disabled", "")
	document.querySelector("#shtCode").setAttribute("disabled", "")
}

function activateButton() {
	document.querySelector("#startBot").innerHTML = "Start Bot";
	document.querySelector("#startLabel").innerHTML = "Start Bot";
	document.querySelector("#startDesc").innerHTML = "Activation of bot";
	document.querySelector("#msgData").removeAttribute("disabled")
	document.querySelector("#shtCode").removeAttribute("disabled")
}

if(botRunning) {
	tChatBotStatus.innerHTML = "Active";
	deactivateButton()
} else {
	tChatBotStatus.innerHTML = "Inactive";
	activateButton()
}

document.querySelector("#startBot").onclick = function() {
	if(canStart) {
		if(!botRunning) {
			scriptDate()
			logIt('Bot has started')
			tChatBotStatus.innerHTML = "Active";
			startChecker();
			botRunning = true;
			deactivateButton()
		} else if(botRunning) {
			scriptDate()
			logIt('Bot has stopped')
			tChatBotStatus.innerHTML = "Inactive";
			clearInterval(checkTimer);
			canWrite = false;
			botRunning = false;
			activateButton()
		}
	} else {
	saveLog("Unable to start bot")
	}
}
}

function updateNumbers() {
	numLeft = document.querySelector("#numLeft")
	if (typeof numLeft === 'undefined' || numLeft === null) {
	} else {
	numLeft.innerHTML = cg + "/500"
	}
}

function checkName() {
	var checkUsername = profUsername.toUpperCase();
	if(checkUsername.includes("CSGOARENA.COM")) {
	} else {
		saveLog("NOTE: You must have CSGOArena.com in your name to participate in giveaways")
	}
}

function updateSettings() {
	messageData = document.querySelector("#msgData").value;
	shutCode = document.querySelector("#shtCode").value;
	if(messageData == ""){
		saveLog("Message data can not be empty")
		canStart = false;
	} else {
		canStart = true;
		settings(messageData, shutCode);
		saveLog("Settings is now updated")
	}
}
