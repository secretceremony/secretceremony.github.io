const quizData = [
    {
        question: "What is the capital of France?",
        options: [
            { text: "Paris", value: "a" },
            { text: "London", value: "b" },
            { text: "Berlin", value: "c" },
            { text: "Madrid", value: "d" }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        options: [
            { text: "Earth", value: "a" },
            { text: "Jupiter", value: "b" },
            { text: "Mars", value: "c" },
            { text: "Saturn", value: "d" }
        ]
    }
];

let currentQuestionIndex = 0;

function generateQuiz(quizData) {
    const questionsContainer = document.getElementById('questions-container');
    const template = document.getElementById('question-template');

    quizData.forEach((item, index) => {
        const questionClone = template.cloneNode(true);
        questionClone.style.display = 'none';
        questionClone.id = `question-${index + 1}`;

        const questionText = questionClone.querySelector('.question-text');
        questionText.textContent = `${index + 1}. ${item.question}`;

        const options = questionClone.querySelectorAll('.option');
        options.forEach((option, optionIndex) => {
            option.querySelector('input').name = `q${index + 1}`;
            option.querySelector('input').value = item.options[optionIndex].value;
            option.querySelector('.option-text').textContent = item.options[optionIndex].text;
        });

        questionsContainer.appendChild(questionClone);
    });
}

function showQuestion(index) {
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, i) => {
        question.style.display = i === index ? 'block' : 'none';
    });

    document.getElementById('prev-button').style.display = index === 0 ? 'none' : 'inline-block';
    document.getElementById('next-button').style.display = index === questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('submit-button').style.display = index === questions.length - 1 ? 'inline-block' : 'none';
}

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const answers = Object.fromEntries(formData);
    console.log('User answers:', answers);
    alert('Quiz submitted! Check the console for user answers.');
});

document.getElementById('next-button').addEventListener('click', function() {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
});

document.getElementById('prev-button').addEventListener('click', function() {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
});

generateQuiz(quizData);
showQuestion(currentQuestionIndex);
