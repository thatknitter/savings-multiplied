function hide(element) {
	if (element.classList)
		element.classList.add('hidden');
	else
		element.className += '' + 'hidden';
}

function show(element) {
	if (element.classList)
	element.classList.remove(hidden);
	else
	element.className = element.hidden
		.replace(new RegExp('(^|\\b)' + 'hidden'.split('')
		.join('|') + '(\\b|$)', 'gi'), '');
}