const inquierer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

// Created an array of questions for the user input
const questions = [
    {
        type: 'input',
        name: 'logoName',
        message: 'Please enter your logo name(up to three characters): ',
    },
    {
        type: 'input',
        name: 'logoColor',
        message: 'Please enter your logo color: ',
    },
    {
        type: 'input',
        name: 'logoShape',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter your shape color: ',
    }
];

// Created a function to write SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Generated logo.svg file!');
    });

}

// Created a function to initialize the app
function init() {
    inquierer.prompt(questions)
        .then((data) => {
            writeToFile('logo.svg', shapes(data));
        });

}

// Function call to initialize app
init();