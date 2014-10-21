//function hide(element) {
//	element.style.display = "none";
//}
//
//function show(element) {
//	element.style.display = "block";
//}

function hide(element) {
	if (element.classList)
		element.classList.add('hidden');
	else
		element.className += '' + 'hidden';
}

function show(element) {
	if (element.classList)
	element.classList.remove('hidden');
	else
	element.className = element.hidden
		.replace(new RegExp('(^|\\b)' + 'hidden'.split('')
		.join('|') + '(\\b|$)', 'gi'), '');
}

function toggle(element) {
	if (element.classList)
		element.classList.toggle('hidden');
}

//onclick="show(document.querySelector('.login-modal'));";

hide(document.querySelector('.login-modal'));
 
//show(document.querySelector('.login-modal'));

document.addEventListener('DOMContentLoaded', function(){
var loginModal = document.querySelector('.login-modal');

var lightbox = document.querySelector('.lightbox');

var signIn = document.querySelector('.signin');

var cancel = document.querySelector('.cancel');

var loginModalToggleAreas = document.querySelectorAll(
	'.lightbox, .signin, .cancel');
	
	for (var i=0; i<loginModalToggleAreas.length; i++){
	loginModalToggleAreas[i].addEventListener('click', function(){
		toggle(loginModal);
	});
}
});
 


//loginModalToggleAreas.forEach(function(area){
//	area.addEventListener('click', function(){
//	toggle(loginModal);
//});
//
//});




//lightbox.addEventListener('click', function(){
//	toggle(document.querySelector('.login-modal'));
//});
//
//signIn.addEventListener('click', function(){
//	toggle(document.querySelector('.login-modal'));
//});
//
//cancel.addEventListener('click', function(){
//	toggle(document.querySelector('.login-modal'));
//});
