import {projects} from './projects.js';


const project1 = projects[0];
const project2 = projects[1];
const project3 = projects[2];
const project4 = projects[3];
const project5 = projects[4]; 

const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");


const buttonTitle1 = button1.querySelector('h4');
const buttonTitle2 = button2.querySelector('h4');
const buttonTitle3 = button3.querySelector('h4');
const buttonTitle4 = button4.querySelector('h4');
const buttonTitle5 = button5.querySelector('h4');

buttonTitle1.textContent = project1.name;
buttonTitle2.textContent = project2.name;
buttonTitle3.textContent = project3.name;
buttonTitle4.textContent = project4.name;
buttonTitle5.textContent = project5.name;


// Add project url to project
const buttonOne = button1.querySelector('a');
const buttonTwo = button2.querySelector('a');
const buttonThree = button3.querySelector('a');
const buttonFour = button4.querySelector('a');
const buttonFive = button5.querySelector('a');


console.log(buttonOne.href);

const baseURL = './viewer.html';

const url1 = baseURL + `?id=${project1.id}`;
const url2 = baseURL + `?id=${project2.id}`;
const url3 = baseURL + `?id=${project3.id}`;
const url4 = baseURL + `?id=${project4.id}`;
const url5 = baseURL + `?id=${project5.id}`;

console.log(url2);


buttonOne.href = url1;
buttonTwo.href = url2;
buttonThree.href = url3;
buttonFour.href = url4;
buttonFive.href = url5;

console.log(button3.href);