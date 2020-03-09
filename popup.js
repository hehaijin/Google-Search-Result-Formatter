
console.log('popup page');


chrome.storage.sync.get(['titleFirstLine'], function(items) {
		let st= items.titleFirstLine;
		document.getElementById('titleFirstLine').checked= st;
    });



// document.getElementById('titleFirstLine').checked= true;

document.getElementById('titleFirstLine').addEventListener('click',
()=>{
	console.log('click received');
    let st= document.getElementById('titleFirstLine').checked;	
	 chrome.storage.sync.set({'titleFirstLine': st}, function() {
      console.log('Settings saved', st);
    });
}
)

