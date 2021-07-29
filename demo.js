import Breakpoints from './breakpoints.js';


let breakpoints = new Breakpoints();

let run = () => {
	document.getElementById('log').innerText = 'Current breakpoint: ' + breakpoints.get();
};

window.onload = run;
//window.onresize = run;