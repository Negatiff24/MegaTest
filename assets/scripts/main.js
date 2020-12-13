// const globalStateList = {
// 	OPENING: 'OPENING',
// 	IN_PROGRESS: 'IN_PROGRESS',
// 	RESULT: 'RESULT'
// }

// let globalState = globalStateList.OPENING;
let currentQuestion = 0;
let testScore = 0;

function onStartButtonClick() {
	document.getElementById('js-question').classList.remove('-hidden');
	document.getElementById('js-hello').classList.add('-hidden');

	initQuestions();
}

function initQuestions() {
	document.getElementById('js-totalQuestionCount').innerText = questions.length;
	setNextQuestionData();
}

function setNextQuestionData() {
	document.getElementById('js-questionText').innerText = questions[currentQuestion].questionText;
	document.getElementById('js-questionNumber').innerText = currentQuestion + 1;
	document.getElementById('js-questionAnswers').innerHTML = prepareAnswersMarkdown(questions[currentQuestion].answers);
}

function prepareAnswersMarkdown(answers) {
	let result = '';

	answers.forEach(answer => {
		result += '<li><button class="questions__answer" onclick="onAnswerChoose(' + answer.value + ')">' + answer.answerText + '</button></li>';
	})

	return result;
}

function onAnswerChoose(chosenValue) {
	testScore += chosenValue;
	currentQuestion++;

	if (currentQuestion < questions.length) {
		setNextQuestionData();
	} else {
		showTestResults();
	}
	
}

function showTestResults() {
	document.getElementById('js-question').classList.add('-hidden');
	document.getElementById('js-result').classList.remove('-hidden');

	let resultKey = '';

	if (testScore < 1) {
		resultKey = 'lazy';
	} else if (testScore < 7) {
		resultKey = 'hero';
	} else if (testScore < 13) {
		resultKey = 'antihero';
	} else if (testScore < 19) {
		resultKey = 'noone';
	}

	document.getElementById('js-resultTitle').innerText = resultData[resultKey].title;
	document.getElementById('js-resultDescription').innerText = resultData[resultKey].desc;
	document.getElementById('js-resultImage').src = resultData[resultKey].image;

	document.getElementById('js-resultShare').innerHTML = VK.Share.button(
			{
				url: 'https://github.com/Negatiff24', 
				title: 'Омагадэбл! Да я же ' + resultData[resultKey].title + '! А кто ты? Не ряльно, ты кто?',
				image: resultData[resultKey].image,
				noparse: true
				// да работай блэт
			},
			{
				type: 'round_nocount',
				text: 'Поставь на свою станицу чёрную метку'
			}
		)
}

function getResultNameByScore(score) {
	return ''
}

function restartTest() {
	document.getElementById('js-result').classList.add('-hidden');
	document.getElementById('js-question').classList.remove('-hidden');
	currentQuestion = 0;
	initQuestions();
	testScore = 0;
}