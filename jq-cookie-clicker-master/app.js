$(document).ready(function(){
	var clicks = 0;
$(".cake-is-a-lie").click(function(){


clicks += 1;
$ (".counter").html(clicks);
var text = " you are a winner";
var text1 = "vas trouvé un taf";

if (clicks%20 == 0) {

	alert (text1);
}

// if (clicks ==20) {
// 	alert (text);
// }
// else if (clicks >=25) {
// 	alert (text1);
// }



});
});