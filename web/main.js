var fs = require("fs");
var libraryPath = "./lib/";

fs.access(libraryPath, function (error) {
    if (error) {
        fs.mkdirSync(libraryPath);
    }


});