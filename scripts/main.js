/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * PUT_YOUR_NAME_HERE
 */

/** namespace. */
var rhit = rhit || {};

rhit.resumePageController = class {
	constructor() {
		console.log("Created Resume Controller!");
		if(document.querySelector("#homeButton").onclick = (event) => {
			window.location.href = `index.html`;
		});
		if(document.querySelector("#portfolioButton").onclick = (event) => {
			window.location.href = `portfolio.html`;
		});
	}
}

rhit.PortfolioPageController = class {
	constructor() {
		console.log("Created Portfolio Controller!");
		if(document.querySelector("#homeButton").onclick = (event) => {
			window.location.href = `index.html`;
		});
		if(document.querySelector("#resumeButton").onclick = (event) => {
			window.location.href = `resume.html`;
		});
	}
}

rhit.main = function () {
	console.log("Ready");
	if(document.querySelector("#mainPage")) {
		console.log("On Main Page!");
		if(document.querySelector("#portfolioButton").onclick = (event) => {
			window.location.href = `portfolio.html`;
		});
		if(document.querySelector("#resumeButton").onclick = (event) => {
			window.location.href = `resume.html`;
		});
	}
	if(document.querySelector("#resumePage")) {
		console.log("On Resume Page!");
		new rhit.resumePageController();
	}
	if(document.querySelector("#portfolioPage")) {
		console.log("On Portfolio Page!");
		new rhit.PortfolioPageController();
	}
};

rhit.main();
