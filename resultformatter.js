const config = { subtree: true, childList: true }

const observer = new MutationObserver((mutations) => {
	mutations.forEach(
		m => {
			if (m.type === 'childList' && m.target.tagName === 'DIV' && m.target.className === 'r') {
				m.addedNodes.forEach(ele => {
					if (ele.tagName === 'A') {
						ele.querySelector('br').remove();
						let url = ele.querySelector('div.TbwUpd.NJjxre');
						let title = ele.querySelector('h3');
						if (title.nextSibling !== url) {
							ele.insertBefore(title, url);
						}
						url.style.display = 'block';
						url.style.position = 'relative';
						let cache = ele.parentNode.querySelector('div.B6fmyf');
						url.appendChild(cache);
					}
				})

			}
		}
	);

}
);

chrome.storage.sync.get(['titleFirstLine'], function (items) {
	let st = items.titleFirstLine;
	if (st === false) return;
	observer.observe(document, config);

	document.addEventListener('DOMContentLoaded', function () { observer.disconnect() });

});