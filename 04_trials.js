// In this file you can specify the trial data for your experiment


/*const trial_info = {
    forced_choice: [
        {
            question: "What's on the bread?",
            picture: "images/question_mark_02.png",
            option1: 'jam',
            option2: 'ham',
            correct: 'jam'
        },
        {
            question: "What's the weather like?",
            picture: "images/weather.jpg",
            option1: "shiny",
            option2: "rainbow",
            correct: "shiny"
        }
    ]
};*/

const trial_info = {
    key_press: [
        {
            question: "Are these the same object or different objects?",
            picture: 'images/1_50_different.jpg',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'different'
        },
        {
            question: "Are these the same object or different objects?",
            picture: 'images/1_50_same.jpg',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'same'
        }
    ]
};