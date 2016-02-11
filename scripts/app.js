"use strict";

// setuo your IIFE (Immediately Invoked Function Expression)

(function () {

	console.log("App Started...");
	
	//declared a named function way
	function replaceFirstParagraph() {
		console.log("inside replaceFirstProject function");
		var firstParagraph;

		firstParagraph = document.getElementById("firstParagraph");
		firstParagraph.innerHTML = "My New Paragraph Data";
	}
	
	
	//declare an anonymous function with named alias
	//var replaceFirstParagraph = function(){
//		console.log("inside replaceFirstParagraph function");
//		var firstParagraph;
//
//		firstParagraph = document.getElementById("firstParagraph");
//		firstParagraph.innerHTML = "My New Paragraph Data";
//		};
	//call replace first paragraph function
	replaceFirstParagraph();



})();