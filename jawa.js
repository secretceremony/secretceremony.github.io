const questions = [
    {
        question: "1.) You're taking the bus on your way back home. It's been a loooong day, what are you thinking about?",
        answers: {
            F: {
                text: "I'm just so tired and can't wait to go home. Why does everyday feel the same...",
                scores: { T: 0, F: +1 },
            },
            T: {
                text: "Should I rest or work first when I get home? Most importantly, what's for dinner?",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "2.) You look outside the windows, seems like it's going to rain soon. Suddenly everything turns into darkness!!",
        answers: {
            J: {
                text: "I don't remember this tunnel. *Pull out your phone to look at the map*",
                scores: { P: 0, J: +1 },
            },
            P: {
                text: "*Turn around to see the other's reaction* Should I ask the driver what's going on?",
                scores: { P: +1, J: 0 },
            },
        },
    },
    {
        question: "3.): Before you can do anything, the bus stops and everything around you floats up!",
        answers: {
            S: {
                text: "Ok this is weird, am I dreaming? *pinch your arm*",
                scores: { S: +1, N: 0 },
            },
            N: {
                text: "Is this a prank? Am I getting kidnapped by aliens?!",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "4.): Amidst the surprise, your eyes catch something drifting past the window.",
        answers: {
            F: {
                text: "Woahhh...so many cats! How cute!! I wanna give them a hug!",
                scores: { T: 0, F: +1 },
            },
            T: {
                text: "Cats? In space? That's kinda odd... How do they survive out there?!",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "5.): 'Welcome Aboard!' a small robot appears and announces, 'We will reach our destination in 5 months 6 days and 2 hours!'",
        answers: {
            P: {
                text: "Cool! A space cruise?! Where are we going? Do I get a spacesuit? This is so exciting!",
                scores: { P: +1, J: 0 },
            },
            J: {
                text: "Hey uh...Am I in space? How did I get here? When can I go home?! Why..",
                scores: { P: 0, J: +1 },
            },
        },
    },
    {
        question: "6.): The robot just points to the back of the bus which now looks more like inside of a spaceship! What do you want to see first?",
        answers: {
            I: {
                text: "Solar system themed fountain in the middle. I want to take pictures with it.",
                scores: { I: 0, E: +1 },
            },
            E: {
                text: "Cozy corner with a massaging chair. I need to sit down and process.",
                scores: { I: +1, E: 0 },
            },
        },
    },
    {
        question: "7.) On the way back to your seat, you are surrounded by cats! 'Unauthorized passenger detected, CAPTURE CAPTURE!'",
        answers: {
            S: {
                text: "Woah! What do you mean unauthorized? I'm the passenger of this cruise!",
                scores: { S: +1, N: 0 }
            },
            N: {
                text: "Ok, I have no idea what's going on. How about we calm down and chat for a bit?",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "8.) Suddenly, the robot glides in, it whispers something to the cats that makes them stop.",
        answers: {
            E: {
                text: "Bob!! Thank you! You come to save me, right?",
                scores: { E: +1, I: 0 },
            },
            I: {
                text: "HA! That's right! Back off, cats! Am I safe to go now?!",
                scores: { E: 0, I: +1 },
            },
        },
    },
    {
        question: "9.) The robot transforms into a giant vacuum cleaner, the cats use it to point at you!",
        answers: {
            J: {
                text: "Throw your coat at them as distraction, run towards the big green 'EXIT' sign!",
                scores: { J: +1, P: 0 },
            },
            P: {
                text: "Run in random direction, confuse them, blend in with the crowd!",
                scores: { J: 0, P: +1 },
            },
        },
    },
    {
        question: "10.) You run past the gift shop. Looks like you got rid of them. It wouldn't hurt to get some souvenirs, right?",
        answers: {
            F: {
                text: "Get the Jupiter headphone, wear it to hear people's thoughts!",
                scores: { F: +1, T: 0 },
            },
            T: {
                text: "Get the Mars watch, turn it and you can time travel!",
                scores: { F: 0, T: +1 },
            },
        },

    },
    {
        question: "11.) The giant vacuum cleaner suddenly emerges in front of you! You're sucked into its vortex!!!",
        answers: {
            S: {
                text: "It's ok, this is just a dream! I'll wake up soon! *close your eyes and give up*",
                scores: { S: +1, N: 0 },
            },
            N: {
                text: "I'll find the way out! Maybe there are some secret doors! *look around for the way out*",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "12.) After a moment of darkness, you find yourself back in the bus. 'Are you alright?' the ticket inspector asks",
        answers: {
            I: {
                text: "Woah! I thought I was captured... Nevermind! I'm alright now, I guess? *panic in silence*",
                scores: { E: 0, I: +1 },
            },
            E: {
                text: "You won't believe it...I think I just had the wildest dream ever! *tell him about your space adventure*",
                scores: { E: +1, I: 0 },
            },
        },
    },
    {
        question: "When you look up again, the inspector's already gone. You glance outside the window, darkness creeps in as the bus enters another tunnel...",
        answers: {
            K: {
                text: "Wait...was that Bob?",
            },
            U: {
                text: "Oh no...Do I have to go through this again?",
            },
        },
    },
];

const selesaiOptions = {
    "ISTJ": {
        image: "1DE.png",
    },
    "ISFJ": {
        image: "2light.png"
    },
    "INFJ": {
        image: "3UFO.png"
    },
    "INTJ": {
        image: "4nebula.png"
    },
    "ISTP": {
        image: "5comet.png"
    },
    "ISFP": {
        image: "6ST.png"
    },
    "INFP": {
        image: "7DM.png"
    },
    "INTP": {
        image: "8met.png"
    },
    "ESTP": {
        image: "9BH.png"
    },
    "ESFP": {
        image: "10Sn.png"
    },
    "ENFP": {
        image: "11Grav.png"
    },
    "ENTP": {
        image: "12hand.png"
    },
    "ESTJ": {
        image: "13sat.png"
    },
    "ESFJ": {
        image: "14sun.png"
    },
    "ENFJ": {
        image: "15gal.png"
    },
    "ENTJ": {
        image: "16rocket.png"
    },

};

let currentQuestion = 0;
// let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<h1>${question.question}</h1>`;
        for (const option in question.answers) {
            html += `<button class="btn-rounded-big" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start').addEventListener('click', function() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('mulai').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.btn-rounded');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...


function showResult() {
    const selesaiElement = document.getElementById('selesai');
    const selesaiTextContainer = document.querySelector('.selesai-text');
    const selesaiImage = document.getElementById('selesai-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    //each pair
    const selesai = pairs.map(pair => topLetters[pair]).join('');

    //show selesai
    const personalityData = selesaiOptions[selesai];
    if (personalityData) {
        selesaiTextContainer.innerHTML = `
        `;

        selesaiImage.src = "images/"+personalityData.image;
        selesaiImage.alt = `${personalityData.image} Image`;
    } else {

    }

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('selesai').style.display = 'block'; // Show the selesai
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}


//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('selesai').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();