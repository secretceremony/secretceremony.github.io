// string pertanyaan dan jawaban dalam array
const questions = [
    {
        question: "You wake up disoriented in your escape pod, alarms blaring. A holographic message from your captain appears. \"Attention crew! The flagship has been attacked by space pirates! Eject all escape pods! Rendezvous point: Beta Andromeda!\"",
        answers: [
            { text: "\"Space pirates?! I thought this was a peaceful exploration mission! Where's my laser pistol?\"", value: "a" },
            { text: "\"Oh no! This is a disaster! I need to contact someone... anyone! But what if I'm all alone?\"", value: "b" },
            { text: "\"Interesting! This is way more exciting than reading those dusty exploration logs. Let's see what adventures await!\"", value: "c" },
            { text: "\"Ugh, not another space mishap! Can't they just let me have a day off?\"", value: "d" },
        ]
    },
    {
        question: "You crash-land on a strange, abandoned space station. As you explore, you stumble upon a group of tiny, furry aliens huddled together.",
        answers: [
            { text: "Aawww, so cute! I gotta capture one for my research! Maybe they can help me fix my escape pod.", value: "a" },
            { text: "Don't worry little guys! I'm here to help! Are there any survivors? Do you need food or medical attention?", value: "b" },
            { text: "Hmm, these creatures could be valuable allies or bargaining chips. I'll need to learn more about their culture and capabilities.", value: "c" },
            { text: "Eww, stay away from me! Those things look creepy! I just need to find a way out of here as quickly as possible.", value: "d" },
        ]
    },
    {
        question: "Your party escape the gnomes and end up in a magical mushroom forest. As you harvest one, it suddenly screams, \"OUCH!\"",
        answers: [
            { text: "Whoa, that's beautiful! I gotta collect some of those crystals for scientific analysis... and maybe a souvenir or two.", value: "a" },
            { text: "This place is magical! I feel a strange energy emanating from those crystals. Are they some kind of alien artifact?", value: "b" },
            { text: "Perfect! I can use these crystals to upgrade my escape pod and increase its speed! Gotta reach the rendezvous point before anyone else.", value: "c" },
            { text: "Ugh, this is taking forever! Can't we just fly around this asteroid field? I need to relax and enjoy the view.", value: "d" },
        ]
    },
    {
        question: "You arrive at Beta Andromeda to find a bustling spaceport filled with all sorts of alien creatures. Bright lights, strange music, and exotic food fill the air.",
        answers: [
            { text: "Fascinating! I need to document everything! This is a goldmine of new information and cultural experiences!", value: "a" },
            { text: "Let's party! This is the perfect opportunity to unwind after all that stress. Time to try some alien food and dance the night away!", value: "b" },
            { text: "I need to find a reliable mechanic to fix my escape pod and stock up on supplies. Every credit counts on this journey.", value: "c" },
            { text: "I feel so overwhelmed! Too much noise, too many unfamiliar faces. I need to find a quiet corner to recharge and figure out my next move.", value: "d" },
        ]
    },
    {
        question: "You discover a hidden marketplace selling rare artifacts. A mysterious vendor catches your eye and offers you a unique item.",
        answers: [
            { text: "A portable black hole generator? That could be incredibly dangerous! But also incredibly useful... hmm, decisions, decisions.", value: "a" },
            { text: "An alien communication device! This could be the key to understanding these creatures and forging valuable alliances.", value: "b" },
            { text: "A holographic disguise kit? Now I can blend in with any alien race! This could be a game-changer.", value: "c" },
            { text: "A device that lets you project your dreams onto others? Sounds like trouble. I'll stick to my trusty laser pistol, thank you.", value: "d" },
        ]
    },
    {
        question: "You finally reach the rendezvous point and are greeted by your fellow crewmates. They inform you the pirates have been captured and the flagship is safe. Your captain approaches you with a special mission.",
        answers: [
            { text: "A secret mission to infiltrate the pirate headquarters and retrieve stolen artifacts? I'm in! This could be my chance to prove myself.", value: "a" },
            { text: "A diplomatic mission to negotiate with the pirates and establish peace? I'm your gal/guy! I can charm my way out of any situation", value: "b" },
            { text: "A scientific mission to study the pirate technology and learn from their tactics? Fascinating! I'm eager to expand my knowledge.", value: "c" },
            { text: "A mission to relax and enjoy the victory? I've had enough excitement for one day. Let's celebrate and take a break.", value: "d" },
        ]
    },
    {
        question: "You embark on your mission, successfully infiltrating the pirate headquarters. You stumble upon a hidden room filled with treasures and a mysterious device.",
        answers: [
            { text: "Wow! Look at all these riches! I could sell these and become a space billionaire! But I need to be careful not to raise suspicion.", value: "a" },
            { text: "This device looks powerful. Maybe I can use it to reverse-engineer pirate technology and give us an advantage.", value: "b" },
            { text: "I need to document this device and its surroundings. This could be a major archaeological discovery!", value: "c" },
            { text: "I feel uneasy in this place. Let's get out of here before we attract unwanted attention.", value: "d" },
        ]
    },
];


