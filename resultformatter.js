let nodes = document.querySelectorAll('.r > a');
console.log('nodes length', nodes.length);
nodes.forEach(ele => {
	let url= ele.childNodes[0];
	let title= ele.childNodes[2];
	ele.insertBefore(title, url);
	url.childNodes[1].textContent= url.childNodes[1].textContent+ '\xA0\xA0\xA0\xA0\xA0\xA0';
	
	url.style.position='relative';
	let parent= ele.parentNode;
	let cache= parent.childNodes[1];
	parent.removeChild(cache);
	url.appendChild(cache);
	
});

