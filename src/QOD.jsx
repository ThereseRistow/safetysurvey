// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [ {
                type: "radiogroup",
                name: "question1",
                title: "What is the safest way to deal with a forgetful client who didn't pack their parachute properly?",
                choices: [
                    "Politely remind them to double-check their equipment.", "Offer them a lollipop distraction and secretly pack it for them.", "Ignore it; they'll probably remember on the way down.", "Use your own parachute as a backup."
                ],
                correctAnswer: "Politely remind them to double-check their equipment."
            }
            ,
            {
                type: "radiogroup",
                name: "question2",
                title: "What's the most critical thing to remember when skydiving during a thunderstorm?",
                choices: [
                    "Avoid skydiving altogether during a thunderstorm.", "Bring along a lightning rod just in case.", "um the theme from 'Thunderstruck' by AC/DC for luck.", "Wear rubber shoes to prevent static electricity."
                ],
                correctAnswer: "Avoid skydiving altogether during a thunderstorm."
            }
            ,
            {
                type: "radiogroup",
                name: "question3",
                title: "How should you handle a client who insists on bringing their pet penguin along for the jump?",
                choices: [
                    "Politely inform them that penguins aren't certified for tandem skydiving.", "Encourage them to enroll their penguin in skydiving lessons.", "Offer to attach a tiny parachute to the penguin as a compromise.", " Suggest they watch 'Happy Feet' instead."
                ],
                correctAnswer: "Politely inform them that penguins aren't certified for tandem skydiving."
            }
            ,
            {
                type: "radiogroup",
                name: "question4",
                title: "What's the best attire for a skydiving instructor during a heatwave?",
                choices: [
                    "Lightweight, breathable clothing with sunscreen.", "A penguin costume for comedic effect.", "Full snow gear to stay cool.", "A superhero costume for added flair."
                ],
                correctAnswer: "Lightweight, breathable clothing with sunscreen."
            }
            ,
            {
                type: "radiogroup",
                name: "question5",
                title: "How do you handle a nervous client who's reluctant to jump out of the plane?",
                choices: [
                    "Offer them a free-fall yoga session to calm their nerves.", "Give them a piggyback ride out of the plane.", "Politely remind them that the only way down is through.", "Bribe them with a lifetime supply of cotton candy."
                ],
                correctAnswer: "Politely remind them that the only way down is through."
            }
            ,
            {
                type: "radiogroup",
                name: "question6",
                title: "What's the most effective way to prevent mid-air collisions during a group jump?",
                choices: [
                    "Use hand signals and designated flight paths.", "Play 'follow the leader' with one instructor leading the way.", "Shout 'Incoming!' and hope for the best.", "Equip everyone with their own air traffic controller."
                ],
                correctAnswer: "Use hand signals and designated flight paths."
            }
            ,
                        {
                type: "radiogroup",
                name: "question7",
                title: "How should you respond if a seagull mistakes your parachute for its new nest?",
                choices: [
                    "Gently shoo it away and continue with the jump.", "Offer it a tiny parachute and hope for the best.", "Declare yourself the chosen one and ride the seagull to safety.", "Recruit the seagull as your new co-instructor"
                ],
                correctAnswer: "Gently shoo it away and continue with the jump."
            }
            ,
            {
                type: "radiogroup",
                name: "question8",
                title: "What's the first thing you should check before boarding the plane for a skydiving session?",
                choices: [
                    "Your parachute and safety harness.", "The snack selection on board.", "Your horoscope for any signs of trouble.", "Your pulse to ensure you're still alive."
                ],
                correctAnswer: "Your parachute and safety harness."
            }
            ,
            {
                type: "radiogroup",
                name: "question9",
                title: "How should you handle a parachute malfunction mid-jump?",
                choices: [
                    "Deploy the reserve parachute and follow emergency procedures.", "Attempt to fix it with duct tape and good intentions.", "Perform an impromptu interpretive dance to distract yourself.", "Use the malfunctioning parachute as a makeshift hammock."
                ],
                correctAnswer: "Deploy the reserve parachute and follow emergency procedures."
            }
            ,
            {
                type: "radiogroup",
                name: "question10",
                title: "What's the best way to celebrate a successful skydiving session with your clients?",
                choices: [
                    "High-fives and group hugs.", "Skydiving-themed karaoke party.", "Impromptu interpretive dance-off.", "Launching a confetti cannon from mid-air."
                ],
                correctAnswer: "High-fives and group hugs."
            }
    ]
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Skydiving Instructor Saftey",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Skydiving Instructor Saftey. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}