// array pertanyaan dimulai dari yang pertama (0)
let currentQuestionIndex = 0;
//mencari elemen 'quiz' pada html
const quizForm = document.getElementById('quizForm');

function startQuiz() {
    // saat button start diklik maka akan menu awal akan ditutup dan beralih ke quiz
    document.getElementById('startPage').classList.add('hidden');
    // bila button start diklik, maka main page akan dihidden, dan page quiz akan dibuka
    document.getElementById('quizPage').classList.remove('hidden');
    // menampilkan pertanyaan
    loadQuestion(currentQuestionIndex);
}

function startAbout() {
    //sama kayak di atas, tapi dia ngebuka page about
    document.getElementById('startPage').classList.add('hidden');
    document.getElementById('startAbout').classList.remove('hidden');
}

function loadQuestion(index) {
    //
     const quizForm = document.getElementById('quizForm');
            quizForm.innerHTML = ''; // Clear the form
            const question = questions[index];
            const questionDiv = document.createElement('div');
            // menampilkan pertanyaan dari const
            questionDiv.classList.add('question');
            questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;
            // menampilkan pertanyaan dalam benntuk input radio dan memberikan value di setiap opsi
            // menampilkan jawabanan dari text
            question.answers.forEach(answer => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="radio" name="q${index + 1}" value="${answer.value}"> ${answer.text}`;
                questionDiv.appendChild(label);
            });
            // The code is part of a loop that dynamically generates the answers-
            // for a quiz question and displays them on the web page.
            quizForm.appendChild(questionDiv);

            // Manage buttons visibility
            document.getElementById('nextButton').style.display = index === questions.length - 1 ? 'none' : 'inline';
            document.getElementById('resultButton').style.display = index === questions.length - 1 ? 'inline' : 'none';

             // Disable the Next button initially
            nextButton.disabled = true;

             // Add event listeners to enable the Next button when a radio button is selected
            const radioButtons = quizForm.querySelectorAll(`input[name="q${index + 1}"]`);
            radioButtons.forEach(radio => {
            radio.addEventListener('change', () => {
            nextButton.disabled = false;
        });
    });
        }

// untuk button next
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
}

function showResult() {
    const answers = questions.map((q, index) => {
        const selectedOption = quizForm.querySelector(`input[name="q${index + 1}"]:checked`);
        return selectedOption ? selectedOption.value : '';
    });

    //mendeklarasikan hasil value yang didapat user
    const counts = { a: 0, b: 0, c: 0, d: 0};
    answers.forEach(answer => {
        if (answer) counts[answer]++;
    });

    //menghitung hasil value yang didapat user secara keseluruhan
    let resultText, resultImage;
    const maxCount = Math.max(counts.a, counts.b, counts.c, counts.d);

    //menampilkan hasil output yang didapat
    if (counts.a === maxCount) {
        resultText = "You are a Commander!";
        resultImage = "images/1Commander.png"; 
    } else if (counts.b === maxCount) {
        resultText = "You are an Intellectual!";
        resultImage = "images/2Engineer.png"; 
    } else if (counts.c === maxCount) {
        resultText = "You are a Socializer!";
        resultImage = "images/3Pilot.png"; 
    } else if (counts.d === maxCount) {
        resultText = "You are a Challenger!";
        resultImage = "images/4Architect.png"; 
    }

    document.getElementById('quizPage').classList.add('hidden');
    document.getElementById('resultPage').classList.remove('hidden');
    document.getElementById('result').innerHTML = `<p>${resultText}</p><img src="${resultImage}" alt="${resultText}">`;
}

window.onload = () => {
    // Ensure only start page is visible on load
    document.getElementById('startPage').classList.remove('hidden');
    document.getElementById('quizPage').classList.add('hidden');
    document.getElementById('resultPage').classList.add('hidden');
};

window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  });