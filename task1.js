const path = require('path');
const os = require("os");
const process = require('process');

// Get path seperator
const seperator = path.sep;
console.log(seperator);


// Get current working directory/folder
const cwd = path.resolve();
console.log(cwd);


// Get the extension name
const extName = path.extname('C:/Users/HP/Desktop/node/package.json');
console.log(extName);

// Get the Process ID
// const pid = process.pid()
// console.log(pid)

console.log("process id is " + process.pid);

// Get the current user's details
const user = os.userInfo()
console.log(user)

// Get the current platform
const platform = os.platform()
console.log(platform)


