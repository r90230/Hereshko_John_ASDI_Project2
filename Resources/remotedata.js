var url = "http://api.reddit.com/";

var remoteResponse = function(e){
	var json = JSON.parse(this.responseText);
	
		
for(var i=0, j=20; i<j; i++){
	var testTitle = json.data.children[i].data.title;
	var testAuthor = json.data.children[i].data.author;
	var testScore = json.data.children[i].data.score;
	
	var theRow = Ti.UI.createTableViewRow({
		title: testTitle,
		desc: "The author of this post is " + testAuthor + ", and the score it received on Reddit is " + testScore
	});

	redditSection.add(theRow);
	theRow.addEventListener("click", function(){
		alert(this.desc);
	});
};
table.setData(tableSection);
};

var remoteError = function(e){
	Ti.API.debug("Status: " + this.status);
	Ti.API.debug("Response: " + this.responseText);
	Ti.API.debug("Error: " + e.error);
	alert("There was an error.");
};

var xhr = Ti.Network.createHTTPClient({
	onload: remoteResponse,
	onerror: remoteError,
	timeout: 20000
});

xhr.open("GET", url);
xhr.send();