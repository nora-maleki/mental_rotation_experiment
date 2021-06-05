// In this file you can specify the trial data for your experiment

var question = 'Are these objects the same object or different objects?';

const trial_info_practice = {
    key_press: [
        {
            question: question,
            picture: 'images/13_50_different.jpg',
            picture_number: 13,
            degree_of_rotation: 50,
            expected: 'different',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different'
        },
        {
            question: question,
            picture: 'images/13_50_same.jpg',
            picture_number: 13,
            expected: 'same',
            degree_of_rotation: 50,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different'
        },
        {
            question: question,
            picture: 'images/13_150_different.jpg',
            picture_number: 13,
            degree_of_rotation: 150,
            expected: 'different',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different'
        },
        {
            question: question,
            picture: 'images/13_150_same.jpg',
            picture_number: 13,
            degree_of_rotation: 150,
            expected: 'same',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different'
        },
        {
            question: question,
            picture: 'images/14_50_different.jpg',
            picture_number: 14,
            degree_of_rotation: 50,
            expected: 'different',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different'
        },
        {
            question: question,
            picture: 'images/14_50_same.jpg',
            picture_number: 14,
            degree_of_rotation: 50,
            expected: 'same',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different'
        },
        {
            question: question,
            picture: 'images/14_150_different.jpg',
            picture_number: 14,
            degree_of_rotation: 150,
            expected: 'different',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different'
        },
        {
            question: question,
            picture: 'images/14_150_same.jpg',
            picture_number: 14,
            degree_of_rotation: 150,
            expected: 'same',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different'
        },
        {
            question: question,
            picture: 'images/15_50_different.jpg',
            picture_number: 15,
            degree_of_rotation: 50,
            expected: 'different',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different'
        },
        {
            question: question,
            picture: 'images/15_50_same.jpg',
            picture_number: 15,
            degree_of_rotation: 50,
            expected: 'same',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different'
        },
        {
            question: question,
            picture: 'images/15_150_different.jpg',
            picture_number: 15,
            degree_of_rotation: 150,
            expected: 'different',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different'
        },
        {
            question: question,
            picture: 'images/15_150_same.jpg',
            picture_number: 15,
            degree_of_rotation: 150,
            expected: 'same',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different'
        }
    ]
};

// todo implement the rest of the stimuli for main trials
const trial_info = {
    key_press: [
        {
            question: "Are these the same object or different objects?",
            picture: 'images/1_50_different.jpg',
            picture_number: 1,
            degree_of_rotation: 50,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'different'
        },
        {
            question: "Are these the same object or different objects?",
            picture: 'images/1_50_same.jpg',
            picture_number: 1,
            degree_of_rotation: 50,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'same'
        },
        {
            question: "Are these the same object or different objects?",
            picture: 'images/1_150_different.jpg',
            picture_number: 1,
            degree_of_rotation: 150,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'different'
        },
        {
            question: "Are these the same object or different objects?",
            picture: 'images/1_150_same.jpg',
            picture_number: 1,
            degree_of_rotation: 150,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'same'
        },
        {
            question: "Are these the same object or different objects?",
            picture: 'images/2_50_different.jpg',
            picture_number: 2,
            degree_of_rotation: 50,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'different'
        }
    ]
};