const dynamicContent = document.getElementById("dynamic-text");

const phases = ["Developer", "Backend", "Software", "NodeJs"];

let phaseIndex = 0;
let letterIndex = 0;
const typingSpeed = 200;
const eraseSpeed = 100;

function printLetters(phase) {
	if (letterIndex == phase.length) {
		clearLetter();
	} else if (letterIndex < phase.length) {
		dynamicContent.textContent += phase.charAt(letterIndex);
		letterIndex += 1;
		setTimeout(function () {
			printLetters(phase);
		}, typingSpeed);
	}
}

function clearLetter() {
	if (letterIndex == -1) {
		phaseIndex = (phaseIndex + 1) % phases.length;
		letterIndex = 0;
		printLetters(phases[phaseIndex]);
	} else if (letterIndex > -1) {
		let updatedPhase = "";
		for (let index = 0; index < letterIndex; index++) {
			updatedPhase += phases[phaseIndex].charAt(index);
		}
		dynamicContent.textContent = updatedPhase;
		letterIndex -= 1;
		setTimeout(clearLetter, eraseSpeed);
	}
}

printLetters(phases[phaseIndex]);
