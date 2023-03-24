var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
btn1.onclick=function(){
	btn2.removeAttribute("class");
	btn3.removeAttribute("class");
	btn4.removeAttribute("class");
	btn5.removeAttribute("class");
	btn6.removeAttribute("class");
	btn1.setAttribute("class","active");
};
btn2.onclick=function(){
	btn1.removeAttribute("class");
	btn3.removeAttribute("class");
	btn4.removeAttribute("class");
	btn5.removeAttribute("class");
	btn6.removeAttribute("class");
	btn2.setAttribute("class","active");
};
btn3.onclick=function(){
	btn2.removeAttribute("class");
	btn1.removeAttribute("class");
	btn4.removeAttribute("class");
	btn5.removeAttribute("class");
	btn6.removeAttribute("class");
	btn3.setAttribute("class","active");
};
btn4.onclick=function(){
	btn2.removeAttribute("class");
	btn3.removeAttribute("class");
	btn1.removeAttribute("class");
	btn5.removeAttribute("class");
	btn6.removeAttribute("class");
	btn4.setAttribute("class","active");
};
btn5.onclick=function(){
	btn2.removeAttribute("class");
	btn3.removeAttribute("class");
	btn4.removeAttribute("class");
	btn1.removeAttribute("class");
	btn6.removeAttribute("class");
	btn5.setAttribute("class","active");
};
btn6.onclick=function(){
	btn2.removeAttribute("class");
	btn3.removeAttribute("class");
	btn4.removeAttribute("class");
	btn5.removeAttribute("class");
	btn1.removeAttribute("class");
	btn6.setAttribute("class","active");
};
window.onscroll = function () {
	if (window.scrollY >= 0 && window.scrollY <=175){
		btn2.removeAttribute("class");
		btn3.removeAttribute("class");
		btn4.removeAttribute("class");
		btn5.removeAttribute("class");
		btn6.removeAttribute("class");
		btn1.setAttribute("class","active");
	}
	if (window.scrollY >= 176 && window.scrollY <=600){
		btn1.removeAttribute("class");
		btn3.removeAttribute("class");
		btn4.removeAttribute("class");
		btn5.removeAttribute("class");
		btn6.removeAttribute("class");
		btn2.setAttribute("class","active");
	}
	if (window.scrollY >= 601 && window.scrollY <=1575){
		btn2.removeAttribute("class");
		btn3.removeAttribute("class");
		btn1.removeAttribute("class");
		btn5.removeAttribute("class");
		btn6.removeAttribute("class");
		btn4.setAttribute("class","active");
	}
	if (window.scrollY >= 1576 && window.scrollY <=2750){
		btn2.removeAttribute("class");
		btn1.removeAttribute("class");
		btn4.removeAttribute("class");
		btn5.removeAttribute("class");
		btn6.removeAttribute("class");
		btn3.setAttribute("class","active");
	}
	if (window.scrollY >= 2751 && window.scrollY <=3480){
		btn2.removeAttribute("class");
		btn3.removeAttribute("class");
		btn4.removeAttribute("class");
		btn1.removeAttribute("class");
		btn6.removeAttribute("class");
		btn5.setAttribute("class","active");
	}
	if (window.scrollY >= 3481 && window.scrollY <=5000){
		btn2.removeAttribute("class");
		btn3.removeAttribute("class");
		btn4.removeAttribute("class");
		btn5.removeAttribute("class");
		btn1.removeAttribute("class");
		btn6.setAttribute("class","active");
	}
};

document.getElementById("sub").onclick=function(){
	document.getElementById("b1").removeAttribute("class");
	document.getElementById("b2").removeAttribute("class");
	document.getElementById("b3").removeAttribute("class");
	document.getElementById("b4").removeAttribute("class");
	document.getElementById("b5").removeAttribute("class");
	document.getElementById("b6").removeAttribute("class");
	document.getElementById("b7").removeAttribute("class");
	document.getElementById("b8").removeAttribute("class");
	document.getElementById("b9").removeAttribute("class");
	document.getElementById("b10").removeAttribute("class");
	document.getElementById("b11").removeAttribute("class");
	document.getElementById("b12").removeAttribute("class");
	document.getElementById("b13").removeAttribute("class");
	document.getElementById("b14").removeAttribute("class");
	document.getElementById("b15").removeAttribute("class");
};