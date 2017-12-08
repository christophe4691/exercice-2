

$(".valider").click(function(){
	var first = $('#first_name').val();
	var last = $('#last_name').val();
	var city = $('#city').val();


console.log(first +" " + last + " "+ city);
$('#username').text(first +" " + last + " "+ city);

});