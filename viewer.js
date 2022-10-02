import {projects} from './projects.js';



// Get the URL parameter
const currentUrl = window.location.href;




const url = new URL(currentUrl);
const currentProjectID = url.searchParams.get("id");

console.log(currentUrl);

const currentProject = projects.find(project => project.id === currentProjectID);

const iframe = document.getElementById('model1-iframe');
//console.log(currentProject.url);

iframe.src = currentProject.url;