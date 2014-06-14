Titanium.UI.setBackgroundColor('#000');

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff"
});


var table = Ti.UI.createTableView({height: 'auto', top: 30});

var redditSection = Ti.UI.createTableViewSection({headerTitle: "Reddit Posts"});

var tableSection = [redditSection];

table.setData(tableSection);

var require = require("remotedata");

mainWin.add(table, tableSection);
mainWin.open();
