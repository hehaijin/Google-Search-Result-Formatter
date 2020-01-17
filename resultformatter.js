function test() {
	let nodes = document.querySelectorAll('.r > a');
	console.log('nodes length', nodes.length);
	nodes.forEach(ele => {
		let url = ele.childNodes[0];
		let title = ele.childNodes[2];
		ele.insertBefore(title, url);
		url.childNodes[1].textContent = url.childNodes[1].textContent + '\xA0\xA0\xA0\xA0\xA0\xA0';

		url.style.position = 'relative';
		let parent = ele.parentNode;
		let cache = parent.childNodes[1];
		parent.removeChild(cache);
		url.appendChild(cache);

	});

}

// var target = document.querySelector('.r > a');
var config = { subtree: true, childList: true }

const observer = new MutationObserver((mutations) => {

	mutations.forEach(
		m => {
			if (m.type === 'childList' && m.target.tagName === 'DIV' && m.target.className === 'r') {

				m.addedNodes.forEach(ele => {
					let url = ele.childNodes[0];
					let br= ele.childNodes[1];
					let title = ele.childNodes[2];
					if (url && title) {
						ele.removeChild(br);
						ele.insertBefore(title, url);
						//url.childNodes[1].textContent = url.childNodes[1].textContent + '\xA0\xA0\xA0\xA0\xA0\xA0';
						title.style.display='block';
						url.style.display='block';						
						url.style.position = 'relative';
						let parent = ele.parentNode;
						let cache = parent.childNodes[1];
						parent.removeChild(cache);
						url.appendChild(cache);
					}
					

				})

			}
		}

	);

}
);
observer.observe(document, config);

document.addEventListener('DOMContentLoaded', function () { observer.disconnect() });

