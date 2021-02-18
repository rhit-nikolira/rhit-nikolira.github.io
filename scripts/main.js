/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * PUT_YOUR_NAME_HERE
 */

/** namespace. */
var rhit = rhit || {};

rhit.main = function () {
	console.log("Ready");
	if(document.querySelector("#mainPage")) {
		console.log("On Main Page!");
		if(document.querySelector("#portfolioButton").onclick = (event) => {
			console.log("clicked portfolio");
			// window.location.href = `portfolio.html`;
		});
		if(document.querySelector("#resumeButton").onclick = (event) => {
			console.log("clicked resume");
			// window.location.href = `resume.html`;
		});
	}
	if(document.querySelector("resumePage")) {
		console.log("On Resume Page!");
		if(document.querySelector("#homeButton").onclick = (event) => {
			console.log("clicked home");
		});
		if(document.querySelector("#portfolioButton").onclick = (event) => {
			console.log("clicked portfolio");
		});
	}
	if(document.querySelector("portfolioPage")) {
		console.log("On Portfolio Page!");
		if(document.querySelector("#homeButton").onclick = (event) => {
			console.log("clicked home");
		});
		if(document.querySelector("#resumeButton").onclick = (event) => {
			console.log("clicked resume");
		});
	}
};

rhit.main();
