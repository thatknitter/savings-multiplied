function hide(element) {
	element.style.display = "none";
}

function show(element) {
	element.style.display = "block";
}

onclick="show(document.querySelector('.login-modal'));";

hide(document.querySelector('.login-modal'));
 
//show(document.querySelector('.login-modal'));
 
var loginModal = document.querySelector('.login-modal');

var lightbox = document.querySelector('.lightbox');

lightbox.addEventListener('click', function(){
	hide(document.querySelector('.login-modal'));
});
