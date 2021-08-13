import Breakpoints from './breakpoints.js';


let breakpoints = new Breakpoints();

let run = () => {
	document.getElementById('log').innerText = 'Current breakpoint: ' + breakpoints.get();
	document.getElementById('lte').innerText = 'x3 <= ' + breakpoints.lte('x3');
	document.getElementById('gte').innerText = 'x3 >= ' + breakpoints.gte('x3');
	document.getElementById('is').innerText = 'x3 === ' + breakpoints.is('x3');
};

window.onload = run;
window.onresize = run;