import Breakpoints from "./src/index.js";

let breakpoints = new Breakpoints();

let run = () => {
	document.getElementById('log').innerText = 'Current breakpoint: ' + breakpoints.get();
	document.getElementById('lte').innerText = 'CURRENT BREAKPOINT <= x3 === ' + breakpoints.lte('x3');
	document.getElementById('gte').innerText = 'CURRENT BREAKPOINT >= lg === ' + breakpoints.gte('lg');
	document.getElementById('is').innerText = 'CURRENT BREAKPOINT === x3 === ' + breakpoints.is('x3');
};

window.onload = run;
window.onresize = run;
