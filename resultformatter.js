const config = { subtree: true, childList: true }

const observer = new MutationObserver((mutations) => {
	mutations.forEach(
		m => {
			if(m.target.tagName === 'A'){
				m.addedNodes.forEach(ele=>{
					console.log(ele);
				


				})

			}

			if (m.type === 'childList' && m.target.tagName === 'DIV' && m.target.className === 'r') {
				m.addedNodes.forEach(ele => {
					// old format
					// console.log('old format');
					if (ele.childNodes.length === 3) {
						let url = ele.childNodes[0];
						let br = ele.childNodes[1];
						let title = ele.childNodes[2];
						if (url && title) {
							ele.removeChild(br);
							ele.insertBefore(title, url);
							title.style.display = 'block';
							url.style.display = 'block';
							url.style.position = 'relative';
							let parent = ele.parentNode;
							let cache = parent.childNodes[1];
							parent.removeChild(cache);
							url.appendChild(cache);
						}
					} else {
					// a new format
						console.log('child length 2');
						console.log(ele.childNodes[0].childNodes.length);
						if(ele.querySelector('h3')){
					  
							console.log('plugin working');
						
						}

					}

				})

			}
		}
	);

}
);
observer.observe(document, config);

document.addEventListener('DOMContentLoaded', function () { observer.disconnect() });

