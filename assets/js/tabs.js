
$(document).ready(function(){
	
$("#verify").click(function(){
	$("#certifydiv").addClass("hidden");
	$("#verifydiv").removeClass("hidden");
});

$("#certify").click(function(){
	$("#verifydiv").addClass("hidden");
	$("#certifydiv").removeClass("hidden");
});
})