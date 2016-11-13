$(document).ready(function() {
	
    $('#submitbutton').click(function() {
		$("#thankyouemail").fadeIn("3000");
        $("#emailform").fadeOut("1000");

    });
	
	$('#contactbutton').click(function() {
		$("#thankyoucontact").fadeIn("3000");
        $("#contactform").fadeOut("1000");

    });
	
})
