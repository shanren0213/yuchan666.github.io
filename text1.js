function changeFunction (argument) {
	document.getElementById("demo").innerHTML="你与此佳丽无缘";

}
function p_alert (argument) {
	// body...
	alert("你只能看上她！");
}
function changeImage (argument) {
		document.getElementById("box").src="QQ图片20151029124826.jpg";
		// document.getElementById("box").src="text1.jpg";
}
function changeBackground (argument) {
	// body...
	//五秒后运行
	movement = setTimeout("positionDemo()",5000);
}
function positionDemo (argument) {
	var elem = document.getElementById("demo");
	elem.style.position ="absolute";
	elem.style.left = "50px";
	elem.style.top ="100px";

}

var d=new Date()
var time=d.getHours()
if (time<10) {
	document.write("<b>早安</b>")
} else{
	document.write("<b>祝你愉快</b>")
};
document.write(Date());
