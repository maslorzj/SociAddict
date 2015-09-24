// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function(){
	// disable auto discover
	Dropzone.autoDiscover = false;

	// grap our upload form by its id
	$("#new_upload").dropzone({
		// changed the passed param to one accepted by
		// our rails app
		paramName: "upload[image]",
		// show remove links on each image upload
		addRemoveLinks: true
	});	
});