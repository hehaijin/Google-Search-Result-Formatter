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

