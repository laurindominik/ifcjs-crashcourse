import {projects} from './projects.js';
import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';


// Get the URL parameter
const currentUrl = window.location.href;




const url = new URL(currentUrl);
const currentProjectID = url.searchParams.get("id");

console.log(currentUrl);

const currentProject = projects.find(project => project.id === currentProjectID);

const iframe = document.getElementById('model1-iframe');
//console.log(currentProject.url);

iframe.src = currentProject.url;




const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("../../../");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}

loadIfc('./path/TimberStruc');